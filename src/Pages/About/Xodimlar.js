import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import xodim__1 from "../../Images/about/Avzal.png";
import xodim__2 from "../../Images/about/Tohir.jpg";
import xodim__3 from "../../Images/about/Qobul.jpg";

const Xodimlar = () => {
  const { t } = useTranslation();

  const arr = [
    {
      name: t("direktor__name__1"),
      image: "https://uzbekinvest.uz/uploads/employee/1.jpg",
      position: t("direktor__position__1"),
      phone__1: t("direktor__phone"),
      phone__2: "(78) 120 03 51",
      reception__day__1: t("direktor__reception__day"),
      reception__day__2: t("direktor__reception__day__1"),
      email__1: t("direktor__email"),
      email__2: "assist@uzbekinvest.uz",
      content__1: t("direktor__content__1__1"),
      content__2: t("direktor__content__1__2"),
      data__aos:"fade-left",
      img:xodim__1
    },
    {
      name: t("direktor__name__2"),
      image: "https://uzbekinvest.uz/uploads/employee/1.jpg",
      position: t("direktor__position__2"),
      phone__1: t("direktor__phone"),
      phone__2: "(78) 120 03 51",
      reception__day__1: t("direktor__reception__day"),
      reception__day__2: t("direktor__reception__day__2"),
      email__1: t("direktor__email"),
      email__2: "assist@uzbekinvest.uz",
      content__1: t("direktor__content__2__1"),
      content__2: t("direktor__content__2__2"),
      data__aos:"fade-right",
      img:xodim__2
    },
    {
      name: t("direktor__name__3"),
      image: "https://uzbekinvest.uz/uploads/employee/1.jpg",
      position: t("direktor__position__3"),
      phone__1: t("direktor__phone"),
      phone__2: "(78) 120 03 51",
      reception__day__1: t("direktor__reception__day"),
      reception__day__2: t("direktor__reception__day__3"),
      email__1: t("direktor__email"),
      email__2: "assist@uzbekinvest.uz",
      content__1: t("direktor__content__3__1"),
      content__2: t("direktor__content__3__2"),
      data__aos:"fade-left",
      img:xodim__3
    },
  ];
  return (
    <ul className="xodimlar__ul">
      {arr.map((el) => {
        return (
          <li key={el.name} data-aos={el.data__aos}>
            <h3 className="text__h3">{el.name}</h3>
            <div className="position__box">
              <div className="position__box__1">
                <div>
                  <p className="positon__positon">{el.position}</p>
                  <p><span>{el.phone__1}</span>{el.phone__2}</p>
                  <p><span>{el.reception__day__1}</span>{el.reception__day__2}</p>
                </div>
              </div>
              <div className="position__box__2">
                <p><span>{el.email__1}</span>{el.email__2}</p>
                <p>{el.content__1}</p>
                <p>{el.content__2}</p>
              </div>
            </div>
            <div className="div__img">
              <img src={el.img} alt="" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Xodimlar;
