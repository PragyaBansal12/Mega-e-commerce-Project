import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const[related,setRelated] = useState([])

    useEffect(()=>{
        if (products.length>0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);
            setRelated(productsCopy.slice(0,5));
        }
    },[products])
  return (
    <div className='my-20'>
        <div className='text-centertext-3xl py-2'></div>

    </div>
  )
}

export default RelatedProducts