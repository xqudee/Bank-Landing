import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:my-5 my-0 feedback-card'>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue_gradient' />
      
      <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
        {content}
      </p>

      <div className='flex flex-wrap gap-[16px]'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />

        <div className='flex flex-col ml-t'>
            <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
                {name}
            </h4>
            <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
                {title}
            </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
