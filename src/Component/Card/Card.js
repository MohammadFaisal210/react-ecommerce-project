import React,{useContext,useState,useEffect} from 'react';
import {ProductContext} from "../ContextPro";
// import {Link} from "react-router-dom";
import CardColumn from "./CardColumn";

const Card=()=>{
    const [value] = useContext(ProductContext);
    const [cart,setCart] = value.cart;
    const [total,setTotal] = useState(0)
    // console.log(cart);
    // console.log();
    // ***get Total***
    useEffect(()=>{
        const getTotal = () =>{
            const res = cart.reduce((prev,item)=>{
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart]);
        // ***decrease**
    const reduction = id =>{
        cart.forEach(item=>{
            if(item.id===id){
                item.count === 1 ? item.count = 1 :item.count -= 1;
            }
        })
        setCart([...cart])
    }
    // ***increase***
    const increase=id=>{
        cart.forEach(item=>{
            if(item.id===id){
                item.count += 1;
            }
        })
        setCart([...cart])
    }
    // ***remove item***
    const removeItem = id =>{
        if(window.confirm("Do you want to delete this product")){
            cart.forEach((item,index)=>{
                if(item.id=== id){
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
        }
    }

    if(cart.length === 0 ){
        return <h2 style={{marginTop:"120px",textTransform:"Capitalize",textAlign:"center",fonSize:"3rem"}}>Cart empty</h2>
    }else if(cart.length>0){
        return( <>
        <CardColumn/>
        <section className="cartSec">        
                {cart.map((item)=>{
                    const {images,id,title,price,count} = item;
                    return(
                        <div key={id} className="container">
                            <div style={{fontSize:"1.8rem",borderBottom:"1px solid black"}} className="row  my-3 text-center">
                                <div className="col-lg-2 col-10  mx-auto">
                                    <img src={images[0]} style={{width:"5.2rem",objectFit:"cover",height:"4.8rem"}} alt="product" />
                                </div>
                                <div className="col-lg-2 col-10  mx-auto">
                                    <span className="d-lg-none">product : </span>
                                    {title}
                                </div>
                                <div className="col-lg-2 col-10  mx-autotext-primary ">
                                    <span className="d-lg-none">price : </span>
                                    {price}
                                </div>
                                <div className="col-lg-2 mx-auto col-10">
                                    <span className="d-lg-none">quantity : </span>
                                    <span onClick={()=>reduction(id)} className="btnCount">-</span>
                                    <span className="btnCount">{count}</span>
                                    <span onClick={()=>increase(id)} className="btnCount">+</span>
                                </div>
                                <div className="col-lg-2 mx-auto col-10">
                                    <button onClick={()=>removeItem(id)} className="btn btn-danger">Remove</button>
                                </div>
                                {/* <div className="col-lg-2 col-10">
                                    <span className="d-lg-none">total : </span>
                                    {price}
                                </div> */}
                            </div>
                        </div>
                    )
                })}
                            <div className="totalTk">
                                <h2>TK : {total}</h2>
                            </div>
            </section>
        </>)
    }

}
export default Card;