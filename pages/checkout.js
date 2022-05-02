import React from "react";
import Link from "next/link";
import{ AiFillPlusCircle, AiFillMinusCircle} from  'react-icons/Ai';
import{BsFillBagCheckFill} from 'react-icons/Bs';
const checkout = ({cart ,subTotal,addToCart,removeFromCart}) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-bold text-xl mx-9">1. Delivery Details</h2>
      <div className="mx-auto flex my-4 ">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2  w-full">
        <div className="mb-4">
          <label for="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="address"
            id="address"
            name="address"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <div className="mx-auto flex my-4 ">
          <div className=" w-1/2">
            <div className="px-2 mb-4">
              <label for="phone" className="leading-7 text-sm text-gray-600">
                phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                city
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex my-4 ">
        <div className=" w-1/2">
          <div className="px-2 mb-4">
            <label for="state" className="leading-7 text-sm text-gray-600">
              state
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            </div>
            </div>
          </div>
          <h2 className="font-bold text-xl mx-9">2. Review Cart</h2>
          <div    className={` sidecart  bg-red-100 p-6 my-2 `}>
<ol className="list-decimal font-semibold">
  {Object.keys(cart).length==0 && <div className="my-4 font-semibold"> Your cart Is Empty!</div>}
  {Object.keys(cart).map((k)=>{
return<li key={k}>
<div className="item flex my-5">
<div className=" font-semibold"> {cart[k].name}</div>
<div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="cursor-pointer text-red-500"/>
<span className="mx-2 text-sm" >{cart[k].qty}</span>
<AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="cursor-pointer text-red-500"/></div>
</div>
</li> })}
</ol>
<span className="font-bold">Subtotal: ₹{subTotal}</span>


</div>
  <Link href={"/checkout"}><button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 hover:bg-pink-600 rounded text-sm" > Proceed To Pay : ₹{subTotal}</button></Link>
      </div>
    </div>
  );
};

export default checkout;
