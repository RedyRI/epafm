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
  },
  cumbiamix: {
    page: "Cumbia Mix",
    backgroundImage: `${fondocumbia}`,
    logo: `${logocumbia}`,
    backgroundColor: "",
  },
  ondacero: {
    page: "Onda Cero",
    backgroundImage: "",
    backgroundColor: "radial-gradient(#FEE248 30%, #FFA01C 100%)",
    logo: `${logoondaclasico}`,
  },
  panamericana: {
    page: "Panamericana",
    backgroundImage: `${fondopana}`,
    logo: `${logopana}`,
    backgroundColor: "",
  },
  oncesesenta: {
    page: "1160",
    backgroundImage: `${fondooncesesenta}`,
    logo: `${artistasoncesesenta}`,
    backgroundColor: "",
  },
  lavaca: {
    page: "Radio la vaca",
    backgroundImage: "",
    logo: `${logolavaca}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
  },
  radiocomas: {
    page: "Radio Comas",
    backgroundImage: "",
    logo: `${logoradiocomas}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
  },
  vivafm: {
    page: "Viva FM",
    backgroundImage: "",
    logo: `${logovivafm}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
  },
  exitosa: {
    page: "Radio Exitosa",
    backgroundImage: "",
    logo: `${logoexitosa}`,
    backgroundColor: "linear-gradient(to left, #000 0%, #000 100%)",
  },
  ondavip: {
    page: "Onda cero Vip",
    backgroundImage: "",
    logo: `${logoondavip}`,
    backgroundColor: "radial-gradient(#452F11 30%, #170F01 100%)",
  },
  ondafeeling: {
    page: "Onda cero Feeling",
    backgroundImage: "",
    logo: `${logoondafeeling}`,
    backgroundColor: "radial-gradient(#960C88 30%, #260023 100%)",
  },
  ondaleyendas: {
    page: "Onda cero Leyendas",
    backgroundImage: `${fondoleyendas}`,
    logo: `${logoondaleyedas}`,
    backgroundColor: "radial-gradient(#452F11 30%, #170F01 100%)",
  },
};

export default radiosinfo;
