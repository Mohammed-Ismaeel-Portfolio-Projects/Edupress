import SidebarArticles from "../SidebarArticles/SidebarArticles";
import MetaBlogHeading from "../MetaBlogHeading/MetaBlogHeading";
import personIcon from "./../../assets/images/person-icon.png";
import commentIcon from "./../../assets/images/comment-icon.png";
import dateIcon from "./../../assets/images/date.png";
import { tags } from "../Articles.js";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import Comments from "../Comments/Comments";
import LeaveComment from "../LeaveComment/LeaveComment";
import { useDemoStore } from "../../context/DemoStoreContext";
import {
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const BlogSingle = ({ article }) => {
  const { getArticleComments } = useDemoStore();
  const localComments = article ? getArticleComments(article.id) : [];
  const totalComments = (article?.comments?.length || 0) + localComments.length;

  if (!article) {
    return (
      <div className="blog mt-52 mx-auto w-11/12 mb-10 text-center py-20">
        <h1 className="text-3xl font-exo text-black font-semibold">
          Loading article...
        </h1>
      </div>
    );
  }

  return (
    <div className="blog mt-52 mx-auto flex max-lg:flex-col gap-8 relative w-11/12 mb-10">
      <div className="w-9/12 max-lg:w-full">
        <div className="blog-single-heading">
          <h1 className="text-3xl font-exo text-black font-semibold">
            {article.title}
          </h1>
          <div className="meta-heading flex gap-8 items-center my-4 flex-wrap">
            <MetaBlogHeading icon={personIcon} by={article.by} />
            <MetaBlogHeading icon={dateIcon} date={article.date} />
            <MetaBlogHeading
              icon={commentIcon}
              commentsCounter={totalComments}
            />
          </div>
        </div>
        <div className="my-10 w-full">
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-3xl object-cover max-h-[500px]"
          />
          <p className="my-8 font-jost text-lg text-gray leading-relaxed">{article.subject}</p>
          <div className="flex gap-2 flex-wrap items-center">
            <h4 className="font-jost text-base font-semibold text-gray mr-2">Tags:</h4>
            {tags?.map((ele, key) => {
              const isIncluded = article.tags?.includes(ele);
              return (
                <span
                  key={key}
                  className={`font-jost text-sm border border-solid px-4 py-1.5 rounded-full transition-colors ${
                    isIncluded
                      ? "font-semibold bg-black text-white border-black"
                      : "text-gray-500 border-slate-200"
                  }`}
                >
                  {ele}
                </span>
              );
            })}
          </div>
          <div className="flex gap-4 my-8 items-center">
            <h4 className="font-jost text-base font-semibold text-gray">Share:</h4>
            <ul className="list-none flex gap-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="text-gray-500 text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaFacebookF size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Pinterest"
                  className="text-gray-500 text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaPinterestP size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="text-gray-500 text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaXTwitter size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Instagram"
                  className="text-gray-500 text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaInstagram size={18} />
                </a>
              </li>
            </ul>
          </div>
          <RelatedArticles baseArticleId={article.id} />
          <Comments comments={article.comments} articleId={article.id} />
        </div>
        <LeaveComment articleId={article.id} />
      </div>
      <div className="w-3/12 max-lg:w-full">
        <SidebarArticles BlogSingle={true} />
      </div>
    </div>
  );
};

export default BlogSingle;
