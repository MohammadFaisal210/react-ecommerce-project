import React, { createContext,useState } from 'react';
import {productsData,deatails} from "./data";
export const ProductContext = createContext();
export const ContextPro = (props)=>{
    const [products,setProducts] = useState(
    //    [ {
    //         "id":"1",
    //        img:"img1",
    //         title:"Smart-Wach",
    //         des:"",
    //         info:"",
    //         price:4500,
    //     },
    //     {
    //         "id":"2",
    //     img:"img2",
    //         title:"Head-Phones",
    //         des:"",
    //         info:"",
    //         price:6800,
    //     }]
        productsData
    );



return (
    <>
       <ProductContext.Provider value={[products,setProducts]}>
          { props.children}
       </ProductContext.Provider> 
    </>
)
} 

