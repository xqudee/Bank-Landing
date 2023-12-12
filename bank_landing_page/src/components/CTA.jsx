import React from 'react'
import styles, {layout} from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col
    bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white'>Let’s try our service now!</h2>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[445px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA
