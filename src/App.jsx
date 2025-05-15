import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import FAQsPage from "./Pages/FAQsPage";
import AuthPage from "./Pages/AuthPage";
import Scroll from "./components/scroll";
import BlogSinglePage from "./Pages/BlogSinglePage";
import { createTheme, ThemeProvider } from "@mui/material";
import NotFound from "./Pages/NotFound";

const App = () => {
  // Create a custom Material UI theme
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Scroll />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/blog/:id" element={<BlogSinglePage />} />
          <Route path="*" element={ <NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
