import React, { useState } from "react";
import arrowRed from "../../Images/link_red_arrow.png";
import "../../Styles/Departments.css";
import { Link } from "react-router-dom";
const Departments = () => {
  const [changeArrow, setChangeArrow] = useState(false);
  return (
    <div className="departments">
      <div className="container">
        <div className="departments__con">
          <div className="departments__box1">
            <h2>Отделы</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper senectus gravida amet, pellentesque egestas. Nisl
              dignissim nulla nunc nulla a volutpat in dapibus nec. Orci eu enim
              vitae mollis sit commodo nullam auctor. Purus.
            </p>
          </div>
          <div className="departments__box2">
            <div className="departments__box2__child">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
                <Link to="/depart" className="link">
                Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
              <Link to="/depart" className="link">
                Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
              <Link to="/depart" className="link">
                Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
              <Link to="/depart" className="link">
                Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="departments__btn">
            <button>View more</button>
        </div>
    </div>
</div>
  );
};

export default Departments;