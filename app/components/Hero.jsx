'use client'
import React, { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import Link from 'next/link';
import RenderItem from './RenderItem';

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-sky-400 -ml-3 -mt-[72px] md:-mt-[82px] -z-10" style={{ backgroundImage: 'url(/assets/hero.jpg)' }}>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <div className="w-full max-w-80 px-2 flex flex-col items-start gap-4">
          <RenderItem>
            <h1 className="text-5xl font-bold">Alex Smith</h1>
          </RenderItem>
          <RenderItem delay={0.85}>
            <div className="flex gap-2">
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
                style={{ fontSize: '2em', display: 'inline-block', borderBottom: '1.5px solid #38bdf8' }}
                repeat={Infinity}
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
    </div>
  );
};

export default Hero;
