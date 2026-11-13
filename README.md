# EduPress — Modern LMS & Online Learning Platform

EduPress is a modern, responsive, and accessible educational web application built with React and Vite. It provides a comprehensive course discovery catalog, detailed curriculum overviews, article browsing, and interactive demo persistence powered by browser LocalStorage.

---

## Overview

EduPress is designed as a frontend-only Learning Management System (LMS) interface. It serves as an exploration of modern educational web experiences, featuring rich discovery controls, deep URL state synchronization, and client-side simulation of key LMS features—such as user authentication, course enrollment, wishlists, discussion comments, and contact messaging.

Because EduPress operates entirely on the client side, it requires no backend setup, external database, or third-party API credentials to explore and evaluate.

---

## Features

- **Course Catalog & Discovery:**
  - Case-insensitive search across course titles, instructors, overviews, prerequisites, and curriculum lesson titles.
  - Multi-category filtering (Art & Design, Development, Business & Finance, Marketing, Content Writing, Science & Tech).
  - Faceted filters for instructors, price tier (All, Free, Paid via semantic radio group), and minimum review ratings.
  - Sorting by popularity, title (A–Z), and rating.
  - Client-side pagination and responsive list/grid view modes.
  - Active filter chip display with single-click removal and "Clear all filters" actions.
- **Deep URL State Synchronization:**
  - Course and article search terms, category filters, tags, pagination, and view modes synchronize bidirectionally with browser URL query parameters.
  - Native browser Back and Forward navigation restores matching search and filter states.
  - Debounced search input replaces browser history while typing to avoid history spamming.
