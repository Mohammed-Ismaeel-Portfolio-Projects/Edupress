import React from "react";
import Button from "../button/button";

const LeaveComment = () => {
  return (
    <div>
      <div className="heading">
        <h1>Leave A Comment</h1>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="comment-form">
        <form action="" method="get" className="flex flex-col gap-5 mt-5">
          <div className="w-full flex gap-5">
            <div className="input w-full">
              <input
                type="text"
                className="w-full h-12 rounded-lg border border-grey px-4 outline-none"
                placeholder="Name*"
                required
              />
            </div>
            <div className="input w-full">
              <input
                type="text"
                className="w-full h-12 rounded-lg border border-grey px-4 outline-none"
                placeholder="Email*"
                required
              />
            </div>
          </div>
          <div className="input text-area w-full">
            <textarea
              name=""
              id=""
              className="w-full h-28 border-grey border rounded-lg resize-none outline-none px-4 py-2"
              placeholder=" Comment"
            ></textarea>
          </div>
          <div className="save flex gap-1">
            <input type="checkbox" name="" id="save" />
            <label htmlFor="save">
              Save my name, email in this brower for the next time I comment
            </label>
          </div>
          <div>
            <Button buttonText={"Posts Comment"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveComment;
