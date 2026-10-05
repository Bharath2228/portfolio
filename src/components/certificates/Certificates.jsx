import React, { useState } from 'react';
import { CertificatePannel } from './CertificatePannel';
import "./certificates.css"
import awsCert from "../../assets/Certifiactes/AWS Training & Certification - Certificate of Completion - Bharath P.pdf";
import reactCert from "../../assets/Certifiactes/Developing Front End Apps with React.pdf"
import google from "../../assets/Certifiactes/Google Technical Support Fundamentals.pdf"
import python from "../../assets/Certifiactes/Python Programming.pdf"
import dataStruct from "../../assets/Certifiactes/Udemy C++.pdf"
import cyberCert from "../../assets/Certifiactes/Cyber Pyhiscal Systems.pdf"
import tekCert from "../../assets/Certifiactes/TEKWARZZ.pdf"

export const Certificates = () => {
  const certificates = [
    {
      file: reactCert,
      title: "Front End Apps with React",
      description: "IBM"
    },
    {
      file: cyberCert,
      title: "Cyber Physical Systems",
      description: "IEEE Seminar - Ramaiah Institute of Technology"
    },
    {
      file: awsCert,
      title: "AWS Security Essentials",
      description: "AWS Training and Certification"
    },
    {
      file: google,
      title: "Technical Support Fundamentals",
      description: "Coursera"
    },
    {
      file: python,
      title: "Python Programming",
      description: "O'Reilly"
    },
    {
      file: dataStruct,
      title: "Data Structures & Algorithms Essentials using C++ (2022)",
      description: "Udemy"
    },
    {
      file: tekCert,
      title: "National Level Technical Symposium",
      description: "TEKWARZZ - P.S.V College of Engineering"
    }
  ];

  const [visibleCertificates, setVisibleCertificates] = useState(certificates.slice(0, 5));
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    if (showAll) {
      setVisibleCertificates(certificates.slice(0, 5));
    } else {
      setVisibleCertificates(certificates);
    }
    setShowAll(!showAll);
  };

  return (
    <section className="section" id='certificates'>
      <header className="section__head">
        <h2 className="section__title">Certificates & Achievements</h2>
      </header>
      <div className="certificates__container container grid">
        {visibleCertificates.map((cert, index) => (
          <CertificatePannel
            key={index}
            file={cert.file}
            title={cert.title}
            description={cert.description}
          />
        ))}
        <div className="view-more-container">
          <button type="button" onClick={handleViewMore} className="view-more-btn" aria-expanded={showAll}>
            {showAll ? "Show Less" : "Show More"}
            <i className={`bx ${showAll ? "bx-chevron-up" : "bx-chevron-down"}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

    </section>
  );
};
