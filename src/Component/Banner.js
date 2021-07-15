import React,{useState} from 'react';
import banner from  "../images/watch.jpg";
import banner1 from "../images/banner.jpg";
import banner2 from "../images/pexels-pixabay-461428.jpg";
import banner3 from "../images/laptop.jpg";
import banner4 from "../images/family.jpg";
import banner5 from "../images/juice.jpg";


export default function Banner() {
    const [bg, setbg] = useState(banner1)
    return (
        <>
            <section className="" style={{backgroundImage:`url(${bg})`}}
             className="bannerMain">
            <div className="container">
                <div className="bannerHead">
                    <h2>Multiple add-ons are supported and can be mixed </h2>
                    <p>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</p>
                </div>
                    <div id="slider">
                        <span onMouseEnter={()=>setbg(banner1)}></span>
                        <span onMouseEnter={()=>setbg(banner)}></span>
                        <span onMouseEnter={()=>setbg(banner2)}></span>
                        <span onMouseEnter={()=>setbg(banner3)}></span>
                        <span onMouseEnter={()=>setbg(banner4)}></span>
                        <span onMouseEnter={()=>setbg(banner5)}></span>
                    </div>
                </div>
            </section>
        </>
    )
}
