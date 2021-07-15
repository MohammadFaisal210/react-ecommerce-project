import React,{useState,useContext} from 'react';
import {VscThreeBars} from "react-icons/vsc";
import {GiShoppingCart} from "react-icons/gi";
import {Link} from "react-router-dom";
import {ProductContext} from "./ContextPro";

export default function Navbar() {
  const [sidebar,setSidebar] = useState(false);
  const [value] = useContext(ProductContext);
  const [cart] = value.cart;
  // console.log(cart);
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
          <div className="log">
            <h2>Faisal</h2>
            <span onClick={()=>setSidebar(!sidebar)}><VscThreeBars id="barsIcon" /></span>
          </div>
          <div className={sidebar ? 'nav_menu nav-menu-show' : 'nav_menu'}>
            <ul className="">
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/">product</Link></li>
              <li> <Link to="/">about</Link></li>
              <li> <Link to="/">contact</Link></li>
              <li><span id="cartlength">{cart.length}</span> <Link to="card"> <GiShoppingCart id="cartIcon"/></Link></li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
