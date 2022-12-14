import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import Affair from "./Pages/Affair/Affair";
import Partners from "./Pages/Partners/Partners";
import Help from "./Pages/Help/Help";
import Kontact from "./Pages/Kontact/Kontact";
import NewCard from "./Pages/News/NewCard";
import Depart from "./Pages/Depart/Depart";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsRu from "./locale/translationsRu";
import translationsUz from "./locale/translationsUz";
import { useEffect, useState } from "react";
import Otdel from "./Pages/Otdel/Otdel";
import Otdel2 from "./Pages/Otdel2/Otdel2";
import Otdel3 from "./Pages/Otdel3/Otdel3";
import Otdel4 from "./Pages/Otdel4/Oidel4";
import Affair2 from "./Pages/Affair2/Affair2";
import Affair3 from "./Pages/Affair3/Affair3";
import Affair1 from "./Pages/Affair1/Affair1";
import Affair4 from "./Pages/Affair4/Affair4";
import Card from "./Pages/Card/Card";


i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationsRu },
    uz: { translation: translationsUz },
  },
  lng: "ru",
  fallbackLng: "ru",
});

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [innovation, setInnovation] = useState({});
  const [otdelInfo, setOtdelInfo] = useState({});
  const [cardInfo, setCardInfo] = useState({});
  const [tampus, setTempus] = useState({});
  const [language, setLanguage] = useState('ru')
  const exchangeInfo = (value) => {
    setInnovation(value)
  }
  const changeLang = (value) => {
    i18n.changeLanguage(value) 
    setLanguage(value)
  }
  const catchDepart = (value) =>{
    setOtdelInfo(value)
  }
  const catchDepartTempus = (value) =>{
    setTempus(value)
  }
  const changeInfoLocal = (value)=>{
    setCardInfo(value);
  }
  return (
    <>
      <Navbar changeLang={changeLang} />
      <Routes>
        <Route path="/" element={<Home catchDepart={catchDepart} catchDepartTempus={catchDepartTempus} />} />
        <Route path="news" element={<News exchangeInfo={exchangeInfo} />}/>
        <Route path="news/:id" element={<NewCard innovation={innovation}/>} />
        <Route path="services" element={<Affair />} />
        <Route path="services/1" element={<Affair1 />} />
        <Route path="services/2" element={<Affair2 />} />
        <Route path="services/3" element={<Affair3 />} />
        <Route path="services/4" element={<Affair4 />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Kontact />} />
        <Route path="partners" element={<Partners />} />
        <Route path="help" element={<Help />} />
        <Route path="depart" element={<Depart changeInfoLocal={changeInfoLocal}/>} />
        <Route path="depart/1" element={<Otdel changeInfoLocal={changeInfoLocal}/>} />
        <Route path="depart/1/:id" element={<Card cardInfo={cardInfo}/>} />
        <Route path="depart/2" element={<Otdel2 changeInfoLocal={changeInfoLocal} otdelInfo={otdelInfo}/>} />
        <Route path="depart/2/:id" element={<Card cardInfo={cardInfo} />} />
        <Route path="depart/3" element={<Otdel3 changeInfoLocal={changeInfoLocal} otdelInfo={otdelInfo} />} />
        <Route path="depart/4" element={<Otdel4 changeInfoLocal={changeInfoLocal} otdelInfo={otdelInfo} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
