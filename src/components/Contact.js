import React from "react";
import person from "../icons/person.png";
import tech_support from "../icons/tech_support.png";
import company_helpdesk2 from "../icons/company_helpdesk2.png";
import report_incident2 from "../icons/report_incident2.png";
import hr_concerns from "../icons/hr_concerns.png";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
    <div className="container">
      <div className="left-side">
        <h1 className="header-size">
          Don't hesitate <br /> to contact us
        </h1>

        <div className="contact-item">
          <img src={tech_support} alt="Tech Support" />
          <div className="contact-info">
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: 11,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              TECH SUPPORT
            </p>
            <h3 style={{ fontFamily: "Open Sans", fontSize: 21, margin: 0 }}>
              555-555-555
            </h3>
          </div>
        </div>

        <div className="contact-item">
          <img src={company_helpdesk2} alt="Company Helpdesk" />
          <div className="contact-info">
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: 11,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              COMPANY HELPDESK
            </p>
            <h3 style={{ fontFamily: "Open Sans", fontSize: 21, margin: 0 }}>
              555-555-555
            </h3>
          </div>
        </div>

        <div className="contact-item">
          <img src={hr_concerns} alt="HR Concerns" />
          <div className="contact-info">
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: 11,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              HR CONCERNS
            </p>
            <h3 style={{ fontFamily: "Open Sans", fontSize: 21, margin: 0 }}>
              555-555-555
            </h3>
          </div>
        </div>

        <div className="contact-item">
          <img src={report_incident2} alt="Report Incident" />
          <div className="contact-info">
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: 11,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              REPORT INCIDENT
            </p>
            <h3 style={{ fontFamily: "Open Sans", fontSize: 21, margin: 0 }}>
              555-555-555
            </h3>
          </div>
        </div>
      </div>

      <div className="right-side">
        <img src={person} alt="Deneme" />
      </div>
    </div>
    </section>
  );
};

export default Contact;
