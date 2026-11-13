import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import articles from "../Articles.js";
import { Link } from "react-router-dom";

const RelatedArticles = ({ baseArticleId }) => {
  const currentId = Number(baseArticleId);
  const prevArticle = articles.find(
    (article) => article.id === currentId - 1
  );
  const nextArticle = articles.find(
    (article) => article.id === currentId + 1
  );

  if (!prevArticle && !nextArticle) return null;

  return (
    <div className="flex gap-6 my-12 max-sm:flex-col">
      {prevArticle && (
        <div className="flex-1 flex items-center gap-4 p-5 rounded-2xl border border-lightGray border-solid bg-white hover:border-orange transition-colors">
          <Link
            to={`/blog/${prevArticle.id}`}
            aria-label={`Previous article: ${prevArticle.title}`}
            className="w-10 h-10 flex justify-center items-center bg-whiteGrey rounded-full hover:bg-orange hover:text-white transition-colors"
          >
            <ArrowBackIosIcon sx={{ fontSize: 16 }} />
          </Link>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-jost font-semibold">Previous</span>
            <Link to={`/blog/${prevArticle.id}`} className="text-base font-exo text-black font-semibold hover:text-orange line-clamp-1">
              {prevArticle.title}
            </Link>
          </div>
        </div>
      )}
      {nextArticle && (
        <div className="flex-1 flex flex-row-reverse items-center gap-4 p-5 rounded-2xl border border-lightGray border-solid bg-white hover:border-orange transition-colors text-right">
          <Link
            to={`/blog/${nextArticle.id}`}
            aria-label={`Next article: ${nextArticle.title}`}
            className="w-10 h-10 flex justify-center items-center bg-whiteGrey rounded-full hover:bg-orange hover:text-white transition-colors"
          >
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </Link>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-jost font-semibold">Next</span>
            <Link to={`/blog/${nextArticle.id}`} className="text-base font-exo text-black font-semibold hover:text-orange line-clamp-1">
              {nextArticle.title}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedArticles;
