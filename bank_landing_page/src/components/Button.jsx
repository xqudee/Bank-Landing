import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`mt-[24px] bg-blue-gradient 
    px-[33px] py-[19px] rounded-[10px] font-poppins text-[18px] flex 
    justify-center ${styles}`}>
        Get started
    </button>
  )
}

export default Button
