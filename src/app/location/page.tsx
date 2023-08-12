'use client'
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image';
import flower from '../../../public/flower-small.png'
import { TweenMax, Power3 } from 'gsap'
import BG from '@/public/bg-location.png'
import Calender from '../../../public/calender.png'
import Time from '../../../public/time.png'
import Place from '../../../public/location.png'
import Cincin from '@/public/ring.png'
import Cheers from '@/public/cheers.png'

export default function Page() {
  let containerImage: any = React.useRef(null)

  let containerBorder: any = React.useRef(null)
  let containerBorder2: any = React.useRef(null)
  let textTitle: any = React.useRef(null)


  React.useEffect(() => {
    TweenMax.to(containerImage, .8, { opacity: 1, ease: Power3.easeOut })
    TweenMax.to(containerBorder, .8, { opacity: 1, delay: .5, ease: Power3.easeOut })
    TweenMax.to(containerBorder2, .8, { opacity: 1, delay: 1, ease: Power3.easeOut })
    TweenMax.to(textTitle, .8, { opacity: 1, ease: Power3.easeOut })
  }, [])

  return (
    <div className={classnames('max-h-[calc(100vh-220px)]  md:max-h-[calc(100vh-130px)] lg:max-h-[calc(100vh-130px)] overflow-x-hidden overflow-y-auto ')}>
      <div className={classnames(' h-[254px] mt-[-40px] relative opacity-80')} ref={item => { containerImage = item }}>
        <Image
          alt='Mountains'
          src={BG}
          object-fit='fill'
        />
        <div className={classnames('absolute flex flex-col top-[90px] left-0 right-0 ml-auto mr-auto text-center opacity-0')} ref={item => { textTitle = item }}>
          <h1 className={classnames('text-[#FFFFFF] text-[24px] leading-[100%] tracking-[0.3em] font-caladea')}>THE WEDDING</h1>
          <h1 className={classnames('text-[#FFFFFF] text-[24px] leading-[100%] tracking-[0.3em] font-caladea mt-[31px]')}>PRIMA & YULIA </h1>
        </div>
      </div>

      <div className={classnames('mt-[100px] px-[40px] opacity-0')} ref={item => { containerBorder = item }}>
        <div className={classnames('bg-[#6EA5B1] h-[420px] relative rounded-md')} style={{ boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <div className={classnames(' text-center flex items-center justify-center ml-auto mr-auto')}>
            <div className={classnames('absolute top-[-20px] w-[221px] h-[80px]')}>
              <Image src={flower} object-fit='fill' alt="ring-image" />
            </div>
          </div>
          <div className={classnames('m-[16px] border border-[#FFFFFF] h-[390px] flex flex-col justify-center')}>
            <div className={classnames('flex flex-col items-center justify-center')}>
              <div className={classnames('ml-3 mt-2')}>
                <Image src={Cincin} height={53} width={53} alt="ring-image" />
              </div>
              <h1 className={classnames('font-dancing text-[36px] text-[#FFFFFF]')}>Akad nikah</h1>
            </div>
            <div className={classnames('flex mb-[14px] mt-[24px]')}>
              <div className={classnames('ml-3')}>
                <Image src={Calender} height={10} width={23} alt="ring-image" />
              </div>
              <h1 className={classnames('ml-[8px] text-[14px] text-[#FFFFFF] font-caladea')}>Jumat, 8 September 2023</h1>
            </div>
            <div className={classnames('flex mb-[14px]')}>
              <div className={classnames('ml-3')}>
                <Image src={Time} height={10} width={23} alt="ring-image" />
              </div>
              <h1 className={classnames('ml-[8px] text-[14px] text-[#FFFFFF] font-caladea')}>08.00 WIB - Selesai</h1>
            </div>
            <div className={classnames('flex mb-[14px]')}>
              <div className={classnames('ml-3')}>
                <Image src={Place} height={10} width={23} alt="ring-image" />
              </div>
              <h1 className={classnames('ml-[8px] text-[14px] text-[#FFFFFF] font-caladea')}>Masjid Nurul Yaqin
                Berok Siteba, Kec. Nanggalo, Padang</h1>
            </div>
            {/*<div className={classnames('flex flex-col items-center justify-center')}>*/}
            {/*  <div className={classnames('ml-3 ')}>*/}
            {/*    <a href="https://goo.gl/maps/HrRy93wF767hev2r9">*/}
            {/*      <button className={classnames('py-[8px] w-[250px] mt-[12px] rounded-md relative bg-[#C1781D] text-white opacity-1 hover:bg-[#EA9933]')}>*/}
            {/*        Open Maps*/}
            {/*      </button>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      <div className={classnames('mt-[100px] px-[40px] opacity-0')} ref={item => { containerBorder2 = item }}>
        <div className={classnames('bg-[#6EA5B1] h-[410px] relative mb-2 rounded-md')} style={{ boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <div className={classnames(' text-center flex items-center justify-center ml-auto mr-auto')}>
            <div className={classnames('absolute top-[-20px] w-[221px] h-[80px]')}>
              <Image src={flower} object-fit='fill' alt="ring-image" />
            </div>
          </div>
          <div className={classnames('m-[16px] border border-[#FFFFFF] h-[380px] flex flex-col justify-center')}>
            <div className={classnames('flex flex-col items-center justify-center')}>
              <div className={classnames('ml-3 mt-2')}>
                <Image src={Cheers} height={53} width={53} alt="ring-image" />
              </div>
              <h1 className={classnames('font-dancing text-[36px] text-[#FFFFFF]')}>Resepsi</h1>
            </div>
            <div className={classnames('flex mb-[14px] mt-[24px]')}>
              <div className={classnames('ml-3')}>
                <Image src={Calender} height={10} width={23} alt="ring-image" />
              </div>
              <h1 className={classnames('ml-[8px] text-[14px] text-[#FFFFFF] font-caladea')}>Kamis, 14 September 2023</h1>
            </div>
            <div className={classnames('flex mb-[14px]')}>
              <div className={classnames('ml-3')}>
                <Image src={Time} height={10} width={23} alt="ring-image" />
              </div>
              <h1 className={classnames('ml-[8px] text-[14px] text-[#FFFFFF] font-caladea')}>10.00 WIB - Selesai</h1>
            </div>
            <div className={classnames('flex mb-[14px]')}>
              <div className={classnames('ml-3')}>
                <Image src={Place} height={10} width={23} alt="ring-image" />
              </div>
              <h1 className={classnames('ml-[8px] text-[14px] text-[#FFFFFF] font-caladea w-[250px]')}>Rumah Mempelai Pria
                Jl. Cendrawasih No.4, Lubuk Sikaping,
                Pasaman</h1>
            </div>
            <div className={classnames('flex flex-col items-center justify-center')}>
            <div className={classnames('ml-3 ')}>
                <a href="https://goo.gl/maps/yTmTqCY4Utpz5Vee6">
                  <button className={classnames('py-[8px] w-[250px] mt-[12px] rounded-md relative bg-[#C1781D] text-white opacity-1 hover:bg-[#EA9933]')}>
                    Open Maps
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}