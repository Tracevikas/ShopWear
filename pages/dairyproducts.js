import React from 'react'
import Link from 'next/link'
import Product from"../models/Product"
import mongoose from "mongoose";

const dailyproducts = ({products}) => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      {products.map((items)=>
      <Link key={items._id} href={`/product/${items.slug}`} ><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className=" object-top w-full h-full block" src={items.img}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{items.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{items.desc}</h2>
          <p className="mt-1">₹{items.price}</p>
        </div>
      </div></Link>)}
    
    </div>
  </div>
</section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
  let products = await Product.find({category:'Dairy-Item'})
  return {
    props: {products: JSON.parse(JSON.stringify(products))},
  }
}

export default dailyproducts
