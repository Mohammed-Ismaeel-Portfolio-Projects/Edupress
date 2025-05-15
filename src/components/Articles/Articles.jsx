import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Pagination from "../PaginationComponent/PaginationComponent";
import ArticleCard from "../ArticleCard/ArticleCard";
import SidebarArticles from "../SidebarArticles/SidebarArticles";
import articles from "./../Articles";

const Articles = () => {
  const [isList, setIsList] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const postsPerPage = 6;

  const toggleFilter = (id, stateSetter, stateArray) => {
    if (stateArray.includes(id)) {
      stateSetter(stateArray.filter((item) => item !== id));
    } else {
      stateSetter([...stateArray, id]);
    }
    setCurrentPage(1);
  };

  const filteredArticles = articles.filter((article) => {
    const search = searchTerm.toLowerCase();
    const matchSearch =
      article.title.toLowerCase().includes(search) ||
      article.date.toLowerCase().includes(search) ||
      article.desc.toLowerCase().includes(search);

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(article.category?.toLowerCase());

      const matchTags =
      selectedTags.length === 0 ||
      article.tags?.some((tag) =>
        selectedTags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
      );
    return matchSearch && matchCategory && matchTags;
  });

  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);
  const indexOfLastArticle = currentPage * postsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - postsPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const showArticles = (articlesList) => {
    return articlesList.map((article, key) => (
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

  const toggleSidebarIsList = () => {
    setIsList(!isList);
  };

  function setSearch(inputValue) {
    setSearchTerm(inputValue);
    setCurrentPage(1);
  }

  return (
    <div className="articles-section mt-52 mx-auto flex gap-8 relative w-11/12 mb-10">
      <div className="w-10/12">
        <SectionHeading
          title={"All Articles"}
          toggleSidebar={toggleSidebarIsList}
          isList={isList}
          searchTerm={searchTerm}
          setSearchTerm={setSearch}
        />
        <div
          className={`courses-cards flex flex-wrap justify-center my-14 gap-28 max-xl:justify-center w-full ${
            isList && "flex-col"
          }`}
        >
          {showArticles(currentArticles)}
        </div>
        <div className="flex w-full">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <SidebarArticles
        selectedCategories={selectedCategories}
        onCategoryChange={(id) =>
          toggleFilter(id, setSelectedCategories, selectedCategories)
        }
        selectedTags={selectedTags}
        onTagChange={(tag) => toggleFilter(tag, setSelectedTags, selectedTags)}
      />
    </div>
  );
};

export default Articles;
