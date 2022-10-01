import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }
    return (
        <>


            <Slider {...settings}>
                {Sdata.map((value) => {
                    return (
                        <>
                            <div className='box d_flex top' key={value.id}>
                                <div className='left'>
                                    <h1>{value.title}</h1>
                                    <p>{value.desc}</p>
                                    <button className='btn-primary'>Visit Collections</button>
                                </div>
                                <div className='right'>
                                    <img src={value.cover} alt='' />
                                </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default SlideCard

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class CenterMode extends Component {
//     render() {
//         const settings = {
//             className: "center",
//             centerMode: true,
//             infinite: true,
//             centerPadding: "60px",
//             slidesToShow: 3,
//             speed: 500
//         };
//         return (
//             <div>
//                 <h2>Center Mode</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }