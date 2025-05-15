import React from "react";
import { BsReply } from "react-icons/bs";
const Comment = ({ id, userImage, userName, date, content }) => {
  // console.log(id)
  return (
    <div
      className={`${
        id % 2 != 0 ? "ml-16" : ""
      } comment flex gap-5 border-t border-lightGray border-solid pt-5`}
    >
      <div className="user-image w-16 h-16">
        <img src={userImage} alt="user" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="content">
        <div className="heading flex justify-between">
          <h2 className="font-exo text-base font-semibold text-black">
            {userName}
          </h2>
          <p className="text-base text-gray ">{date}</p>
        </div>
        <p className="text-lg text-gray font-jost leading-6 mt-2">{content}</p>
        <button className="reply flex gap-2 items-center mt-2">
          <BsReply color="red" style={{ fontSize: "20px" }} />
          <p className="font-jost font-medium">Reply</p>
        </button>
      </div>
    </div>
  );
};

export default Comment;
