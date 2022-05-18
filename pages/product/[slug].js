import React from 'react'
import {useRouter} from 'next/router'
import { useState } from 'react'
const products = ({addToCart}) => {
    const router=useRouter()
    const{slug} = router.query
    const[pin , setpin]=useState()
    const[service , setservice]= useState()
    const checkServicibility = async()=>{
let pins = await fetch('http://localhost:3001/api/pincode')
let pinJson = await pins.json()
if(pinJson.includes(parseInt(pin))){
  setservice(true)
}else{
  setservice(false)
}
    }
    const onchangepin =(e)=>{
      setpin(e.target.value)
    }
  return (
  <><section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-16 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover  object-top rounded" src="https://m.media-amazon.com/images/I/71xhhKSkXCL._AC_UL480_FMwebp_QL65_.jpg"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">ShopWear</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Dairy Product</h1>
        
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex py-9">
          
          <span className="title-font mt-15 font-medium text-2xl text-gray-900">₹ 199</span>
          <button className="flex mt-15 ml-8 text-white bg-red-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
          <button  onClick={()=>{addToCart(slug,1,233,'milk','qp','red')}} className="flex mt-15 ml-4 text-white bg-red-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
        
        
        </div>
        <div className="pin mt-6 flex space-x-2 text-sm">
          <input onChange={onchangepin} type="text" className='px-2 border-2 rounded border-red-200'  placeholder='Enter Your Pincode' />
          <button onClick={checkServicibility} className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Check Pincode</button>
        </div>
       {(!service && service !=null) &&<div className="test-sm text-red-700 mt-3">Sorry! This pincode is not servicable</div>}
       {(service && service !=null) && <div className="test-sm text-green-700 mt-3">Yay! This Pincode is Servicable</div>}
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default products
