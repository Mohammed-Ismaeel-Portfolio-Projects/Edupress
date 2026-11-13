import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import coursesPosts from "../components/Courses.js";
import { STORAGE_KEY, SCHEMA_VERSION } from "./demoStoreConstants.js";

const DemoStoreContext = createContext(null);

// Canonical set of existing course IDs
const validCourseIds = new Set(coursesPosts.map((c) => c.id));

const DEFAULT_STATE = {
  schemaVersion: SCHEMA_VERSION,
  user: null, // { name: string, email: string }
  enrolledCourseIds: [],
  wishlistCourseIds: [],
  savedCommenter: {
    name: "",
    email: "",
  },
  articleComments: [], // [{ id, articleId, name, email, content, date, isDemo: true }]
  contactSubmissions: [], // [{ id, name, email, comment, date }]
};

/**
 * Validates and sanitizes raw data retrieved from localStorage
 */
function sanitizeState(raw) {
  if (!raw || typeof raw !== "object" || raw.schemaVersion !== SCHEMA_VERSION) {
    return DEFAULT_STATE;
  }

  // Validate user
  let user = null;
  if (raw.user && typeof raw.user === "object") {
    if (typeof raw.user.name === "string" && typeof raw.user.email === "string") {
      user = {
        name: raw.user.name.trim(),
        email: raw.user.email.trim(),
      };
    }
  }

  // Validate enrolledCourseIds (only existing courses, no duplicates)
  let enrolledCourseIds = [];
  if (Array.isArray(raw.enrolledCourseIds)) {
    enrolledCourseIds = Array.from(
      new Set(raw.enrolledCourseIds.filter((id) => typeof id === "string" && validCourseIds.has(id)))
    );
  }

  // Validate wishlistCourseIds (only existing courses, no duplicates)
  let wishlistCourseIds = [];
  if (Array.isArray(raw.wishlistCourseIds)) {
    wishlistCourseIds = Array.from(
      new Set(raw.wishlistCourseIds.filter((id) => typeof id === "string" && validCourseIds.has(id)))
    );
  }

  // Validate savedCommenter
  let savedCommenter = { name: "", email: "" };
  if (raw.savedCommenter && typeof raw.savedCommenter === "object") {
    savedCommenter = {
      name: typeof raw.savedCommenter.name === "string" ? raw.savedCommenter.name.trim() : "",
      email: typeof raw.savedCommenter.email === "string" ? raw.savedCommenter.email.trim() : "",
    };
  }

  // Validate articleComments
  let articleComments = [];
  if (Array.isArray(raw.articleComments)) {
    articleComments = raw.articleComments.filter(
      (c) =>
        c &&
        typeof c === "object" &&
        typeof c.id === "string" &&
        (typeof c.articleId === "string" || typeof c.articleId === "number") &&
        typeof c.name === "string" &&
        typeof c.content === "string"
    );
  }

  // Validate contactSubmissions
  let contactSubmissions = [];
  if (Array.isArray(raw.contactSubmissions)) {
    contactSubmissions = raw.contactSubmissions.filter(
      (s) =>
        s &&
        typeof s === "object" &&
        typeof s.id === "string" &&
        typeof s.name === "string" &&
        typeof s.email === "string"
    );
  }

  return {
    schemaVersion: SCHEMA_VERSION,
    user,
    enrolledCourseIds,
    wishlistCourseIds,
    savedCommenter,
    articleComments,
    contactSubmissions,
  };
}

