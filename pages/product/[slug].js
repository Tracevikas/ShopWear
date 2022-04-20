import React from 'react'
import {useRouter} from 'next/router'
const products = () => {
    const router=useRouter()
    const{slug} = router.query
  return (
    <div>
      <p>the slug is : {slug}</p>
    </div>
  )
}

export default products
