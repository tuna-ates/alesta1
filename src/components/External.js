import React from "react";
import dart3 from "../icons/dart3.png";
import calendar2 from "../icons/calendar2.png";
import rocket3 from "../icons/rocket3.png";
import lamb from "../icons/lamb.png";
import "../styles/External.css";

const External = () => {
  return (
    <section id="external">
    <div>
      <h1 className="header-item">External Links and Videos</h1>
      <div className="image-grid">
        <div className="image-item">
          <img  src={dart3} alt="Dart" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                fontSize: 21,
              }}
            >
              Ondev Apps: <br />
              Mission and Vision
            </p>
          </div>
        </div>
        <div className="image-item">
          <img  src={calendar2} alt="Calendar" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                fontSize: 21,

              }}
            >
              How To <br />
              Request Leaves
            </p>
          </div>
        </div>
        <div className="image-item">
          <img  src={rocket3} alt="Rocket" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                fontSize: 21,
       
              }}
            >
              Employee Resource <br /> Groups (ERG) Portal
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
          marginTop: 50,
        }}
      >
        <img style={{ width: 20 }} src={lamb} alt="Lamb" />
      </div>

      <p
        style={{
          fontFamily: "Hammersmith One,sans-serif",
          fontWeight: "normal",
          fontSize: 12,
          margin: 0,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        TIP: ADD A LINK BY HIGHLIGHTING THE TEXT AND USING <br />
        THE LINK SYMBOL ON THE TOOLBAR.
      </p>
    </div>
    </section>
  );
};

export default External;
