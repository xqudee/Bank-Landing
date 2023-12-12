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
              <a href={client.link}>
                <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
              </a>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className='marquee__content'>
          {clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <a href={client.link} target='_blank'>
                <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
              </a>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className='marquee__content'>
          {clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <a href={client.link}>
                <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
