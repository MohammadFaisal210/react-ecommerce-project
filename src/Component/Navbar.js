import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {GiShoppingCart} from "react-icons/gi";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav id="navbar" className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-3">
            <Link to="/">
              <h5 id="logo" className="pt-2 mb-0">
                <span className="text-success">F</span>AISAL
              </h5>
            </Link>
            </div>
            <div className="col-7 mt-1">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                id="searchBtn"
                  className=""
                  type="button"
                >
                  <AiOutlineSearch id="searchIcons"/>
                </button>
              </div>
            </div>
            <div id="icons" className="col-2">
               <GiShoppingCart id="cartIcons"/> 
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
