import { Link } from "react-router-dom";
import "./ArticleCardStyle.css";
import dateIcon from "./../../assets/images/date.png";

const ArticleCard = ({
  articleId,
  articleImage,
  title,
  date,
  desc,
  isList,
}) => {
  return (
    <Link to={`/blog/${articleId}`} className="block group">
      <div
        className={`featured-card max-w-96 border border-slate-300 rounded-3xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200
        ${isList ? "max-w-full flex max-lg:flex-col rounded-tr-none rounded-br-none" : ""}
      `}
      >
        <div className={`article-image ${isList ? "lg:w-2/5" : "w-full"}`}>
          <img
            src={articleImage}
            alt={title || "Article thumbnail"}
            className={`w-full h-full object-cover
            ${!isList ? "rounded-tr-2xl rounded-tl-2xl" : ""}
           ${isList ? "rounded-bl-2xl rounded-tl-2xl max-lg:rounded-none" : ""}`}
          />
        </div>
        <div className={`card-info p-5 py-8 ${isList ? "lg:w-3/5" : "w-full"}`}>
          <h2 className="text-xl font-semibold font-exo group-hover:text-orange transition-colors line-clamp-2">{title}</h2>
          <div className="date flex justify-between my-4">
            <div className="group-icon flex gap-2 items-center text-sm text-gray-500">
              <div className="icon w-4 h-4">
                <img src={dateIcon} alt="" className="w-full" aria-hidden="true" />
              </div>
              <p>{date}</p>
            </div>
          </div>
          <div className="tail-card">
            <p className="text-gray text-base line-clamp-3 leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
