import React, { useContext } from 'react';
import {ProductContext} from "./ContextPro";
import {Link} from "react-router-dom";
import Banner from "./Banner";

export default function Products() {
    const [products] = useContext(ProductContext);
    return (
        <>
        <Banner/>
           <section className="bg-info px-3 ">
                   <div className="row">
                   <h1 className="text-center text-white py-3">Choose your products</h1>
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
                            <div className="text-white">
                                <p className="mb-0">{title}</p>
                                <p>TK : {price}</p>
                            </div>
                        </div>
                    )
                        
                    })}
               </div>
           </section> 

        </>
    )
}
