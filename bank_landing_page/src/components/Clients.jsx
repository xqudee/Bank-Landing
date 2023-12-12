import React from 'react'
import styles, {layout} from '../style'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} max-w-[100%] marquee marquee--fit-content marquee--hover-pause`}>
        <div className='marquee__content'>
          {clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
            </div>
          ))}
        </div>

        <div aria-hidden="true" className='marquee__content'>
          {clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
            </div>
          ))}
        </div>

        <div aria-hidden="true" className='marquee__content'>
          {clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