export const DemoStoreProvider = ({ children }) => {
  // Initialize state synchronously with try/catch fallback
  const [store, setStore] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return sanitizeState(parsed);
      }
    } catch (e) {
      console.warn("EduPress DemoStore: Unable to read from localStorage. Using default memory state.", e);
    }
    return DEFAULT_STATE;
  });

  // Automatically sync updates to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {
      console.warn("EduPress DemoStore: Unable to persist to localStorage.", e);
    }
  }, [store]);

  // --- Authentication Methods ---
  const loginDemoUser = useCallback((userData) => {
    if (!userData || typeof userData !== "object") return;
    const name = (userData.name || "").trim();
    const email = (userData.email || "").trim();
    if (!name || !email) return;

    setStore((prev) => ({
      ...prev,
      user: { name, email },
    }));
  }, []);

  const logoutDemoUser = useCallback(() => {
    // Approved Decision: Logging out clears ONLY the current demo user session.
    // Preserves Wishlist, Enrolled courses, Article comments, and Contact submissions.
    setStore((prev) => ({
      ...prev,
      user: null,
    }));
  }, []);

  const updateProfile = useCallback((name, email) => {
    const cleanName = (name || "").trim();
    const cleanEmail = (email || "").trim();
    if (!cleanName || !cleanEmail) return false;

    setStore((prev) => ({
      ...prev,
      user: { name: cleanName, email: cleanEmail },
    }));
    return true;
  }, []);

  // --- Wishlist Methods ---
  const toggleWishlist = useCallback((courseId) => {
    if (!courseId || typeof courseId !== "string" || !validCourseIds.has(courseId)) return;

    setStore((prev) => {
      const exists = prev.wishlistCourseIds.includes(courseId);
      const updated = exists
        ? prev.wishlistCourseIds.filter((id) => id !== courseId)
        : [...prev.wishlistCourseIds, courseId];

      return {
        ...prev,
        wishlistCourseIds: updated,
      };
    });
  }, []);

  const isInWishlist = useCallback(
    (courseId) => {
      if (!courseId) return false;
      return store.wishlistCourseIds.includes(courseId);
    },
    [store.wishlistCourseIds]
  );

  // --- Enrollment Methods ---
  const enrollInCourse = useCallback((courseId) => {
    if (!courseId || typeof courseId !== "string" || !validCourseIds.has(courseId)) return;

    setStore((prev) => {
      if (prev.enrolledCourseIds.includes(courseId)) {
        return prev; // Avoid duplicates
      }
      return {
        ...prev,
        enrolledCourseIds: [...prev.enrolledCourseIds, courseId],
      };
    });
  }, []);

  const removeEnrollment = useCallback((courseId) => {
    if (!courseId) return;
    setStore((prev) => ({
      ...prev,
      enrolledCourseIds: prev.enrolledCourseIds.filter((id) => id !== courseId),
    }));
  }, []);

  const isEnrolled = useCallback(
    (courseId) => {
      if (!courseId) return false;
      return store.enrolledCourseIds.includes(courseId);
    },
    [store.enrolledCourseIds]
  );

  // --- Commenter & Article Comments Methods ---
  const updateSavedCommenter = useCallback((commenterData) => {
    if (!commenterData) return;
    setStore((prev) => ({
      ...prev,
      savedCommenter: {
        name: (commenterData.name || "").trim(),
        email: (commenterData.email || "").trim(),
      },
    }));
  }, []);

  const addArticleComment = useCallback((commentData) => {
    if (!commentData) return;
    const { articleId, name, email, content } = commentData;
    if (articleId === undefined || articleId === null || articleId === "" || !name?.trim() || !content?.trim()) return;

    const newComment = {
      id: `demo-comment-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      articleId: String(articleId),
      name: name.trim(),
      email: (email || "").trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      isDemo: true,
    };

    setStore((prev) => ({
      ...prev,
      articleComments: [newComment, ...prev.articleComments],
    }));
  }, []);

  const getArticleComments = useCallback(
    (articleId) => {
      if (articleId === undefined || articleId === null || articleId === "") return [];
      const idStr = String(articleId);
      return store.articleComments.filter((c) => c.articleId === idStr);
    },
    [store.articleComments]
  );

  // --- Contact Form Submissions ---
  const addContactSubmission = useCallback((submissionData) => {
    if (!submissionData) return null;
    const { name, email, comment } = submissionData;
    if (!name?.trim() || !email?.trim() || !comment?.trim()) return null;

    const newSubmission = {
      id: `demo-contact-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      comment: comment.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setStore((prev) => ({
      ...prev,
      contactSubmissions: [newSubmission, ...prev.contactSubmissions],
    }));

    return newSubmission.id;
  }, []);

  const contextValue = useMemo(
    () => ({
      // State
      user: store.user,
      enrolledCourseIds: store.enrolledCourseIds,
      wishlistCourseIds: store.wishlistCourseIds,
      savedCommenter: store.savedCommenter,
      articleComments: store.articleComments,
      contactSubmissions: store.contactSubmissions,
      isAuthenticated: Boolean(store.user && store.user.name && store.user.email),

      // Auth
      loginDemoUser,
      logoutDemoUser,
      updateProfile,

      // Wishlist
      toggleWishlist,
      isInWishlist,
      wishlistCount: store.wishlistCourseIds.length,

      // Enrollment
      enrollInCourse,
      removeEnrollment,
      isEnrolled,
      enrolledCount: store.enrolledCourseIds.length,

      // Comments & Contact
      updateSavedCommenter,
      addArticleComment,
      getArticleComments,
      addContactSubmission,
    }),
    [
      store,
      loginDemoUser,
      logoutDemoUser,
      updateProfile,
      toggleWishlist,
      isInWishlist,
      enrollInCourse,
      removeEnrollment,
      isEnrolled,
      updateSavedCommenter,
      addArticleComment,
      getArticleComments,
      addContactSubmission,
    ]
  );

  return <DemoStoreContext.Provider value={contextValue}>{children}</DemoStoreContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDemoStore = () => {
  const context = useContext(DemoStoreContext);
  if (!context) {
    throw new Error("useDemoStore must be used within a DemoStoreProvider");
  }
  return context;
};

export default DemoStoreContext;
