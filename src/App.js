import React from 'react';
// import Hero from "./Hero";
import Navbar from "./Component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Component/shop.css";
// import Banner from "./Component/Banner";
import {ContextPro} from "./Component/ContextPro";
import Products from "./Component/Products";
import {BrowserRouter as Router,Route,Routes}  from "react-router-dom";
import Details from "./Component/Details";
import Card from "./Component/Card/Card"

export default function App() {
  return (
    <React.Fragment>
    <ContextPro>
    <Router>
    <Navbar/>
    {/* <Banner/> */}
    <Routes>
    <Route exact path="/" element={<Products/>} />
    <Route exact path="/:id" element={<Details/>} />
    <Route exact path="/card" element={<Card/>} />
    </Routes>
    </Router>
    </ContextPro>
    </React.Fragment>
  )
}

