import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Playbar from "./Playbar";
import radiosinfo from "./radiosinfo";
import errorimg from "../assets/images/error.png";
import "./Styles/Radiopage.css";
const RadioPage = () => {
  const [info, setInfo] = useState({});
  let params = useParams();
  let radio = params.radio;
  const error = {
    page: "Error",
    backgroundImage: "",
    logo: `${errorimg}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
  };

  useEffect(() => {
    setInfo(radiosinfo[radio] ? radiosinfo[radio] : error);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((art) => {
    //     setInfo(art);
    //   })
    //   .catch((e) => console.log(e));
  });

  return (
    <div
      className="RadioPage"
      style={{
        background: "black",
        backgroundImage: `${
          info.backgroundImage
            ? `url('${info.backgroundImage}')`
            : info.backgroundColor
            ? info.backgroundColor
            : "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)"
        }`,
        backgroundSize: "cover",
      }}
    >
      <div className="RadioPage_navbar">
        <Navbar />
      </div>
      <div className="RadioPage_playbar">
        <Playbar />
      </div>

      <div
        className={`RadioPage_logo ${
          radio == "oncesesenta" ? "oncesesenta" : ""
        }`}
      >
        <img src={`${info.logo}`} alt="" />
      </div>
    </div>
  );
};

export default RadioPage;
