import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { WorksPage } from "./pages/WorksPage";
import { useState, useEffect } from "react";
import UiContext from "./contexts/UiContext";

import { BlogPostDetailPage } from "./pages/BlogPostDetailPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("portfolio-theme") as "light" | "dark") || "light"
  );
  const [lang, setLang] = useState<"fr" | "en">(
    () => (localStorage.getItem("portfolio-lang") as "fr" | "en") || "fr"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  return (
    <UiContext.Provider value={{ theme, setTheme, lang, setLang }}>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostDetailPage />} />
        </Routes>
      </SiteLayout>
    </UiContext.Provider>
  );
}
