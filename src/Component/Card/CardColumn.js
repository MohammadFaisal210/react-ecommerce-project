import React from "react";

const CardColumn=()=>{
    return(
        <>
        <div style={{fontSize:"2rem",marginTop:"120px"}} className="container  d-lg-block d-none font-weight-bold">
            <div className="row mx-auto text-center">
                <div className="col-lg-2 col-10 mx-auto ">
                    <p>Product</p>
                </div>
                <div className="col-lg-2 col-10 mx-auto">
                    <p>Name of Product</p>
                </div>
                <div className="col-lg-2 col-10  mx-auto">
                    <p>Price</p>
                </div>
                <div className="col-lg-2 col-10  mx-auto">
                    <p>Quantity</p>
                </div>
                <div className="col-lg-2 col-10  mx-auto">
                    <p>Remove</p>
                </div>
                {/* <div className="col-lg-2 col-10 mx-auto">
                    <p>Total</p>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default CardColumn;