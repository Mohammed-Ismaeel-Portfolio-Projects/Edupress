import { Link } from 'react-router-dom'

const Button = ({
  buttonText,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
  to,
}) => {
  const commonClasses = `inline-flex justify-center items-center text-center text-white bg-orange font-medium rounded-3xl py-3 px-6 transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed no-underline ${className}`

  if (to) {
    return (
      <Link
        to={to}
        aria-label={ariaLabel || (typeof buttonText === 'string' ? buttonText : undefined)}
        className={commonClasses}
      >
        {buttonText}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || (typeof buttonText === 'string' ? buttonText : undefined)}
      className={commonClasses}
    >
      {buttonText}
    </button>
  )
}

export default Button
