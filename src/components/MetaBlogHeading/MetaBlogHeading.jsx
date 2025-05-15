import React from 'react'

const MetaBlogHeading = ({ icon, by, date, commentsCounter }) => {
  const getContent = () => {
    if (by) return by
    if (date) return date
    if (commentsCounter !== undefined)
      return `${commentsCounter} Comment${commentsCounter > 1 ? 's' : ''}`
    return ''
  }

  return (
    <div className="meta-blog-heading flex gap-3 items-center">
      <img src={icon} alt="icon" />
      <p>{getContent()}</p>
    </div>
  )
}

export default MetaBlogHeading
