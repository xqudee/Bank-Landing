import React from 'react'
import styles, {layout} from '../style'
import { feedback } from '../constants'
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] gap-6'>
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden' /> saying about us</h1>

        <div className='w-full md:mt-0 mt-6 flex sm:justify-center justify-start md:justify-start'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((item, index) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
