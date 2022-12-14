import React, { useEffect } from "react";
import "../../Styles/Tempus.css";
import { useLocation, useNavigate } from "react-router-dom";
import firstImg from "../../Images/tempus/medical__assistance.jpg";
import secondImg from "../../Images/tempus/legal__assistance.jpg";
import thirdtImg from "../../Images/tempus/technical__assistance.jpg";
import fourImg from "../../Images/tempus/personal__assistance.webp";
import { useTranslation } from "react-i18next";

export default function Tempus({catchDepartTempus}) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const changeLocal = (value) =>{
    catchDepartTempus(value);
    navigate(`services/${value.id}`)
  }
  const tempus = [
    {
      id: 1,
      image: firstImg,
      title: t("medical__assistance"),
      info: t("medical__assistance__info"),
    },
    {
      id: 2,
      image: secondImg,
      title: t("legal__assistance"),
      info: t("legal__assistance__info"),
    },
    {
      id: 3,
      image: thirdtImg,
      title: t("technical__assistance"),
      info: t("legal__assistance__info"),
    },
    {
      id: 4,
      image: fourImg,
      title: t("personal__assistance"),
      info: t("personal__assistance__info"),
    },
  ];
  return (
    <section className="Tempus">
      <div className="container">
        <div className="tempus">
          <h2 className="tempus-title">{t("services")}</h2>
          {tempus.map((element) => {
            return (
              <div className="tempus-info" key={element.id}>
                <div className="tempus-info__img">
                  <img src={element.image} alt="" data-aos="zoom-in"/>
                </div>
                <div className="tempus-info__card" data-aos="fade-left">
                  <div >
                    <h3 className="tempus-info__card-title">{element.title}</h3>
                    <p className="tempus-info__card-text">{element.info}</p>
                  </div>
                  <button className="tempus-info__card-btn" onClick={()=>{changeLocal(element)}}>
                    {t("read__more__btn")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Link to="/services">
          <button className="view-more-btn">{t("view__more__btn")}</button>
        </Link> */}
      </div>
    </section>
  );
}
