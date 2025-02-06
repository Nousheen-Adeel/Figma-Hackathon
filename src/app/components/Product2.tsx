import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import Card2 from './card2'; // Assuming Card is a wrapper component
import { FaGreaterThan } from "react-icons/fa6";
import { PiLessThanThin } from "react-icons/pi";

// Renaming the interface to avoid conflict with the Card component
interface ProductCard {
  id: number;
  price: string;
  image: string;
  title: string;
  name: string;
}

const Product2 = () => {
  const cards: ProductCard[] = [
    {
      id: 1,
      price: "₹ 3 895",
      image: "/Images/man2.png",
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      name: "Men's Short-Sleeve Running up",
    },
    {
      id: 2,
      price: "₹ 2 495",
      image: "/Images/man3.png",
      title: "Nike Dri-FIT Challenger",
      name: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    },
    {
      id: 3,
      price: "₹ 5 295",
      image: "/Images/girl1.png",
      title: "Nike Dri-FIT ADV Run Division",
      name: "Women's Long-Sleeve Running Top",
    },
    {
        id: 4,
        price: "₹ 3 795",
        image: "/Images/mancombo.png",
        title: "Nike Fast",
        name: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      },
  ];

  return (
    <div className='md:max-w-[1440px] px-12 my-8'>
              <h2 className='text-[22px] font-semibold' >Gear Up</h2>
              <div className='flex gap-[20%] items-center justify-center'>
              <div className='justify-between flex ml-[60px]'>

                <p>Shop Mens</p>
                <div className='flex gap-3'>
                <button className='rounded-full bg-[#f5f5f5] text-black p-2'>
                <PiLessThanThin />
                </button>
    
                <button className='rounded-full bg-[#f5f5f5] text-black p-2'>
                
                <FaGreaterThan />
                </button>
              </div>
              </div>

              
              <div className=' justify-evenly items-center flex pr-[40px] gap-4'>
                <p>Shop Womens</p>
                <button className='rounded-full bg-[#f5f5f5] text-black p-2'>
                <PiLessThanThin />
                </button>
    
                <button className='rounded-full bg-[#f5f5f5] text-black p-2'>
                
                <FaGreaterThan />
                </button>
              </div>
              </div>

           
              

    <div className='md:max-w-[1440px] '>
    
    <div className='bg-white flex text-black  justify-between p-3 gap-2 md:flex-row flex-col'>
          {cards.map((item) => (
            <div className='w-[442px] h-[511px] rounded-md' key={item.id}>
      
              <Card2 image={item.image} name={item.name} price={item.price} title={item.title} />
            </div>
          ))}
        </div>
    
        </div>
        </div>
        
  );
};

export default Product2;
