import React from 'react'

export default function Imagex({images,setIndex}) {
    return (
        <div className="row">
        {images.map((img,index)=>{
            return(
             
    <div className="col-lg-3 col-md-5 col-8"  key={index}>
                    <div  id="images">
                        <img  src={img} alt="images" onClick={()=>{setIndex(index)}}/>
                    </div>
    </div>
            )
        })}
</div>
    )
}
