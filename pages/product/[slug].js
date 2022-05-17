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
        <h2 className="text-sm title-font text-gray-500 tracking-widest">ShopMart</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Dairy Product</h1>
        
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
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
