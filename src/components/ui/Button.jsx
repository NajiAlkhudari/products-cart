import React from 'react'

const Button = ({className ='' , disable ,children , onClick }) => {
    return (
 
        <button className={className}
        disabled={disable}
        onClick={onClick}
        >
          {children}
        </button>
          )
        }

export default Button
