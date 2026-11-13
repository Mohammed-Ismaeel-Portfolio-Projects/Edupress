import Comment from '../Comment/Comment'
import { useDemoStore } from '../../context/DemoStoreContext'

const Comments = ({ comments = [], articleId }) => {
  const { getArticleComments } = useDemoStore()
  const localComments = articleId !== undefined ? getArticleComments(articleId) : []

  // Combine static original comments with local user demo comments
  const allComments = [...localComments, ...comments]
  const count = allComments.length

  return (
    <div className="my-10">
      <div className="heading mb-7">
        <h3 className="text-xl font-semibold font-exo text-black">Comments</h3>
        <p className="text-gray-500 text-sm mt-1">{count} {count === 1 ? 'Comment' : 'Comments'}</p>
      </div>
      <div className="comments flex flex-col gap-6">
        {allComments.map((comment, index) => (
          <Comment
            key={comment.id || index}
            id={index}
            userImage={comment.userImage}
            userName={comment.name}
            date={comment.date}
            content={comment.content}
            isDemo={comment.isDemo}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments
