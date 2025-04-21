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
      image: "https://cdn.sanity.io/images/8edntncj/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png",
      file: reactCert,
      title: "Front End Apps with React",
      description: "IBM"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFNsBbXzyyJtw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697039142374?e=2147483647&v=beta&t=cix12BAjTyqGjcSLnFXUgySRWNbOnFcHQMHaUEOJmSA",
      file: cyberCert,
      title: "Cyber Physical Systems",
      description: "IEEE Seminar - Ramaiah Institute of Technology"
    },
    {
      image: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      file: awsCert,
      title: "AWS Security Essentials",
      description: "AWS Training and Certification"
    },
    {
      image: "https://www.spiralytics.com/wp-content/uploads/2022/10/Google-Helpful-Content-Update1-1200x630.jpg",
      file: google,
      title: "Technical Support Fundamentals",
      description: "Coursera"
    },
    {
      image: "https://assets.everspringpartners.com/dims4/default/03f1dd6/2147483647/strip/true/crop/476x250+72+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Ffb%2F75%2F1819f4ee4ed3ab19703fa980776f%2F19344-seattlemsba-introtopython.jpg",
      file: python,
      title: "Python Programming",
      description: "O'Reilly"
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:1400/1*J38nYZU7gzu-4lQmtjlSUw.jpeg",
      file: dataStruct,
      title: "Data Structures & Algorithms Essentials using C++ (2022)",
      description: "Udemy"
    },
    {
      image: "https://amtrustfinancial.com/getmedia/6e3ee407-025d-4716-8f6a-79dd7df03b4c/GettyImages-1172324608-2023-PLUS-Symposium-for-D-O-1200-x-630-min.jpg",
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
      <h2 className="section__title">Certificates & Achievements</h2>
      <span className="section__subtitle">My Accomplishments</span>
      <div className="certificates__container container grid">
        {visibleCertificates.map((cert, index) => (
          <CertificatePannel
            key={index}
            image={cert.image}
            file={cert.file}
            title={cert.title}
            description={cert.description}
          />
        ))}
        <div className="view-more-container">
          <p onClick={handleViewMore} className="view-more-btn">
            {showAll ? "Show Less ⬅️" : "Show More ➡️"}
          </p>
        </div>
      </div>

    </section>
  );
};
