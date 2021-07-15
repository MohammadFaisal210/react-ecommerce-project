import React from 'react'

export default function Imagex({images,setIndex}) {
    return (
        <div className="row">
        {images.map((img,index)=>{
            return(
             
    <div className="col-lg-2 col-md-3 col-3"  key={index}>
                    <div  id="images">
                        <img  src={img} alt="images" onClick={()=>{setIndex(index)}}/>
                    </div>
    </div>
            )
        })}
</div>
    )
}
