'use client';
import React from 'react';
import Image from 'next/image';
import Product from './Product';
import Product2 from './Product2';
import Footer2 from './Footer2';

const Hero1 = () => {
  return (
    <div className='w-full'>
        <Image src='/Images/shoemain.png' alt='img' width={1440} height={700} className='w-full object-cover'/>
        <div className='items-center px-4 md:px-20 lg:px-84 py-16 bg-white text-black max-w-[1440px] mx-auto'>
        <p className='text-center'>First Look</p>
        <h5 className='text-[32px] md:text-[56px] text-center font-bold'>Nike Air Max Pulse</h5>
        <p className='text-center text-[14px] md:text-[15px]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br />
        —designed to push you past your limits and help you go to the max.</p>
        <div className='my-8 flex gap-4 md:gap-6 items-center justify-center'>
          <button className='rounded-[30px] bg-black text-white text-[14px] md:text-[15px] px-4 py-2'>Notify Me</button>
          <button className='rounded-[30px] bg-black text-white text-[14px] md:text-[15px] px-4 py-2'>Shop Air Max</button>
        </div>

        <Product/>
        
        <div>
          <h2 className='text-[20px] md:text-[22px] font-semibold'>Featured</h2>
        <Image src='/Images/man1.png' alt='img' width={1440} height={700} className='w-full object-cover'/>
        <div className='items-center px-4 md:px-20 lg:px-84 py-16 bg-white text-black max-w-[1440px] mx-auto'>
        <h5 className='text-[32px] md:text-[56px] text-center font-bold'>STEP INTO WHAT FEELS GOOD</h5>
        <p className='text-center text-[14px] md:text-[15px]'>Cause everyone should know the feeling of running in that perfect pair.</p>
        <div className='my-8 flex gap-4 md:gap-6 items-center justify-center'>
          <button className='rounded-[30px] bg-black text-white text-[14px] md:text-[15px] px-4 py-2'>Find Your Shoe</button>
        </div>
        </div>
        </div>
       
          </div>
          <Product2/>
          <div>
          <h2 className='text-[20px] md:text-[22px] font-semibold'>Dont Miss</h2>
          <Image src='/Images/2men.png' alt='img' width={1440} height={700} className='w-full object-cover'/>
        <div className='items-center px-4 md:px-20 lg:px-84 py-16 bg-white text-black max-w-[1440px] mx-auto'>
        <h5 className='text-[32px] md:text-[56px] text-center font-bold'>FLIGHT ESSENTIALS</h5>
        <p className='text-center text-[14px] md:text-[15px]'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        <div className='my-8 flex gap-4 md:gap-6 items-center justify-center'>
          <button className='rounded-[30px] bg-black text-white text-[14px] md:text-[15px] px-4 py-2'>Shop</button>
        </div>
        </div>

        <div>
        <h2 className='text-[20px] md:text-[22px] font-semibold'>Dont Miss</h2>
        <div className='flex flex-wrap md:flex-nowrap w-full gap-3 justify-center'>
          <div>
        <button className='rounded-[30px] bg-white text-black text-[14px] md:text-[15px]'>Mens</button>
        </div>
        <Image src='/Images/ess1.png' alt='img' width={1440} height={700} className='w-full md:w-auto object-cover' />
        <button className='rounded-[30px] bg-white text-black text-[14px] md:text-[15px]'>Womens</button>
        <Image src='/Images/ess2.png' alt='img' width={1440} height={700} className='w-full md:w-auto object-cover'/>
        <button className='rounded-[30px] bg-white text-black text-[14px] md:text-[15px]'>Kids</button>
        <Image src='/Images/ess3.png' alt='img' width={1440} height={700} className='w-full md:w-auto object-cover'/>
        </div>
        </div>

          </div>
          
    </div>
  )
}

export default Hero1;
