const Button = ({ text, className, id, targetId = 'work' }) => {
  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => {
        e.preventDefault()
        const target = document.getElementById(targetId)

        if (target) {
          const offset = window.innerHeight * 0.15
          const top = target.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }}
      className={`${className ?? ''} cta-wrapper`}
      id={id}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text font-bold">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" className="arrow-icon" />
        </div>
      </div>
    </a>
  )
}

export default Button