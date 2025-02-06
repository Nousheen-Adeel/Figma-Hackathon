import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import Card1 from './Card1'; // Assuming Card is a wrapper component


// Renaming the interface to avoid conflict with the Card component
interface ProductCard {
  id: number;
  available:string;
  price: string;
  image: string;
  title: string;
  name: string; 
  color:string;
}

const Product1 = () => {
  const cards: ProductCard[] = [
    {
      id: 1,
      available:"Just In",
      color:"1 Color",
      price: "₹ 10 795.00",
      image: "/Images/Rectangle.png",
      title: "Nike Air Force 1 Mid '07",
      name: "Men's Shoes",
    },
    {
      id: 2,
      available:"Just In",
      color:"1 Color",
      price: "₹ 4 695",
      image: "/Images/Rectangle(1).png",
      title: "Nike Court Vision Low Next Nature",
      name: "Men's Shoes",
    },
    {
      id: 3,
      available:"Just In",
      color:"1 Color",
      price: "₹ 8 695",
      image: "/Images/Rectangle(2).png",
      title: "Nike Air Force 1 PLT.AF.ORM",
      name: "Men's Shoes",
    },
      {
        id: 1,
        available:"Just In",
        color:"1 Color",
        price: "₹ 10 795.00",
        image: "/Images/Rectangle(3).png",
        title: "Nike Air Force 1 Mid '07",
        name: "Men's Shoes",
      },
      {
        id: 2,
        available:"Just In",
        color:"1 Color",
        price: "₹ 4 695",
        image: "/Images/Rectangle(4).png",
        title: "Nike Court Vision Low Next Nature",
        name: "Men's Shoes",
      },
      {
        id: 3,
        available:"Just In",
        color:"1 Color",
        price: "₹ 8 695",
        image: "/Images/Rectangle(5).png",
        title: "Nike Air Force 1 PLT.AF.ORM",
        name: "Men's Shoes",
      },
        {
          id: 1,
          available:"Just In",
          color:"1 Color",
          price: "₹ 10 795.00",
          image: "/Images/Rectangle(6).png",
          title: "Nike Air Force 1 Mid '07",
          name: "Men's Shoes",
        },
        {
          id: 2,
          available:"Just In",
          color:"1 Color",
          price: "₹ 4 695",
          image: "/Images/Rectangle(7).png",
          title: "Nike Court Vision Low Next Nature",
          name: "Men's Shoes",
        },
        {
          id: 3,
          available:"Just In",
          color:"1 Color",
          price: "₹ 8 695",
          image: "/Images/Rectangle(8).png",
          title: "Nike Air Force 1 PLT.AF.ORM",
          name: "Men's Shoes",
        },
          {
            id: 1,
            available:"Just In",
            color:"1 Color",
            price: "₹ 10 795.00",
            image: "/Images/Rectangle(9).png",
            title: "Nike Air Force 1 Mid '07",
            name: "Men's Shoes",
          },
          {
            id: 2,
            available:"Just In",
            color:"1 Color",
            price: "₹ 4 695",
            image: "/Images/Rectangle(10).png",
            title: "Nike Court Vision Low Next Nature",
            name: "Men's Shoes",
          },
          {
            id: 3,
            available:"Just In",
            color:"1 Color",
            price: "₹ 8 695",
            image: "/Images/Rectangle(11).png",
            title: "Nike Air Force 1 PLT.AF.ORM",
            name: "Men's Shoes",
          },
          {
            id: 1,
            available:"Just In",
            color:"1 Color",
            price: "₹ 10 795.00",
            image: "/Images/Rectangle(12).png",
            title: "Nike Air Force 1 Mid '07",
            name: "Men's Shoes",
          },
          {
            id: 2,
            available:"Just In",
            color:"1 Color",
            price: "₹ 4 695",
            image: "/Images/Rectangle(13).png",
            title: "Nike Court Vision Low Next Nature",
            name: "Men's Shoes",
          },
          {
            id: 3,
            available:"Just In",
            color:"1 Color",
            price: "₹ 8 695",
            image: "/Images/Rectangle(14).png",
            title: "Nike Air Force 1 PLT.AF.ORM",
            name: "Men's Shoes",
          },
          {
            id: 1,
            available:"Just In",
            color:"1 Color",
            price: "₹ 10 795.00",
            image: "/Images/Rectangle(5).png",
            title: "Nike Air Force 1 Mid '07",
            name: "Men's Shoes",
          },
          {
            id: 2,
            available:"Just In",
            color:"1 Color",
            price: "₹ 4 695",
            image: "/Images/Rectangle(16).png",
            title: "Nike Court Vision Low Next Nature",
            name: "Men's Shoes",
          },
          {
            id: 3,
            available:"Just In",
            color:"1 Color",
            price: "₹ 8 695",
            image: "/Images/Rectangle(17).png",
            title: "Nike Air Force 1 PLT.AF.ORM",
            name: "Men's Shoes",
          },
          {
            id: 1,
            available:"Just In",
            color:"1 Color",
            price: "₹ 10 795.00",
            image: "/Images/Rectangle(18).png",
            title: "Nike Air Force 1 Mid '07",
            name: "Men's Shoes",
          },
          {
            id: 2,
            available:"Just In",
            color:"1 Color",
            price: "₹ 4 695",
            image: "/Images/Rectangle(19).png",
            title: "Nike Court Vision Low Next Nature",
            name: "Men's Shoes",
          },
          {
            id: 3,
            available:"Just In",
            color:"1 Color",
            price: "₹ 8 695",
            image: "/Images/Rectangle(20).png",
            title: "Nike Air Force 1 PLT.AF.ORM",
            name: "Men's Shoes",
          },
          {
            id: 1,
            available:"Just In",
            color:"1 Color",
            price: "₹ 10 795.00",
            image: "/Images/Rectangle(21).png",
            title: "Nike Air Force 1 Mid '07",
            name: "Men's Shoes",
          },
          {
            id: 2,
            available:"Just In",
            color:"1 Color",
            price: "₹ 4 695",
            image: "/Images/Rectangle(22).png",
            title: "Nike Court Vision Low Next Nature",
            name: "Men's Shoes",
          },
          {
            id: 3,
            available:"Just In",
            color:"1 Color",
            price: "₹ 8 695",
            image: "/Images/Rectangle(23).png",
            title: "Nike Air Force 1 PLT.AF.ORM",
            name: "Men's Shoes",
          },
          {
            id: 1,
            available:"Just In",
            color:"1 Color",
            price: "₹ 10 795.00",
            image: "/Images/Rectangle(24).png",
            title: "Nike Air Force 1 Mid '07",
            name: "Men's Shoes",
          },
          {
            id: 2,
            available:"Just In",
            color:"1 Color",
            price: "₹ 4 695",
            image: "/Images/Rectangle(25).png",
            title: "Nike Court Vision Low Next Nature",
            name: "Men's Shoes",
          },
          {
            id: 3,
            available:"Just In",
            color:"1 Color",
            price: "₹ 8 695",
            image: "/Images/Rectangle(26).png",
            title: "Nike Air Force 1 PLT.AF.ORM",
            name: "Men's Shoes",
          },
          {
            id: 1,
            available:"Just In",
            color:"1 Color",
            price: "₹ 10 795.00",
            image: "/Images/Rectangle(27).png",
            title: "Nike Air Force 1 Mid '07",
            name: "Men's Shoes",
          },
          {
            id: 2,
            available:"Just In",
            color:"1 Color",
            price: "₹ 4 695",
            image: "/Images/Rectangle(28).png",
            title: "Nike Court Vision Low Next Nature",
            name: "Men's Shoes",
          },
          {
            id: 3,
            available:"Just In",
            color:"1 Color",
            price: "₹ 8 695",
            image: "/Images/Rectangle(29).png",
            title: "Nike Air Force 1 PLT.AF.ORM",
            name: "Men's Shoes",
          },
  ];


  return (
            
              

    <div className='md:max-w-[1092px] h-fit mx-12 bg-white '>
    
    <div className='bg-white text-black w-[1092px] justify-between p-3 gap-2 sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1'>
          {cards.map((item) => (
            <div className='w-[442px] h-[511px] rounded-md' key={item.id}>
      
              <Card1 image={item.image} name={item.name} title={item.title} available={item.available} color={item.color} price={item.price}   />
            </div>
          ))}
        </div>
    
    </div>
  );
};

export default Product1;
