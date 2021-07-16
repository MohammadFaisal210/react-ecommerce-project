import React,{useContext,useState} from 'react';
import {useParams} from 'react-router-dom';
import {ProductContext} from "./ContextPro";
import {Link} from "react-router-dom";
import Imagex from "./Imagex"
export default function Deatils() {
    const {id} = useParams();
    const [value] = useContext(ProductContext);
    const [products] = value.products;
    const details =products.filter((product, index) =>{
        return product.id === id
    })

 const [index,setIndex] = useState(0)
 const addCart = value.addCart;
 
//  const handleMouse =e=>{
//      const {left,top,width,height} = e.target.getBoundingClientReact();
//      const x = (e.pageX - left) / width*100
//      const y = (e.pageY - top) /height * 100
//     imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
//  }

    return (
        <>
        <section id="detailsS" className="pt-5">
        <div className="container">
                        {/* <section key={id}> */}
                {details.map((item,keyid)=>{
                    const {id,images,title,des,info,price} = item;
                    return(
                        
                        <div key={keyid} className="row mt-5">
                        <div className="col-lg-4 col-md-8 col-10 mx-auto">
                            <div id="detailImg" className="">
                                <img className="img-fluid" src={images[index]} alt="Product" />
                            </div>
                        <Imagex images={images} setIndex={setIndex} />
                        </div>
                        <div  className="mt-5 col-lg-6 my-auto col-md-8 col-10 mx-auto">
                            <div>
                                <h1 className="font-weight-bold text-success">{title}</h1>
                                <h2 className="py-3 text-danger">TK : {price}</h2>
                                <p className="proInfo">{des}</p>
                            </div>
                            <Link to="/">
                            <button style={{background:"#0d6efd"}} className="shop_btn">Continue shopping</button>
                            </Link>
                            <Link to="/card">
                            <button onClick={()=>addCart(id)} className="shop_btn mx-2">Add to cart</button>
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
