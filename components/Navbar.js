import React from "react";
import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from "next/link";
import { useRef } from "react";
import { FiShoppingCart } from 'react-icons/Fi';
import{AiFillCloseCircle , AiFillPlusCircle, AiFillMinusCircle} from  'react-icons/Ai';
import{BsFillBagCheckFill} from 'react-icons/Bs';
import{MdAccountCircle} from 'react-icons/Md';
import { useState } from "react";
const Navbar = ({ logout ,user,cart ,addToCart, removeFromCart,clearCart,subTotal}) => {
  const[dropdown , setDropdown]=useState(false)
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
           <Link href='/'><a><Image src='/logo.PNG' width={200} height={40} alt=''/></a></Link></div>
        <div className="nav">
          <ul className="flex items-center space-x-8 font-semibold md:text-sm">
           <Link href='/tshirts'><a><li className=" hover:text-red-500">Tshirts</li></a></Link>
           <Link href='/hoodies'><a><li className=" hover:text-red-500">Hoodies</li></a></Link>
           <Link href='/stickers'><a> <li className=" hover:text-red-500">Stickers</li></a></Link>
            <Link href='/mugs'><a><li className=" hover:text-red-500">Mugs</li></a></Link>
          </ul>
        </div>
      </div>
          <div  className=" cursor-pointer  items-center cart absolute right-0 top-4 mx-5 flex ">
         <span onMouseOver={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
          {dropdown &&<div onMouseOver={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}
           className={`${styles.hvr} absolute right-8 bg-white top-7 rounded-md px-5 w-36`}>
          <ul>
           <Link href={'/myaccount'}><a><li className="py-1 text-sm hover:text-red-700">My Account</li></a></Link>
           <Link href={'/orders'}><a><li className="py-1 text-sm hover:text-red-700">Orders</li></a></Link>
            <li onClick={logout} className="py-1 text-sm hover:text-red-500">Logout</li>
          </ul></div>}
          {user.value && <MdAccountCircle  className="text-2xl mx-2 md:text-2xl"/>}</span>
          {!user.value && <Link href={'/login'}><a><button className="bg-red-500 px-2 py-2 rounded-md text-sm text-white mx-2" >Login</button>  </a></Link>}
           <FiShoppingCart onClick={toggleCart} className="text-2xl md:text-2xl "/>
          </div>
<div  style={{zIndex:1}} ref={ref}  className={`sidecart   h-[100vh] overflow-y-scroll w-72 sidecart absolute ${styles.dis} top-0 right-0 transform transition-transform ${Object.keys(cart).length !==0 ? 'translate-x-0':'translate-x-full'}  bg-red-100 px-8 py-10 `}>
<h2 className="font-bold text-xl text-center"> Shopping Cart </h2>
<span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-red-500" ><AiFillCloseCircle/></span>
<ol className="list-decimal font-semibold">
  {Object.keys(cart).length==0 && <div className="my-4 font-semibold"> Your cart Is Empty!</div>}
  {Object.keys(cart).map((k)=>{
return<li key={k}>
<div className="item flex my-5">
<div className="w-2/3 font-semibold"> {cart[k].name} ({cart[k].size}/{cart[k].varient})</div>
<div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="cursor-pointer text-red-500"/>
<span className="mx-2 text-sm" >{cart[k].qty}</span>
<AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="cursor-pointer text-red-500"/></div>
</div>
</li> })}
</ol>
<div className="font-bold my-2">Subtotal: ₹{subTotal}</div>
<div className="flex">
<Link href={"/checkout"}><button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 hover:bg-pink-600 rounded text-sm" ><BsFillBagCheckFill className="mt-1"/>CheckOut</button></Link>
<button  onClick={clearCart} className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 hover:bg-pink-600 rounded text-sm" > Clear Cart</button>

</div>
</div>
</div>
);
};

export default Navbar;
