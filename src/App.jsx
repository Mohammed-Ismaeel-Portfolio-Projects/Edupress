import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Scroll from "./components/Scroll";
import RouteTitleUpdater from "./components/RouteTitleUpdater";
import { createTheme, ThemeProvider } from "@mui/material";
import { DemoStoreProvider } from "./context/DemoStoreContext";

const HomePage = lazy(() => import("./Pages/HomePage"));
const CoursesPage = lazy(() => import("./Pages/CoursesPage"));
const BlogPage = lazy(() => import("./Pages/BlogPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const FAQsPage = lazy(() => import("./Pages/FAQsPage"));
const AuthPage = lazy(() => import("./Pages/AuthPage"));
const BlogSinglePage = lazy(() => import("./Pages/BlogSinglePage"));
const CourseSinglePage = lazy(() => import("./Pages/CourseSinglePage"));
const MyWishlistPage = lazy(() => import("./Pages/MyWishlistPage"));
const MyLearningPage = lazy(() => import("./Pages/MyLearningPage"));
const MyProfilePage = lazy(() => import("./Pages/MyProfilePage"));
const NotFound = lazy(() => import("./Pages/NotFound"));

// Stable theme instance outside component to prevent re-creation on every render
const theme = createTheme({
  typography: {},
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    black: {
      main: "#000000",
    },
  },
});

const PageLoader = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center py-32" aria-live="polite">
    <div className="w-12 h-12 border-4 border-slate-200 border-t-orange rounded-full animate-spin"></div>
    <span className="sr-only">Loading page...</span>
  </div>
);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DemoStoreProvider>
          {/* Accessible Skip to Main Content Link for Keyboard and Screen-Reader Users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-2.5 focus:bg-orange focus:text-white focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange/40 transition-all duration-200"
          >
            Skip to main content
          </a>
          <Scroll />
          <RouteTitleUpdater />
          <Suspense fallback={<PageLoader />}>
            <main id="main-content" tabIndex="-1" className="outline-none min-h-screen flex flex-col justify-between">
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/my-wishlist" element={<MyWishlistPage />} />
              <Route path="/my-learning" element={<MyLearningPage />} />
              <Route path="/my-profile" element={<MyProfilePage />} />
              <Route path="/courses/:id" element={<CourseSinglePage />} />
              <Route path="/blog/:id" element={<BlogSinglePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
        </DemoStoreProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
