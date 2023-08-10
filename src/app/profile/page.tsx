'use client'
import React from 'react'
import classnames from 'classnames'
import Image from 'next/image';
import Prima from '@/public/prima.png'
import Yulia from '@/public/yulia.png'
import { TweenMax, Power3 } from 'gsap'


export default function Page() {
  let containerBorder: any = React.useRef(null)
  let textTitle : any = React.useRef(null)
  let textPrima : any = React.useRef(null)
  let textYulia : any = React.useRef(null)
  const [play, setPlay] = React.useState(true)

  React.useEffect(() => {
    TweenMax.to(containerBorder, .8, { opacity: 1, ease: Power3.easeOut })
    TweenMax.to(textTitle, .8, { opacity: 1,delay:.5, ease: Power3.easeOut })
    TweenMax.to(textPrima, .8, { opacity: 1,delay:.8, ease: Power3.easeOut })
    TweenMax.to(textYulia, .8, { opacity: 1,delay:1, ease: Power3.easeOut })

}, [])

  return (
    <div className={classnames('border-[4px]  max-h-[calc(100vh-220px)]  md:max-h-[calc(100vh-80px)] lg:max-h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto   border-[#EA9933] p-[16px] opacity-0')} ref={item => { containerBorder = item }}>
      <div className={classnames('flex flex-col text-center items-center justify-center ')}>
        <p className={classnames('text-[16px] max-w-[355px] leading-[100%] tracking-[.1em] font-dancing opacity-0')} ref={item => { textTitle = item }}>Bismillahirrahmanirrahiim
          <br /><br /><span >Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan Akad Nikah & Resepsi Pernikahan putra-putri kami,</span></p>
      </div>
      <div className='flex justify-end relative z-99 mt-3 opacity-0' ref={item => { textPrima = item }}>
        <div className={classnames('mr-[0px]')}>
          <Image src={Prima} width={100} alt="prima" />
        </div>
        <div className='absolute right-[150px] top-[42px]'>
          <p className={classnames('font-dancing text-[#965A00] text-[24px]')}>Prima Dharossa, S.H.</p>
          <p className={classnames('text-[#965A00] text-[14px] text-[#000000] leading-[17px] font-montaga')}>Putra sulung dari
            Bpk.
            <br/>Syafri Eldi (alm)
            <br/>& Ibu Ernayenni</p>
        </div>
      </div>
      <div className='relative mt-[-100px] z-2 opacity-0' ref={item => { textYulia = item }}>
        <div className={classnames('ml-[0px] z-99')}>
        <Image src={Yulia} width={100} alt="yulia" />
        </div>
        <div className='absolute flex left-[130px] top-[133px]'>
          <div className={classnames('flex flex-col')}>
            <p className={classnames('font-dancing text-[#965A00] text-[24px]')}>Yulia Sari, S.Kom.</p>
            <p className={classnames('text-[#965A00] text-[14px] text-[#000000] leading-[17px] font-montaga')}>Putri bungsu dari Bpk.
              <br/>Zulkifli
              <br/>& Ibu Yurnas</p>
          </div>
        </div>
      </div>
    </div>
  );
}