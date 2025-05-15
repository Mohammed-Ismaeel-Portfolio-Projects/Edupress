import React, { useState } from "react";
import Pagination from "../PaginationComponent/PaginationComponent";
import SidebarArticles from "../SidebarArticles/SidebarArticles";
import MetaBlogHeading from "../MetaBlogHeading/MetaBlogHeading";
import personIcon from "./../../assets/images/person-icon.png";
import commentIcon from "./../../assets/images/comment-icon.png";
import dateIcon from "./../../assets/images/date.png";
import { tags } from "../Articles";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import Comments from "../Comments/Comments";
import LeaveComment from "../LeaveComment/LeaveComment";

const BlogSingle = ({ article }) => {

  if (!article) {
    return (
      <div className="blog mt-52 mx-auto w-11/12 mb-10 text-center">
        <h1 className="text-3xl font-exo text-black font-semibold">
          Loading article...
        </h1>
      </div>
    );
  }

  return (
    <div className="blog mt-52 mx-auto flex gap-8 relative w-11/12 mb-10">
      <div className="w-10/12">
        <div className="blog-single-heading">
          <h1 className="text-3xl font-exo text-black font-semibold">
            {article.title}
          </h1>
          <div className="meta-heading flex gap-10 items-center my-4">
            <MetaBlogHeading icon={personIcon} by={article.by} />
            <MetaBlogHeading icon={dateIcon} date={article.date} />
            <MetaBlogHeading
              icon={commentIcon}
              commentsCounter={article.commentsCounter}
            />
          </div>
        </div>
        <div className="my-14 w-full">
          <img
            src={article.image}
            alt="Article"
            className="w-full rounded-3xl"
          />
          <p className="my-10 font-jost text-lg text-gray">{article.subject}</p>
          <div className="flex gap-x-2 gap-y-5 flex-wrap justify-between items-center">
            <h4 className="font-jost text-lg text-gray">tags:</h4>
            {tags?.map((ele, key) => {
              return (
                <p
                  key={key}
                  className={`font-jost text-lg text-gray border border-solid border-whiteGrey px-5 py-2 rounded
                    ${
                      article.tags.includes(ele)
                        ? "font-semibold bg-whiteGrey text-black"
                        : ""
                    }`}
                >
                  {ele}
                </p>
              );
            })}
          </div>
          <div className="flex gap-4 my-10 items-center">
            <h4 className="font-jost text-lg text-gray">Share:</h4>
            <ul className="list-none flex gap-5">
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-facebook-f"></i>{" "}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <RelatedArticles baseArticleId={ article.id} />
          <Comments comments={article.comments} />
        </div>
        <div className="flex w-full mb-16">
          <Pagination />
        </div>
        <LeaveComment />
      </div>
      <SidebarArticles BlogSingle={true} />
    </div>
  );
};

export default BlogSingle;
