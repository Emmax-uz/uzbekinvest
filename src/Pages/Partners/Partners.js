import React from "react";
import Slider from "../../components/Home/Slider";
import "./Partners.css";
import arrowRed from "../../Images/link_red_arrow.png";
import ArrowRed from "../../Images/arrow__RED.png";
const Partners = () => {
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__box">
          <h2 className="partners__h2">Партнерам</h2>
          <div className="partners__box__1">
            <div className="partners__box__1__info">
              <h3>Основными преимуществами компании являются</h3>
              <ul>
                <li>
                  • Более чем 21-летний опыт работы в сфере предоставления услуг
                  ассистанс - технической, медицинской и юридической помощи.
                </li>
                <li>
                  •Круглосуточный диспетчерский центр, оснащенный
                  IP-телефонией,интегрированной с уникальной базой данных,
                  запись телефонных разговоров.
                </li>
                <li>
                  • Работа ведется круглосуточно, без перерывов,выходных и
                  праздничных дней.
                </li>
                <li>
                  • Профессионально подготовленный кадровый состав, включая
                  высококвалифицированных врачей и юристов.
                </li>
                <li>• Организация госпитализации.</li>
                <li>• Организация репатриации.</li>
                <li>
                  Contact us <img src={arrowRed} alt="arrow_red" />
                </li>
              </ul>
            </div>
            <div className="partners__box__1__img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="partners__box__div">
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
          <div className="partners__div">
            <h3>Quisque mauris pretium urna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut dictum
              ipsum eu massa nullam. Sed commodo elementum mauris non mauris sem
              duis. Odio dictum viverra purus volutpat.
            </p>
            <div>
              <img src={ArrowRed} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Partners;