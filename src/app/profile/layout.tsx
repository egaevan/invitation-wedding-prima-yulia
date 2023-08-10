'use client'
import React from 'react';
import classnames from 'classnames'
import { Footer } from './footer';

const layout = ({ children }: { children: React.ReactNode }) => {
    React.useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, [])
    return (
        <div className={classnames('w-full headermobile overflow-hidden  flex justify-center')} >
            <div className={classnames('headermobile  flex flex-col w-[450px] sm:w-full md:w-[450px] lg:w-[450px]     relative')} >
                <div className={classnames('h-[44px] bg-[#6EA5B1] flex justify-center items-center')}>
                    <p className={classnames('p-0 m-0 text-[#EA9933] font-semibold font-caladea')}>P & Y</p>
                </div>
                <div className={classnames(`bg-[#ffff] relative flex flex-col z-0 w-full rounded-t-2xl  `)}>
                    <div className={classnames(` relative  ease-in duration-700 transition height-responsive md:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-100px)] overflow-hidden m-[16px]`)} data-testid="containerChildren">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default layout;