import React from 'react'
import './home.css'
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "antd";
import "aos/dist/aos.css";
import Gellery from '../Gellery/Gellery';
import Contact from '../Contact/Contact';



const contentStyle = {
     height: "90vh",
     color: "#fff",
     lineHeight: "160px",
     textAlign: "center",
     background: "#364d79",
};

const sliderimage = {
     image: "https://staticlearn.shine.com/l/m/images/blog/UI-UX.webp",
     image1: "https://monomousumi.com/wp-content/uploads/Software-Development-Company.jpg",
     image2: "https://e1.pxfuel.com/desktop-wallpaper/380/345/desktop-wallpaper-software-development-computer-software.jpg",
     image3: "https://www.teahub.io/photos/full/178-1787609_digital-marketing-seo-company.png",
};





const Home = () => {
  return (
       <div className="home_contaner">
            <Carousel autoplay>
                 <div>
                      <h3 style={contentStyle}>
                           <img
                                className="w-full h-full"
                                src={sliderimage.image}
                                alt=""
                           />
                      </h3>
                 </div>
                 <div>
                      <h3 style={contentStyle}>
                           <img
                                className="w-full h-full"
                                src={sliderimage.image1}
                                alt=""
                           />
                      </h3>
                 </div>
                 <div>
                      <h3 style={contentStyle}>
                           <img
                                className="w-full h-full"
                                src={sliderimage.image2}
                                alt=""
                           />
                      </h3>
                 </div>
                 <div>
                      <h3 style={contentStyle}>
                           <img
                                className="w-full h-full"
                                src={sliderimage.image3}
                                alt=""
                           />
                      </h3>
                 </div>
            </Carousel>

            <Gellery />
            <Contact />
            {/* <ShowData/> */}
       </div>
  );
}

export default Home