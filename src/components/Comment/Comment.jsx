import { BsReply } from "react-icons/bs";

const Comment = ({ id, userImage, userName, date, content, isDemo = false }) => {
  return (
    <div
      className={`${
        id % 2 !== 0 ? "ml-8 sm:ml-16" : ""
      } comment flex gap-4 border-t border-slate-200 pt-5`}
    >
      <div className="user-image w-12 h-12 flex-shrink-0">
        {userImage ? (
          <img
            src={userImage}
            alt={userName || "Comment author"}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-orange/10 text-orange font-exo font-bold flex items-center justify-center text-base border border-orange/20">
            {(userName || "U").charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="content flex-1">
        <div className="heading flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <h4 className="font-exo text-base font-semibold text-black">
              {userName}
            </h4>
            {isDemo && (
              <span className="text-[10px] font-semibold py-0.5 px-2 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">
                Demo User Submission
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="text-base text-gray-700 font-jost leading-relaxed mt-1.5">{content}</p>
        <button
          type="button"
          onClick={() => alert(`Replying to ${userName}`)}
          className="reply flex gap-1.5 items-center mt-2 text-gray-600 hover:text-orange transition-colors text-sm cursor-pointer"
          aria-label={`Reply to ${userName}`}
        >
          <BsReply className="text-orange" style={{ fontSize: "18px" }} />
          <span className="font-jost font-medium">Reply</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;
