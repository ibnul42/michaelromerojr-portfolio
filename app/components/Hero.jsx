'use client'
import React, { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import Link from 'next/link';
import RenderItem from './RenderItem';
import ScrollArea from './ScrollArea';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-screen w-full flex bg-cover bg-center -mt-[72px] md:-mt-[82px] -z-10"
    // style={{ backgroundImage: 'url(/assets/hero.jpg)' }}
    >
      <div className="flex-1 max-w-[1920px] mx-auto grid grid-cols-2 gap-10 h-full w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-80 px-2 flex flex-col items-start gap-4">
            <RenderItem>
              <h1 className="text-5xl font-bold text-sky-700">Alex Smith</h1>
            </RenderItem>
            <RenderItem delay={0.85}>
              <div className="flex gap-2 text-sky-700">
                <p className='text-[2em]'>I&apos;m a </p>
                <TypeAnimation
                  sequence={[
                    `Developer`,
                    1500,
                    `Designer`,
                    1500,
                    `Photographer`,
                    2000,
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ fontSize: '2em', display: 'inline-block', borderBottom: '1.5px solid #38bdf8', }}
                  repeat={Infinity}
                  className='text-sky-700'
                />
              </div>
            </RenderItem>
            <RenderItem delay={1.7}>
              <div className="flex gap-8">
                <Link
                  href='/'
                  target='_blank'
                  className='hover:scale-125 transition-all'>
                  <FaTwitter className='text-sky-400 w-7 h-auto' />
                </Link>
                <Link
                  href='/'
                  target='_blank'
                  className='hover:scale-125 transition-all'>
                  <FaLinkedin className='text-sky-400 w-7 h-auto' />
                </Link>
                <Link
                  href='/'
                  target='_blank'
                  className='hover:scale-125 transition-all'>
                  <IoLogoInstagram className='text-sky-400 w-7 h-auto' />
                </Link>
                <Link
                  href='/'
                  target='_blank'
                  className='hover:scale-125 transition-all'>
                  <IoLogoFacebook className='text-sky-400 w-7 h-auto' />
                </Link>
              </div>
            </RenderItem>
          </div>
        </div>
        <div className="flex h-full justify-center items-center">
          <Image src='/assets/profile.png' height={500} width={500} alt='' className='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
