import React from "react";
import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from "next/link";
import { useRef } from "react";
import { FiShoppingCart } from 'react-icons/Fi';
import{AiFillCloseCircle , AiFillPlusCircle, AiFillMinusCircle} from  'react-icons/Ai';
import{BsFillBagCheckFill} from 'react-icons/Bs';
import { useState } from "react";
const Navbar = () => {
  const toggleCart=()=>
{if(ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-full')
  ref.current.classList.add('translate-x-0')
}else if(ref.current.classList.contains('translate-x-0')){
  ref.current.classList.remove('translate-x-0')
  ref.current.classList.add('translate-x-full')
}}
const closeCart=()=>{
  
}
const ref=useRef()
  return (
    <div className={styles.main}>
      <div className="flex flex-col md:flex-row  md:justify-start justify-center py-2 shadow-md items-center">
        <div className={` mx-5 ${styles.logo}`}>
           <Link href='/'><a><Image src='/footerlogo.png' width={200} height={40} alt=''/></a></Link></div>
        <div className="nav">
          <ul className="flex items-center space-x-8 font-semibold md:text-sm">
           <Link href='/vegetables&Fruits'><a><li>Vegetables&Fruits</li></a></Link>
           <Link href='/dairyproducts'><a><li>Dairy Products</li></a></Link>
           <Link href='/munchies'><a> <li>Munchies</li></a></Link>
            <Link href='/sweettooth'><a><li>Sweet Tooth</li></a></Link>
          </ul>
        </div>
      </div>
          <div onClick={toggleCart} className=" cursor-pointer cart  absolute right-0 top-4 mx-5  ">
           <FiShoppingCart className="text-2xl md:text-2xl"/>
          </div>
<div  style={{zIndex:1}} ref={ref}  className={`sidecart  w-72 sidecart absolute ${styles.dis} top-0 right-0 transform transition-transform translate-x-full bg-red-100 px-8 py-10 `}>
<h2 className="font-bold text-xl text-center"> Shopping Cart </h2>
<span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-red-500" ><AiFillCloseCircle/></span>
<ol className="list-decimal font-semibold">
<li>
<div className="item flex my-5">
<div className="w-2/3 font-semibold"> Fruits & Vegetables</div>
<div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className="cursor-pointer text-red-500"/>
<span className="mx-2 text-sm" >1</span>
<AiFillPlusCircle className="cursor-pointer text-red-500"/></div>
</div>
</li>
<li>
<div className="item flex my-5">
<div className="w-2/3 font-semibold"> Fruits & Vegetables</div>
<div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className="cursor-pointer text-red-500"/>
<span className="mx-2 text-sm" >1</span>
<AiFillPlusCircle className="cursor-pointer text-red-500"/></div>
</div>
</li>
<li>
<div className="item flex my-5">
<div className="w-2/3 font-semibold"> Fruits & Vegetables</div>
<div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className="cursor-pointer text-red-500"/>
<span className="mx-2 text-sm" >1</span>
<AiFillPlusCircle className="cursor-pointer text-red-500"/></div>
</div>
</li>
<li>
<div className="item flex my-5">
<div className="w-2/3 font-semibold"> Fruits & Vegetables</div>
<div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className="cursor-pointer text-red-500"/>
<span className="mx-2 text-sm" >1</span>
<AiFillPlusCircle className="cursor-pointer text-red-500"/></div>
</div>
</li>
<li>
<div className="item flex my-5">
<div className="w-2/3 font-semibold"> Fruits & Vegetables</div>
<div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className="cursor-pointer text-red-500"/>
<span className="mx-2 text-sm" >1</span>
<AiFillPlusCircle className="cursor-pointer text-red-500"/></div>
</div>
</li>
</ol>
<div className="flex">
<button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 hover:bg-pink-600 rounded text-sm" ><BsFillBagCheckFill className="mt-1"/>CheckOut</button>
<button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 hover:bg-pink-600 rounded text-sm" > Clear Cart</button>
</div>
</div>
</div>
);
};

export default Navbar;
