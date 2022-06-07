import fondopana from "../assets/images/fondo_panamericana.png";
import fondocumbia from "../assets/images/fondo_cumbiamix.png";
import fondolanube from "../assets/images/fondo_lanube.jpg";
import fondooncesesenta from "../assets/images/fondo_oncesesenta.png";
import artistasoncesesenta from "../assets/images/artistas_oncesesenta.png";
import logolanube from "../assets/images/logo_lanube.png";
import logocumbia from "../assets/images/logo_cumbiamix.png";
import logoexitosa from "../assets/images/logo_exitosa.png";
import logolavaca from "../assets/images/logo_lavaca.png";
import logoradiocomas from "../assets/images/logo_radiocomas.png";
import logovivafm from "../assets/images/logo_vivafm.jpg";
import logoondaclasico from "../assets/images/logo_ondaclasico.png";
import logoepa from "../assets/images/logoEPA.png";
import logoondafeeling from "../assets/images/logo_ondafeeling.png";
import logoondaleyedas from "../assets/images/logo_ondaleyendas.png";
import logooncesesenta from "../assets/images/logo_oncesesenta.png";
import logoondavip from "../assets/images/logo_ondavip.png";
import logopana from "../assets/images/logo_pana.png";
import fondoleyendas from "../assets/images/fondo_leyendas.png";

const radiosinfo = {
  home: {
    page: "Home",
    backgroundImage: "",
    backgroundColor:
      "radial-gradient(circle, rgba(5,89,0,0.75) 0%, rgba(0,0,0,1) 57%)",
    logo: `${logoepa}`,
  },
  lanube: {
    page: "La nube",
    backgroundImage: `${fondolanube}`,
    logo: `${logolanube}`,
    backgroundColor: "",
    stream: `https://streaming.gometri.com/stream/8025/stream`,
  },
  cumbiamix: {
    page: "Cumbia Mix",
    backgroundImage: `${fondocumbia}`,
    logo: `${logocumbia}`,
    backgroundColor: "",
    stream: `https://streaming.gometri.com/stream/8017/stream`,
  },
  ondacero: {
    page: "Onda Cero",
    backgroundImage: "",
    backgroundColor: "radial-gradient(#FEE248 30%, #FFA01C 100%)",
    logo: `${logoondaclasico}`,
    stream: `https://streaming.gometri.com/stream/8011/stream`,
  },
  panamericana: {
    page: "Panamericana",
    backgroundImage: `${fondopana}`,
    logo: `${logopana}`,
    backgroundColor: "",
    stream: `https://streaming.gometri.com/stream/8000/stream`,
  },
  oncesesenta: {
    page: "1160",
    backgroundImage: `${fondooncesesenta}`,
    logo: `${artistasoncesesenta}`,
    backgroundColor: "",
    stream: `https://streaming.gometri.com/stream/8021/stream`,
  },
  lavaca: {
    page: "Radio la vaca",
    backgroundImage: "",
    logo: `${logolavaca}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
    stream: `https://streaming.gometri.com/stream/8007/stream`,
  },
  radiocomas: {
    page: "Radio Comas",
    backgroundImage: "",
    logo: `${logoradiocomas}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
    stream: `http://65.60.2.26:8044/stream?icy=http`,
  },
  vivafm: {
    page: "Viva FM",
    backgroundImage: "",
    logo: `${logovivafm}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
    stream: `https://tupanel.info:8746/stream`,
  },
  exitosa: {
    page: "Radio Exitosa",
    backgroundImage: "",
    logo: `${logoexitosa}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
    stream: "http://167.114.118.120:7444/stream",
  },
  ondavip: {
    page: "Onda cero Vip",
    backgroundImage: "",
    logo: `${logoondavip}`,
    backgroundColor: "radial-gradient(#452F11 30%, #170F01 100%)",
    stream: `https://streaming.gometri.com/stream/8039/stream`,
  },
  ondafeeling: {
    page: "Onda cero Feeling",
    backgroundImage: "",
    logo: `${logoondafeeling}`,
    backgroundColor: "radial-gradient(#960C88 30%, #260023 100%)",
    stream: `https://streaming.gometri.com/stream/8035/stream`,
  },
  ondaleyendas: {
    page: "Onda cero Leyendas",
    backgroundImage: `${fondoleyendas}`,
    logo: `${logoondaleyedas}`,
    backgroundColor: "radial-gradient(#452F11 30%, #170F01 100%)",
    stream: `https://streaming.gometri.com/stream/8033/stream`,
  },
};

export default radiosinfo;
