import React from 'react'
import Comment from '../Comment/Comment'

const Comments = ({ comments }) => {
  return (
    <div>
      <div className="heading mb-7">
        <h1 className="text-xl font-semibold text-black">Comments</h1>
        <p>20 Comments</p>
      </div>
      <div className="comments flex flex-col gap-9">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            id={index}
            userImage={comment.userImage}
            userName={comment.name}
            date={comment.date}
            content={comment.content}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments
