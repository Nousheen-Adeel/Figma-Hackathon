import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import Card from './card'; // Assuming Card is a wrapper component

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

const Product = () => {
  const cards: ProductCard[] = [
    {
      id: 1,
      price: "₹ 13 995",
      image: "/Images/Image.png",
      title: "Nike Air Max Pulse",
      name: "Women's Shoes",
    },
    {
      id: 2,
      price: "₹ 13 995",
      image: "/Images/Image(1).png",
      title: "Nike Air Max Pulse",
      name: "Men's Shoes",
    },
    {
      id: 3,
      price: "₹ 16 995",
      image: "/Images/Image(2).png",
      title: "Nike Air Max 97 SE",
      name: "Men's Shoes",
    },
  ];

  return (
    <div className='md:max-w-1440px px-12 my-8'>
    <div className=' flex justify-between'>
              <h2 className='text-[22px] font-semibold' >Best Of Air Max</h2>
              <div className='flex justify-evenly items-center gap-4 px-8'>
                <p>Shop</p>
                <button className='rounded-full bg-[#f5f5f5] text-black p-2'>
                <PiLessThanThin />
                </button>
    
                <button className='rounded-full bg-[#f5f5f5] text-black p-2'>
                
                <FaGreaterThan />
                </button>
                </div>
              </div>

    
    <div className='bg-white flex text-black  justify-between p-3  md:flex-row flex-col'>
          {cards.map((item) => (
            <div className='w-[442px] h-[511px] rounded-md' key={item.id}>
      
              <Card image={item.image} name={item.name} price={item.price} title={item.title} />
            </div>
          ))}
        </div>
    </div>

  );
};

export default Product;
