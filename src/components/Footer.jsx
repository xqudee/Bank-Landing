import React from 'react'
import styles, {layout} from '../style'
import { logo, copyright } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
          <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-[30px] md:pl-[25px] pl-0 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((item, index) => (
            <div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-[24px]'>{item.title}</h4>
              <ul className='flex flex-col gap-[12px]'>
                {item.links.map((link, index) => (
                  <li key={index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite
                  hover:text-secondary cursor-pointer`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-[18px] leading-[27px] text-dimWhite mb-[24px] 
        flex md:flex-row flex-col md:gap-[18px] gap-[5px] md:items-left items-center'>
          <span className='flex gap-[8px]'>
            Copyright 
            <img src={copyright} alt='copyright' />
          </span> 2021 HooBank. All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6 gap-6'>
          {socialMedia.map((item, index) => (
            <img key={index} src={item.icon} alt={item.id} className={`w-[21px] h-[21px] object-contain cursor-pointer`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
