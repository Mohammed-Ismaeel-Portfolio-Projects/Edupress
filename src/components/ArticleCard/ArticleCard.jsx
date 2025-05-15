import React from "react";
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
    <Link to={`/blog/${articleId}`}>
      <div
        className={`featured-card max-w-96 border border-slate-300 rounded-3xl 
        ${isList && "max-w-full flex rounded-tr-none rounded-br-none"}
      `}
      >
        <div className="article-image ">
          <img
            src={articleImage}
            alt=""
            className={`w-full 
            ${!isList && "rounded-tr-2xl rounded-tl-2xl"}
           ${isList && " rounded-bl-2xl rounded-tl-2xl"}`}
          />
        </div>
        <div className="card-info p-5 py-10">
          <h1 className="text-xl font-semibold font-exo">{title} </h1>
          <div className="date flex justify-between my-4">
            <div className="group-icon flex gap-2 items-center">
              <div className="icon w-4 h-4">
                <img src={dateIcon} alt="time-icon" className="w-full" />
              </div>
              <p>{date}</p>
            </div>
          </div>
          <div className="tail-card flex justify-between">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
