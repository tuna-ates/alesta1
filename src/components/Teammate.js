import React from "react";
import people1 from "../icons/people1.png";
import people2 from "../icons/people2.png";
import people3 from "../icons/people3.png";
import people4 from "../icons/people4.png";
import "../styles/Teammate.css";

const Teammate = () => {
  return (
    <section id="teammate">
    <div style={{ backgroundColor: '#ffb923' }}>
      <h1 className="header-item-teammate">Your Teammates</h1>
      <div className="image-grid-teammate">
        <div className="image-item-teammate">
          <img src={people1} alt="Dart" />
          <div className="text-item">
            <p style={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: 21 }}>
              Our Client <br /> List
            </p>
          </div>
        </div>
        <div className="image-item-teammate">
          <img src={people2} alt="Calendar" />
          <div className="text-item">
            <p style={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: 21 }}>
              The Marketing <br /> Manager's Kit
            </p>
          </div>
        </div>
        <div className="image-item-teammate">
          <img src={people3} alt="Rocket" />
          <div className="text-item">
            <p style={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: 21 }}>
              For Newbies: <br />
              Who We Are and <br />
              What We Do
            </p>
          </div>
        </div>
        <div className="image-item-teammate">
          <img src={people4} alt="Rocket" />
          <div className="text-item">
            <p style={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: 21 }}>
              For Newbies: <br />
              Who We Are and <br />
              What We Do
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Teammate;