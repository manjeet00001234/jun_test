import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Gellery from "../pages/Gellery/Gellery.jsx";
import Contact from "../pages/Contact/Contact";
import ShowData from "../pages/ShowData/ShowData";

const MainRouting = () => {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gellery" element={<Gellery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/showdata" element={<ShowData />} />
               </Routes>
          </div>
     );
};

export default MainRouting;
