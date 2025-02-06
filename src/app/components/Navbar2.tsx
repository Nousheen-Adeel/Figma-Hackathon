import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { BsBagCheck } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';

const Navbar2 = () => {
  return (
    <div className="w-full bg-white">
      <div className="md:max-w-[1440px] mx-auto h-[60px] flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div>
          <Image
            src="/Images/nav2.png"
            alt="img"
            width={59}
            height={21}
            className="w-[60px] h-[21px]"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 ml-8">
          <li className="text-black text-[11px] font-[500] hover:text-gray-600">
            News & Featured
          </li>
          <li className="text-black text-[11px] font-[500] hover:text-gray-600">
            <Link href="/Cart">Men</Link>
          </li>
          <li className="text-black text-[11px] font-[500] hover:text-gray-600">
            Women
          </li>
          <li className="text-black text-[11px] font-[500] hover:text-gray-600">
            Kids
          </li>
          <li className="text-black text-[11px] font-[500] hover:text-gray-600">
            Sale
          </li>
          <li className="text-black text-[11px] font-[500] hover:text-gray-600">
            SNKRS
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-[#f5f5f5] rounded-[20px] p-2 w-[180px]">
            <IoSearchOutline className="text-black" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#f5f5f5] outline-none ml-2 w-full"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <IoIosHeartEmpty className="text-black" size={24} />
        <Link href='/Cart'><BsBagCheck className="text-black" size={22}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;