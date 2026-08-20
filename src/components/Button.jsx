
import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`} id={id}>
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text font-bold">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" className="arrow-icon"/>
        </div>
      </div>
    </a>
  )
}

export default Button