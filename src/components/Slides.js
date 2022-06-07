import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./radios";
// import logoonda from "../assets/images/logo_ondacero.png";
// import logolanube from "../assets/images/logo_lanube.png";
// import logocumbia from "../assets/images/logo_pana.png";
// import logoexitosa from "../assets/images/logo_exitosa.png";
// import logolavaca from "../assets/images/logo_lavaca.png";
// import logoradiocomas from "../assets/images/logo_radiocomas.png";
// import logovivafm from "../assets/images/logo_vivafm.jpg";
// import logoondaclasico from "../assets/images/logo_ondaclasico.png";
// import logoondafeeling from "../assets/images/logo_ondafeeling.png";
// import logoondaleyedas from "../assets/images/logo_ondaleyendas.png";
// import logooncesesenta from "../assets/images/logo_oncesesenta.png";
// import logoondavip from "../assets/images/logo_ondavip.png";
// import logopana from "../assets/images/logo_pana.png";
// import logocumbia from "../assets/images";
// import logocumbia from "../assets/images";

import "swiper/css";
import "./Styles/Slides.css";
import { Link, NavLink } from "react-router-dom";
export class Slides extends Component {
  prefix = "http://localhost:3001/images/";
  // state = {
  //   items: [
  //     {
  //       img: `${logoondaclasico}`,
  //       content: "slide 1",
  //       id: "1",
  //       to: "/radiopage/ondacero",
  //     },
  //     {
  //       img: `${logoondaleyedas}`,
  //       content: "slide 1",
  //       id: "13",
  //       to: "/radiopage/ondaleyendas",
  //     },
  //     {
  //       img: `${logoondafeeling}`,
  //       content: "slide 1",
  //       id: "14",
  //       to: "/radiopage/ondafeeling",
  //     },
  //     {
  //       img: `${logoondavip}`,
  //       content: "slide 1",
  //       id: "15",
  //       to: "/radiopage/ondavip",
  //     },
  //     {
  //       img: `${logocumbia}`,
  //       content: "slide 2",
  //       id: "2",
  //       to: "/radiopage/cumbiamix",
  //     },
  //     {
  //       img: `${logolanube}`,
  //       content: "slide 3",
  //       id: "3",
  //       to: "/radiopage/lanube",
  //     },
  //     {
  //       img: `${logooncesesenta}`,
  //       content: "slide 4",
  //       id: "4",
  //       to: "/radiopage/oncesesenta",
  //     },
  //     {
  //       img: `${logopana}`,
  //       content: "slide 5",
  //       id: "5",
  //       to: "/radiopage/panamericana",
  //     },
  //     {
  //       img: `${logolavaca}`,
  //       content: "slide 6",
  //       id: "6",
  //       to: "/radiopage/lavaca",
  //     },
  //     {
  //       img: `${logoradiocomas}`,
  //       content: "slide 7",
  //       id: "7",
  //       to: "/radiopage/radiocomas",
  //     },
  //     {
  //       img: `${logovivafm}`,
  //       content: "slide 8",
  //       id: "8",
  //       to: "/radiopage/vivafm",
  //     },
  //     {
  //       img: `${logoexitosa}`,
  //       content: "slide 9",
  //       id: "9",
  //       to: "/radiopage/exitosa",
  //     },
  //     {
  //       img: `${logooncesesenta}`,
  //       content: "slide 10",
  //       id: "10",
  //       to: "/radiopage/oncesesenta",
  //     },
  //     {
  //       img: `${logocumbia}`,
  //       content: "slide 11",
  //       id: "11",
  //       to: "/radiopage/cumbiamix",
  //     },
  //     {
  //       img: `${logopana}`,
  //       content: "slide 12",
  //       id: "12",
  //       to: "/radiopage/panamericana",
  //     },
  //   ],
  // };

  state = data;
  handleClick = (e) => {
    console.log(this.state.items[0].img);
  };

  render() {
    return (
      <div className="slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {this.state.items.map((item) => {
            return (
              <NavLink className={(data) => console.log(data)}>
                <SwiperSlide>
                  <Link
                    onClick={this.handleClick}
                    className="img_cont"
                    to={`${item.to}`}
                  >
                    <img className="slider_img" src={item.img} alt={item.to} />
                  </Link>
                </SwiperSlide>
              </NavLink>
            );
          })}
        </Swiper>
      </div>
    );
  }
}

export default Slides;
