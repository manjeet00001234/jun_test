import React from "react";
import "./gellery.css";
import img01 from "../../image/image/g_01.jpeg";
import img02 from "../../image/image/g_02.jpeg";
import img03 from "../../image/image/g_03.jpeg";
import img04 from "../../image/image/g_04.jpeg";
import img05 from "../../image/image/g_05.jpeg";
import img06 from "../../image/image/g_06.jpeg";
import img07 from "../../image/image/g_07.jpeg";
import img08 from "../../image/image/g_08.jpg";

const Gellery = () => {
     return (
          <div>
               <h1>Gallary</h1>

               <div className="img_div">
                    <div>
                         {" "}
                         <img src={img01} alt="" />
                    </div>
                    <div>
                         {" "}
                         <img src={img02} alt="" />
                    </div>
                    <div>
                         {" "}
                         <img src={img03} alt="" />
                    </div>
                    <div>
                         {" "}
                         <img src={img04} alt="" />
                    </div>
                    <div>
                         {" "}
                         <img src={img05} alt="" />
                    </div>
                    <div>
                         {" "}
                         <img src={img06} alt="" />
                    </div>
                    <div>
                         {" "}
                         <img src={img07} alt="" />
                    </div>
                    <div>
                         {" "}
                         <img src={img08} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Gellery;
