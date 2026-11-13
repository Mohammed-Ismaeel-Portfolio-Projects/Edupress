# Changelog

All notable changes to the **EduPress** frontend application are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-11-13

### Added
- **Responsive Mobile Navigation**: Added responsive hamburger toggle button, slide-down drawer menu, and mobile search input for tablet and smartphone viewports (< 1024px).
- **Dynamic Route Navigation**: Enhanced `NavLink` items to dynamically reflect active route state with distinct underline and orange highlights.
- **Client-Side Breadcrumb Routing**: Migrated MUI breadcrumb anchors to React Router `Link` components to prevent unwanted full browser reloads during navigation.
- **Dedicated 404 Error Page**: Enhanced `NotFound.jsx` with descriptive messaging, visual graphic, and "Back to Homepage" navigation CTA.
- **Article Fallback State**: Added explicit 404 / "Article Not Found" handling with a return link in `BlogSinglePage.jsx` when invalid article IDs are accessed.
- **Production Branded Favicon**: Added vector SVG graduation cap favicon (`public/favicon.svg`) resolving production 404 errors.
- **SEO & Social Meta Tags**: Added comprehensive Open Graph tags, Twitter card metadata, search engine descriptions, keywords, and theme colors in `index.html`.
- **Form State Management & Feedback**: Added controlled state handling, validation, and success notification toasts for Login, Registration, Contact Us, and Leave Comment forms.
- **Verification Script**: Added `"check": "npm run lint && npm run build"` command in `package.json`.
- **Student Testimonials Section**: Re-enabled and redesigned the `Feedback` section on the homepage featuring authentic student reviews in a responsive 4-column grid.

### Fixed
- **Critical Blog Navigation Bug**: Fixed `LatestArticles.jsx` omitting `articleId={article.id}` on `<ArticleCard>`, which previously routed all homepage article clicks to `/blog/undefined` causing an infinite loading hang.
- **Cross-Platform Case Sensitivity**: Standardized all component folder names, filenames, and import statements to strict PascalCase (`Button`, `BreakCrumb`, `Banner`, `RecentPost`, `Scroll`) to guarantee build compatibility on Linux, Docker, and CI/CD environments.
- **Course Pricing Display Logic**: Fixed `FeaturedCard.jsx` hardcoding `<span className="text-green">Free</span>` and crossed-out prices for paid courses. Free courses now display "Free" and paid courses correctly display their actual price (`$salary`).
- **Instructor Filter Completeness**: Added instructor "Alice Smith" to `Instructors.js` to ensure students can filter all 6 courses in the catalog.
- **Price Filter Toggle Bug**: Fixed price filtering logic in `Courses.jsx` and `SidebarCoursesListing.jsx` so selecting "All" or toggling between "Free" and "Paid" resets and updates course listings seamlessly.
- **Section Heading Z-Index Stacking**: Removed `-z-50` negative z-index on `SectionHeading.jsx` that caused search and view controls to lose pointer events in certain stacking contexts.
- **Dead & Broken Links**:
  - Fixed `Heading.jsx` generating `/undefined` URLs when `buttonTo` was not supplied.
  - Standardized all course links from `/Courses` (uppercase) to `/courses`.
  - Replaced dead `#` links in footer programs with functional routes to `/courses` and `/blog`.
- **JSX & HTML Attribute Conformance**:
  - Fixed `label for="save"` to `label htmlFor="save"` in `ContactUs.jsx`.
  - Fixed `require` to `required` in `PasswordInput.jsx`.
  - Fixed `allowfullscreen` to `allowFullScreen` and `referrerpolicy` to `referrerPolicy` in `ContactInfo.jsx`.
- **Content Typos & Quality**:
  - Corrected "Posts Comment" button labels on the Hero banner and Contact Us page to context-appropriate "Explore Courses" and "Send Message".
  - Fixed typos in `topCategories.js` ("Markiting" -> "Marketing", "Contnet Writing" -> "Content Writing").
  - Fixed typos in banners ("get more power form" -> "from", "Explorer Course" -> "Explore Courses").
  - Replaced 7 identical FAQ questions with distinct, informative LMS questions in `FAQs.js`.
  - Replaced 4 repeated "Certification" bullet points in `Grow.jsx` with distinct educational benefits.
  - Dynamically calculated comment counts in `Comments.jsx` instead of displaying hardcoded "20 Comments".

### Changed
- **Image Asset Optimization**:
  - Resized and compressed comment avatar `john.jpg` from **1,980 kB down to 12.59 kB** (99.4% reduction).
  - Resized and compressed avatar `Sara.jpg` from **185 kB down to 10.49 kB**.
  - Safely purged 17 unreferenced orphan graphic files (`Rectangle 141.png`, `Group 3643.png`, etc.) saving over 2.5 MB of repository weight.
- **CSS Architecture**: Imported `style.css` and `App.css` directly into `src/main.jsx` for standard Vite bundling, removing raw `<link rel="stylesheet">` from `index.html`.
- **Linting & Code Cleanliness**:
  - Reconfigured `eslint.config.js` to eliminate false-positive `react/prop-types` and unused `React` imports under React 18 JSX transform.
  - Purged all dead commented-out CSS and JSX blocks from `SidebarCheckbox.jsx`, `Banner.jsx`, `Grow.jsx`, and `Statistics.jsx`.
  - Cleaned all 156 ESLint baseline errors, achieving a 0-error clean pass.
- **Re-enabled React StrictMode**: Restored `<StrictMode>` in `src/main.jsx` to safeguard component lifecycle purity and detect side-effects during development.
