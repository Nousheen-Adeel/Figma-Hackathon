'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar1 = () => {
  return (
    <div className='md:max-w-[1440px] w-full object-cover h-[36px] bg-[#f5f5f5]'>
      <div className='flex items-center justify-between px-4 md:px-16 py-2'>
        <Image src='/Images/nav1.png' alt='img' width={24} height={24} />
        <div className='flex gap-2 md:gap-3 text-[11px] font-[500] text-black'>
          <Link href='/Products' className='hidden sm:block'>Find a Store</Link>
          <div className='w-[2px] h-[14px] bg-black hidden sm:block'></div>
          <div className='hidden sm:block'>Help</div>
          <div className='w-[2px] h-[14px] bg-black hidden sm:block'></div>
          <Link href='/Joinus' className='hidden sm:block'>Join Us</Link>
          <div className='w-[2px] h-[14px] bg-black hidden sm:block'></div>
          <Link href='/Login'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;