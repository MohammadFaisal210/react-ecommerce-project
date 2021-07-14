import React,{useContext,useState} from 'react';
import {useParams} from 'react-router-dom';
import {ProductContext} from "./ContextPro";
import {Link} from "react-router-dom";
import Imagex from "./Imagex"
export default function Deatils() {
    const {id} = useParams();
    const [products] = useContext(ProductContext);
    const details =products.filter((product, index) =>{
        return product.id === id
    })

 const [index,setIndex] = useState(0)
 

    return (
        <>
        <section id="detailsS" className="pt-5">
        <div className="container">
                        {/* <section key={id}> */}
                {details.map((item,keyid)=>{
                    const {images,title,des,info,price} = item;
                    return(
                        <>
                        <div key={keyid} className="row mt-5">
                        <div className="col-lg-5 col-md-8 col-10 mx-auto">
                            <div id="detailImg" className="">
                                <img src={images[index]} alt="Product" />
                            </div>
                        <Imagex images={images} setIndex={setIndex} />
                        </div>
                        <div className="mt-5 col-lg-6 col-md-8 col-12 mx-auto">
                            <div>
                                <h4 className="font-weight-bold text-success">{title}</h4>
                                <h5 className="text-danger">TK : {price}</h5>
                                <p>{des}</p>
                            </div>
                            <Link to="/">
                            <button className="btn btn-success">Continue shopping</button>
                            </Link>
                            <Link to="/card">
                            <button className="btn btn-danger mx-2">Add to cart</button>
                            </Link>
                        </div>
                    </div>
                        {/* </section> */}
                        </>
                    )
                })}
        </div>
        </section>
        </>
    )
}