- **Course Details Experience:**
  - Rich curriculum outlines with expandable course modules and detailed lesson descriptions.
  - WAI-ARIA compliant tabbed navigation (Overview, Curriculum, Instructor, FAQs) supporting full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Home`, `End`).
  - Related courses recommendations based on shared subject category.
  - Sticky course pricing and enrollment aside card on desktop layouts.
- **Demo State & Browser Persistence:**
  - **Wishlist Management:** Save favorite courses with instant visual heart indicators and persistence in LocalStorage.
  - **Course Enrollment:** Instant simulated enrollment into active demo session.
  - **Student Learning Dashboard:** View all enrolled courses with direct access to continue learning.
  - **User Profile Dashboard:** Manage local profile identity details and review personal activity summaries.
  - **Passwordless Demo Authentication:** Simulated login and registration requiring only Name and Email.
  - **Discussion Comments:** Leave comments on blog articles with local persistence alongside pre-populated community remarks.
  - **Contact Admissions:** Validate and submit local contact inquiries with instant feedback.
- **Accessibility & Standards (WCAG 2.2 AA):**
  - Logical, single-`<h1>` heading hierarchy across all application routes.
  - Accessible "Skip to main content" landmark link for keyboard users.
  - Accessible contrast ratios meeting WCAG 2.2 AA standards ($\ge 4.5:1$ for normal text).
  - Respects user motion preferences (`prefers-reduced-motion`) by disabling non-essential transitions and smooth scrolling.
- **Dynamic SEO & Navigation:**
  - Dynamic document title updates on route transitions incorporating course titles, article titles, or search filters.
  - Dedicated custom 404 page with navigation fallbacks.
  - Upward breadcrumb navigation linking directly back to category-filtered catalogs.

---

## Technology Stack

EduPress is built on a modern JavaScript ecosystem:

- **Core Framework:** [React](https://react.dev/) (v18.3.1) & [React DOM](https://react.dev/)
- **Build Tool & Bundler:** [Vite](https://vitejs.dev/) (v5.4.10)
- **Routing:** [React Router](https://reactrouter.com/) (v6.27.0) with lazy-loaded route chunks
- **Styling & Design System:**
  - [Tailwind CSS](https://tailwindcss.com/) (v3.4.14)
  - [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
  - Custom responsive CSS Grid and Flexbox layouts
- **UI Components & Icons:**
  - [Material UI](https://mui.com/) (v7.0.2) Accordion & Breadcrumbs
  - [React Icons](https://react-icons.github.io/react-icons/) (v5.3.0) FontAwesome 6, Bootstrap, and Material design icons
- **State Architecture:** React Context API (`DemoStoreContext`) & Browser `localStorage`
- **Linting & Code Standards:** [ESLint](https://eslint.org/) (v9.13.0) with flat config

---

## Pages & Routes

The application defines 12 primary client-side routes:

| Route Path | Page Component | Description |
| :--- | :--- | :--- |
| `/` or `/home` | `HomePage` | Hero banner, category highlights, featured courses, statistics, educational benefits, and latest articles. |
| `/courses` | `CoursesPage` | Filterable course discovery catalog with faceted sidebar, search, and pagination. |
| `/courses/:id` | `CourseSinglePage` | Dynamic course detail view with curriculum modules, instructor bio, FAQs, and enrollment aside. |
| `/blog` | `BlogPage` | Article discovery catalog with keyword search, category filtering, tag selection, and pagination. |
| `/blog/:id` | `BlogSinglePage` | Full article view with author metadata, share links, related articles, and dynamic comment submission. |
| `/contact` | `ContactPage` | Direct phone/email admissions details, Google Maps embed, and simulated contact message form. |
| `/faqs` | `FAQsPage` | Frequently asked questions organized with interactive expandable accordions. |
| `/auth` | `AuthPage` | Passwordless demo login and registration forms. |
| `/my-wishlist` | `MyWishlistPage` | Dashboard of courses saved by the user during their session. |
| `/my-learning` | `MyLearningPage` | Dashboard of courses enrolled by the user with active course cards. |
| `/my-profile` | `MyProfilePage` | User profile editor, session reset/logout, and learning snapshot metrics. |
| `/*` | `NotFound` | Standardized 404 page for unmatched routes and missing resources. |

---

## Installation & Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.x, 20.x, or 22.x) and `npm` installed on your machine.

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd edupress
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

### Available Scripts

In accordance with `package.json`, the following commands are available:

- `npm run dev` — Starts the local Vite development server with Hot Module Replacement (HMR).
- `npm run build` — Compiles and bundles production-ready assets into the `dist/` directory.
- `npm run lint` — Runs ESLint across the codebase to check for syntax and style issues.
- `npm run check` — Runs both `npm run lint` and `npm run build` sequentially.
- `npm run preview` — Locally previews the generated production build from `dist/`.

---

## Demo Data & Client-Side Persistence

EduPress utilizes a centralized React Context (`DemoStoreContext`) to provide an interactive simulation of an active LMS session:

- **Storage Engine:** Data is stored under the `edupress_demo_store_v1` key in the browser's `localStorage`.
- **Simulated Authentication:** Authentication is purely demonstrated on the client side. No password is required or stored; entering a name and email establishes a session identifier.
- **Wishlist & Enrollment:** Adding courses to the wishlist or enrolling stores the corresponding course IDs locally. State updates are automatically reflected across navigation bars, cards, and dashboards.
- **Comments & Contact Messages:** User submissions are appended to the active `localStorage` store. Submitted article comments immediately render in the comments list.
- **Session Reset vs. Data Clearing:** Logging out resets the current active user session while preserving locally wishlisted and enrolled courses.
- **Data Scope:** All persisted information is strictly local to your browser and device. Clearing browser cache or LocalStorage resets the application to its default initial state.

---

## Project Structure

```
edupress/
├── public/                       # Static public assets (favicon.svg, etc.)
├── src/
│   ├── assets/                   # WebP images, vector icons, and styles
│   │   ├── css/                  # Legacy stylesheet rules and resets
│   │   └── images/               # Optimized course, article, and author graphics
│   ├── components/               # Modular reusable UI components
│   │   ├── ArticleCard/          # Blog post summary card
│   │   ├── Articles/             # Article grid and discovery engine
│   │   ├── CourseDetails/        # CourseHeader, CourseInfoCard, CourseTabs, RelatedCourses
│   │   ├── Courses/              # Course catalog discovery engine
│   │   ├── CoursesFilterChips/   # Active filter tag pills
│   │   ├── Footer/               # Responsive footer with category links
│   │   ├── NavBar/               # Top navigation, search popup, profile dropdown, mobile drawer
│   │   ├── PaginationComponent/  # Accessible page navigation controls
│   │   ├── RouteTitleUpdater.jsx # Dynamic document.title synchronizer
│   │   └── SidebarCoursesListing/# Faceted filter sidebar for catalog
│   ├── context/
│   │   └── DemoStoreContext.jsx  # LocalStorage state engine & hooks
│   ├── data/
│   │   └── courseDetails.js      # Structured curriculum, instructor bios, and lesson outlines
│   ├── Pages/                    # Top-level view route components
│   ├── utils/
│   │   └── courseFilterUtils.js  # Search indexing, sorting, and facet count algorithms
│   ├── App.jsx                   # Root application wrapper, skip link, and route definitions
│   ├── App.css                   # Global base styles, reduced motion queries, and typography
│   └── main.jsx                  # React DOM entry point
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML entry point with metadata
├── package.json                  # Dependencies and build scripts
├── tailwind.config.js            # Tailwind theme tokens and palette customizations
└── vite.config.js                # Vite build and plugin configuration
```

---

## Limitations & Architecture Scope

- **Frontend-Only Application:** EduPress is intentionally built without a backend server or live database.
- **No Real Authentication:** The login and registration flows do not issue JSON Web Tokens (JWT) or validate cryptographic credentials.
- **No External Network Requests:** The application performs zero network requests to external APIs or remote endpoints. Contact submissions and comments are not transmitted over the internet.
- **Demo Course Content:** Course outlines, instructors, lesson schedules, and pricing represent simulated demonstration data for interface evaluation.
- **No Payment Gateways:** Purchasing or enrolling in paid courses is simulated locally with zero real monetary transactions.

---

## License

This project does not currently specify an open-source license. All rights are reserved by the original project authors.
