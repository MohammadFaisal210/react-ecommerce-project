import React, { createContext,useEffect,useState } from 'react';
import {productsData} from "./data";
export const ProductContext = createContext();
export const ContextPro = (props)=>{
    const [products,setProducts] = useState( productsData);
    // console.log(productsData)
    const [cart,setCart] = useState([]);
    const addCart = (id) =>{
        const check =cart.every(item=>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product=>{
                return product.id ===id
            })
            setCart([...cart,...data])
        }else{
            alert("the product has been added to cart")
        }
    }
    useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
    },[])
    useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])
    const value = {
        products : [products,setProducts],
        cart:[cart,setCart],
        addCart:addCart
    }
return (
    <>
       <ProductContext.Provider value={[value]}>
          { props.children}
       </ProductContext.Provider> 
    </>
)
} 

