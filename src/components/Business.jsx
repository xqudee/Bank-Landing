import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../style'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row gap-[20px] px-[20px] py-[20px] 
  feature-card rounded-[20px] cursor-pointer`}>
    <div className={`bg-dimBlue h-[64px] min-w-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt={title} className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='text-white'>
      <h4 className='text-[18px] font-semibold mb-[8px]'>{title}</h4>
      <p className='opacity-[70%] text-[16px] leading-[24px]'>{content}</p>
    </div>
  </div>
)

const Business = () => {
  return ( 
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} mb-[24px]`}>
          You do the business, <br className='sm:block hidden' /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-[5]`}>
          With the right credit card, you can improve your financial 
          life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`sm:items-start ${layout.sectionImg} flex-col`}>
        {features.map((item, index) => (
          <FeatureCard key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business


{/* <section className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap sm:mb-20 py-16 ${styles.marginY}`}>
<div className='flex sm:flex-row flex-col gap-[30px]'>
  <div className=''>
    <h2 className='font-poppins text-white text-[48px] font-semibold mb-[24px]'>
      You do the business, we'll handle the money.
    </h2>
    <p className='font-poppins text-white text-[18px]'>With the right credit card, you can improve your financial 
    life by building credit, earning rewards and saving money. 
    But with hundreds of credit cards on the market.</p>
    <button className='sm:flex hidden mt-[48px] bg-blue-gradient px-[33px] py-[19px] rounded-[10px] font-poppins text-[18px]'>Get started</button>
  </div>

  <div className='flex flex-col gap-[20px]'>
    <ul>
      {features.map((item) => (
        <li 
          key={item.id} 
          className='flex flex-row gap-[20px] px-[20px] py-[20px] feature-card rounded-[20px] cursor-pointer'
        >
          <div className=' bg-[#09977C1A] h-[64px] min-w-[64px] rounded-[50%] flex items-center justify-center'>
            <img src={item.icon} alt={item.title} className='' />
          </div>
          <p className='text-white'>
            <h4 className='text-[18px] font-semibold mb-[8px]'>{item.title}</h4>
            <p className='opacity-[70%] text-[16px] leading-[24px]'>{item.content}</p>
          </p>
        </li>
      ))}
    </ul>
      <button className='sm:hidden flex mt-[24px] bg-blue-gradient px-[33px] py-[19px] rounded-[10px] font-poppins text-[18px] flex justify-center'>Get started</button>
  </div>
</div>
</section> */}