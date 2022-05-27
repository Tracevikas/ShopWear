import React from 'react'
import {useRouter} from 'next/router'
import { useState } from 'react'
import mongoose from 'mongoose'
import Product from "../../models/Product"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const products = ({buyNow ,addToCart ,product,varients}) => {
  
    const router=useRouter()
    const{slug} = router.query
    const[pin , setpin]=useState()
    const[service , setservice]= useState()
    const checkServicibility = async()=>{
let pins = await fetch('http://localhost:3000/api/pincode')
let pinJson = await pins.json()
if(pinJson.includes(parseInt(pin))){
  setservice(true)
  toast.success('Your Pincode Is Serviceable !', {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}else{
  setservice(false)
  toast.error('Your Pincode Is Not Servicable !', {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
    }
    const onchangepin =(e)=>{
      setpin(e.target.value)
    }
    const [color ,setColor]=useState(product.color)
    const [ size , setSize] = useState(product.size)

    const refereshVarients=(newsize, newcolor)=>{
   
let url = `http://localhost:3000/product/${varients[newcolor][newsize]['slug']}`
window.location=url;
    }
  return (
  <><section className="text-gray-600 body-font overflow-hidden">
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
  <div className="container px-5 py-16 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover  object-top rounded" src="https://m.media-amazon.com/images/I/61bDoqhvEPL._AC_UL320_.jpg"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">ShopWear</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}({product.size}/{product.color})</h1>
        
        <p className="leading-relaxed">{product.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span> 
            {Object.keys(varients).includes('green') && Object.keys(varients['green']).includes(size) &&<button onClick={()=>{refereshVarients( size,'green')}} className={`border-2  ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${ color === 'green' ? `border-black`:`border-grey-300` }`} ></button>}
            {Object.keys(varients).includes('red') && Object.keys(varients['red']).includes(size) &&<button onClick={()=>{refereshVarients( size,'red')}} className={`border-2  ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${ color === 'red' ? `border-black`:`border-grey-300` }`} ></button>}
            {Object.keys(varients).includes('blue') && Object.keys(varients['blue']).includes(size) &&<button onClick={()=>{refereshVarients( size,'blue')}} className={`border-2  ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${ color === 'blue' ? `border-black`:`border-grey-300` }`} ></button>}
            {Object.keys(varients).includes('purple') && Object.keys(varients['purple']).includes(size) &&<button onClick={()=>{refereshVarients( size,'purple')}} className={`border-2  ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${ color === 'purple' ? `border-black`:`border-grey-300` }`} ></button>}
            {Object.keys(varients).includes('voilet') && Object.keys(varients['voilet']).includes(size)
             &&<button onClick={()=>{refereshVarients( size,'voilet')}} className={`border-2  ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none 
             ${ color === 'yellow' ? `border-black`:`border-grey-300` }`} ></button>}

          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select  value={size} onChange={(e)=>{refereshVarients(e.target.value ,color)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
             {/* {console.log(Object.keys(varients[color]))} */}
              {Object.keys(varients[color]).includes('S') &&  <option value={'S'}>S</option>}
              {Object.keys(varients[color]).includes('M') &&  <option value={'M'}>M</option>}
              {Object.keys(varients[color]).includes('L') &&  <option value={'L'}>L</option>}
              {Object.keys(varients[color]).includes('XL') &&  <option value={'XL'}>XL</option>}
              {Object.keys(varients[color]).includes('XXL') &&  <option value={'XXL'}>XXL</option>}
              {Object.keys(varients[color]).includes('XXXL') &&  <option value={'XXXL'}>XXXL</option>}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex py-9">
          
          <span className="title-font mt-15 font-medium text-2xl text-gray-900">₹{product.price}</span>
          <button onClick={()=>{buyNow(slug,1,product.price,product.title,size, color)}} className="flex mt-15 ml-8 text-white bg-red-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
          <button  onClick={()=>{addToCart(slug,1,product.price,product.title,size, color)}} className="flex mt-15 ml-4 text-white bg-red-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
      
        
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
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
  let product = await Product.findOne({slug:context.query.slug})
  let varients=await Product.find({title:product.title , category:product.category})
  let colorSizeSlug={}
  for(let item of varients){
    if(Object.keys(colorSizeSlug).includes(item.color)){
      colorSizeSlug[item.color][item.size]={slug: item.slug}
    }
    else{
      colorSizeSlug[item.color]={}
      colorSizeSlug[item.color][item.size]={slug:item.slug}
    }
  }
 
  return {
    props: {product: JSON.parse(JSON.stringify(product)),varients: JSON.parse(JSON.stringify(colorSizeSlug))},
  }
}
export default products
