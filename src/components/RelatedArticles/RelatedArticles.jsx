import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import articles from "../Articles";
import { Link } from "react-router-dom";

const RelatedArticles = ({ baseArticleId }) => {
  const prevArticle = articles.find(
    (article) => article.id === baseArticleId - 1
  );
  const nextArticle = articles.find(
    (article) => article.id === baseArticleId + 1
  );

  return (
    <div className="flex gap-8 my-16">
      {prevArticle && (
        <div className="flex items-center gap-5 p-8 rounded-xl border border-lightGray border-solid">
          {/* <Link to={`/blog/${prevArticle.id}`} */}
          <Link to={`/blog/${prevArticle.id}`}>
            <button className="w-10 h-10 flex justify-center items-center bg-whiteGrey rounded-md hover:border hover:text-orange hover:border-black">
              <ArrowBackIosIcon className="w-4 h-4" />
            </button>
          </Link>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg text-gray font-jost">Prev Articles</h3>
            <h2 className="text-xl font-exo text-black font-semibold">
              {prevArticle.title}
            </h2>
          </div>
        </div>
      )}
      {nextArticle && (
        <div className="flex flex-row-reverse items-center gap-5 p-8 rounded-xl border border-lightGray border-solid">
          <Link to={`/blog/${nextArticle.id}`}>
            <button className=" w-10 h-10 flex justify-center items-center bg-whiteGrey rounded-md hover:border hover:text-orange hover:border-black">
              <ArrowForwardIosIcon className="w-4 h-4" />
            </button>
          </Link>
          <div className="flex flex-col gap-3 ">
            <h3 className="text-lg text-gray font-jost">Next Articles</h3>
            <h2 className="text-xl font-exo text-black font-semibold">
              {nextArticle.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedArticles;
