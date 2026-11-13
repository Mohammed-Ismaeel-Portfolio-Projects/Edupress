const MetaBlogHeading = ({ icon, by, date, commentsCounter }) => {
  const getContent = () => {
    if (by) return by
    if (date) return date
    if (commentsCounter !== undefined)
      return `${commentsCounter} Comment${commentsCounter !== 1 ? 's' : ''}`
    return ''
  }

  return (
    <div className="meta-blog-heading flex gap-2 items-center text-sm text-gray-600">
      <img src={icon} alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
      <span>{getContent()}</span>
    </div>
  )
}

export default MetaBlogHeading
