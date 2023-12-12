import React from 'react'
import styles, {layout} from '../style'
import Button from './Button'
import { card } from '../assets'
import MovingImage from './MovingImage'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} min-h-[513px]`}>
        <MovingImage image={card} alt={'card'} minH={'513px'} coef={1.25} styles={'w-[100%] max-w-[513px] max-h-[449px]'} />
      </div>
    </section>
  )
}

export default CardDeal
