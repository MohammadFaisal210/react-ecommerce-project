import React, { useContext } from 'react';
import {ProductContext} from "./ContextPro";
import {Link} from "react-router-dom";
import Banner from "./Banner";
import { useState } from 'react/cjs/react.development';

export default function Products() {
    const [value] = useContext(ProductContext);
    const [products] = value.products;
    console.log(value.addCart);
    const addCart = value.addCart;
    const [shop,setShop] = useState(false)
    return (
        <>
        <Banner/>
           <section className=" px-3 ">
                   <div className="row">
                   <h1 id="prdAfter" className="text-center  py-3">Choose Your Products</h1>
                    {products.map((item)=>{
                        const {images,id,title,price} = item;
                    return(
                            <div key={id} className="pt-5 col-lg-2 col-md-4 col-8 mx-auto">
                            <div id="card_img" 
                            >
                            <Link to={`/${id}`}>
                                <img src={images[0]} alt="products" />
                                </Link>
                            </div>
                            <div className="text-muted">
                                <h4 className="mb-0">{title}</h4>
                                <h3>TK : {price}</h3>
                            </div>
                            <div className="buttonshop">
                                <Link to="card" className="proBtn" 
                                onClick={()=>addCart(id)}>
                                    add to cart
                                    </Link>
                            </div>
                        </div>
                    )
                        
                    })}
               </div>
           </section> 

        </>
    )
}
