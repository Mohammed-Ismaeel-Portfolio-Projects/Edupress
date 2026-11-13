import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading";
import Pagination from "../PaginationComponent/PaginationComponent";
import ArticleCard from "../ArticleCard/ArticleCard";
import SidebarArticles from "../SidebarArticles/SidebarArticles";
import articles from "../Articles.js";

const POSTS_PER_PAGE = 6;

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // --- Parse state from URL search params ---
  const urlSearch = searchParams.get("search") || "";
  const selectedCategories = useMemo(() => {
    const raw = searchParams.get("category");
    return raw ? raw.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean) : [];
  }, [searchParams]);

  const selectedTags = useMemo(() => {
    const raw = searchParams.get("tag");
    return raw ? raw.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean) : [];
  }, [searchParams]);

  const viewMode = searchParams.get("view") || "list";
  const isList = viewMode !== "grid";

  const rawPage = parseInt(searchParams.get("page"), 10);
  const currentPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  // Local search input state for smooth typing without spamming history
  const [inputValue, setInputValue] = useState(urlSearch);
  const debounceTimerRef = useRef(null);

  // Synchronize local input if URL search parameter changes externally (e.g. back/forward button)
  useEffect(() => {
    setInputValue(urlSearch);
  }, [urlSearch]);

  // --- Helper to update search params cleanly ---
  const updateQuery = useCallback(
    (newParams, replace = false) => {
      setSearchParams(
        (prev) => {
          const updated = new URLSearchParams(prev);
          Object.entries(newParams).forEach(([key, val]) => {
            if (val === null || val === undefined || val === "" || (Array.isArray(val) && val.length === 0)) {
              updated.delete(key);
            } else if (Array.isArray(val)) {
              updated.set(key, val.join(","));
            } else {
              updated.set(key, String(val));
            }
          });
          return updated;
        },
        { replace }
      );
    },
    [setSearchParams]
  );

  // Debounced search term commit into URL (replaces history while typing)
  const handleSearchChange = (val) => {
    setInputValue(val);
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      updateQuery({ search: val.trim() || null, page: null }, true);
    }, 300);
  };

  const handleCategoryToggle = (catId) => {
    const lower = catId.toLowerCase();
    const next = selectedCategories.includes(lower)
      ? selectedCategories.filter((c) => c !== lower)
      : [...selectedCategories, lower];
    updateQuery({ category: next.length > 0 ? next : null, page: null });
  };

  const handleTagToggle = (tag) => {
    const lower = tag.toLowerCase();
    const next = selectedTags.includes(lower)
      ? selectedTags.filter((t) => t !== lower)
      : [...selectedTags, lower];
    updateQuery({ tag: next.length > 0 ? next : null, page: null });
  };

  const handleClearAll = () => {
    setInputValue("");
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const toggleViewMode = () => {
    updateQuery({ view: isList ? "grid" : "list" }, true);
  };

  const handlePageChange = (newPage) => {
    updateQuery({ page: newPage > 1 ? newPage : null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Filtering Logic ---
  const filteredArticles = useMemo(() => {
    const search = urlSearch.toLowerCase();
    return articles.filter((article) => {
      const matchSearch =
        !search ||
        article.title.toLowerCase().includes(search) ||
        article.date.toLowerCase().includes(search) ||
        article.desc.toLowerCase().includes(search);

      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(article.category?.toLowerCase());

      const matchTags =
        selectedTags.length === 0 ||
        article.tags?.some((tag) =>
          selectedTags.includes(tag.toLowerCase())
        );

      return matchSearch && matchCategory && matchTags;
    });
  }, [urlSearch, selectedCategories, selectedTags]);

  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE) || 1;
  const indexOfLastArticle = currentPage * POSTS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - POSTS_PER_PAGE;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const showArticles = (articlesList) => {
    if (articlesList.length === 0) {
      return (
        <div className="w-full text-center py-16">
          <p className="text-xl text-gray-500 font-exo font-medium mb-3">No articles match your search or filters.</p>
          <button
            onClick={handleClearAll}
            className="text-orange-accessible underline font-semibold text-base cursor-pointer hover:opacity-80"
          >
            Clear all filters
          </button>
        </div>
      );
    }

    return articlesList.map((article) => (
      <ArticleCard
        key={article.id}
        articleId={article.id}
        articleImage={article.image}
        title={article.title}
        date={article.date}
        desc={article.desc}
        isList={isList}
      />
    ));
  };

  return (
    <div className="articles-section mt-52 mx-auto flex max-lg:flex-col-reverse gap-8 relative w-11/12 mb-10">
      <div className="w-9/12 max-lg:w-full">
        <SectionHeading
          title={"All Articles"}
          toggleSidebar={toggleViewMode}
          isList={isList}
          searchTerm={inputValue}
          setSearchTerm={handleSearchChange}
        />
        <div
          className={`courses-cards flex flex-wrap justify-center my-14 gap-8 max-xl:justify-center w-full ${
            isList ? "flex-col" : ""
          }`}
        >
          {showArticles(currentArticles)}
        </div>
        {totalPages > 1 && (
          <div className="flex w-full">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
      <div className="w-3/12 max-lg:w-full">
        <SidebarArticles
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryToggle}
          selectedTags={selectedTags}
          onTagChange={handleTagToggle}
        />
      </div>
    </div>
  );
};

export default Articles;
