import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import { useState ,useEffect} from 'react'
function MyApp({ Component, pageProps }) {
 const[cart ,setCart] =useState({})
 const[subTotal, setSubtotal]=useState(0)
 const [user , setUser]=useState({value:null})
 const [progress, setProgress] = useState(0)
 const[key,setKey]=useState()
 const router = useRouter();
 useEffect(()=>{
  router.events.on('routeChangeStart',()=>{
    setProgress(40)
  },[router.query])
   router.events.on('routeChangeComplete',()=>{
     setProgress(100)
   },[router.query])
   try
   { if(localStorage.getItem("cart")){
     saveCart(JSON.parse(localStorage.getItem("cart")))
     setCart(JSON.parse(localStorage.getItem("cart")))
  } 
   } catch (error) {
     localStorage.clear()
   } 
   const token = localStorage.getItem('token')
   if(token){
setUser({value:token})
setKey(Math.random())
   }
 },[router.query])

 const saveCart=(myCart)=>
 {
   let subt = 0;
   let keys = Object.keys(myCart)
   for(let i=0; i<keys.length; i++){
     subt += myCart[keys[i]].price*myCart[keys[i]].qty;
     console.log(myCart)
     localStorage.setItem("cart", JSON.stringify(myCart))
 }
 setSubtotal(subt)
 }
 const addToCart=(itemCode,qty,price,name,size,varient)=>{
   let newCart=cart;
   if(itemCode in cart){
     newCart[itemCode].qty=cart[itemCode].qty + qty
   }
   else{
     newCart[itemCode]={qty:1 ,price,name,size,varient}
   }
   setCart(newCart)
   saveCart(newCart)
 }
 const logout =()=>{
   localStorage.removeItem('token')  
   setKey(Math.random())
   setUser({value:null})
 }
 const buyNow = (itemCode,qty,price,name,size,varient)=>{
   let newCart = {itemCode:{qty:1,price,name,size,varient}}
   setCart(newCart)
   saveCart(newCart)
   router.push('/checkout')
 }
 const clearCart=()=>{
  setCart({})
  saveCart({})
  localStorage.removeItem('cart')
}
const removeFromCart=(itemCode,qty,price,name,size,varient)=>{
  let newCart=cart;
   if(itemCode in cart){
     newCart[itemCode].qty=cart[itemCode].qty - qty
   }
  if(newCart[itemCode].qty<=0){
    delete newCart[itemCode]
  }
   setCart(newCart)
   saveCart(newCart)
}
  return <>   
  <LoadingBar
    color='#f11946'
    progress={progress}
    onLoaderFinished={() => setProgress(0)}
  /> <Navbar logout={logout} user={user} key={key} cart={cart}  addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
   <Component  cart={cart} buyNow={buyNow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
 
<Footer/></>}
export default MyApp
