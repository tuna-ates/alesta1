import React from "react";
import client_list3 from "../icons/client_list3.png";
import marketing3 from "../icons/marketing3.png";
import newbies3 from "../icons/newbies3.png";
import lamb from "../icons/lamb.png";
import "../styles/Resource.css";

const Resource = () => {
  return (
    <section id="resource">
    <div>
      <h1 className="header-item-resource">Resource Kits and Documents</h1>
      <div className="image-grid-resource">
        <div className="image-item-resource">
          <img  src={client_list3} alt="Dart" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                fontSize: 21,
              }}
            >
              Our Client <br /> List
            </p>
          </div>
        </div>
        <div className="image-item-resource">
          <img src={marketing3} alt="Calendar" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                fontSize: 21,
          
              }}
            >
              The Marketing <br /> Manager's Kit
            </p>
          </div>
        </div>
        <div className="image-item-resource">
          <img  src={newbies3} alt="Rocket" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                fontSize: 21,
      
              }}
            >
              For Newbies: <br />
              Who We Are and <br />
              What We Do
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

export default Resource;