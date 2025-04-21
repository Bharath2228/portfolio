import React, { useState } from 'react';
import { CertificatePannel } from './CertificatePannel';
import "./certificates.css"
import awsCert from "../../assets/Certifiactes/AWS Training & Certification - Certificate of Completion - Bharath P.pdf";
import dataOrien from "../../assets/Certifiactes/Data_Science_Orientation_Badge20240324-29-sghinq.pdf"
import reactCert from "../../assets/Certifiactes/Developing Front End Apps with React.pdf"
import chatgpt from "../../assets/Certifiactes/Effective-ChatGPT-Prompt-Certificate.pdf"
import google from "../../assets/Certifiactes/Google Technical Support Fundamentals.pdf"
import maths from "../../assets/Certifiactes/Group-06-RIT MATHS_1.pdf"
import lab from "../../assets/Certifiactes/Lab view.pdf"
import python from "../../assets/Certifiactes/Python Programming.pdf"
import sql from "../../assets/Certifiactes/SQL with Microsoft SQL Server.pdf"
import whatData from "../../assets/Certifiactes/What is Data Science.pdf"
import VBA from "../../assets/Certifiactes/VB for Microsoft Excel.pdf"
import coursera_python from "../../assets/Certifiactes/Coursera Python.pdf"
import dataStruct from "../../assets/Certifiactes/Udemy C++.pdf"
import vlsiCert from "../../assets/Certifiactes/VLSI.pdf"
import cyberCert from "../../assets/Certifiactes/Cyber Pyhiscal Systems.pdf"
import tekCert from "../../assets/Certifiactes/TEKWARZZ.pdf"

export const Certificates = () => {
  const certificates = [
    {
      image: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      file: awsCert,
      title: "AWS Security Essentials",
      description: "AWS Training and Certification"
    },
    {
      image: "https://snu.edu.in/site/assets/files/14223/38515.1600x0.webp",
      file: vlsiCert,
      title: "VLSI Design Gates to IC's (Workshop)",
      description: "Ramaiah Institute of Technology"
    },
    {
      image: "https://assets.everspringpartners.com/dims4/default/03f1dd6/2147483647/strip/true/crop/476x250+72+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Ffb%2F75%2F1819f4ee4ed3ab19703fa980776f%2F19344-seattlemsba-introtopython.jpg",
      file: python,
      title: "Python Programming",
      description: "O'Reilly"
    },
    {
      image: "https://bigblue.academy/images/thumb/blog/what-is-sql-and-how-does-it-work-(2023)/sql-1200x630.jpg",
      file: sql,
      title: "SQL with Microsoft SQL Server",
      description: "O'Reilly"
    },
    {
      image: "https://www.spiralytics.com/wp-content/uploads/2022/10/Google-Helpful-Content-Update1-1200x630.jpg",
      file: google,
      title: "Technical Support Fundamentals",
      description: "Coursera"
    },
    {
      image: "https://cdn.sanity.io/images/8edntncj/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png",
      file: reactCert,
      title: "Front End Apps with React",
      description: "IBM"
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:1400/1*J38nYZU7gzu-4lQmtjlSUw.jpeg",
      file: dataStruct,
      title: "Data Structures & Algorithms Essentials using C++ (2022)",
      description: "Udemy"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFNsBbXzyyJtw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697039142374?e=2147483647&v=beta&t=cix12BAjTyqGjcSLnFXUgySRWNbOnFcHQMHaUEOJmSA",
      file: cyberCert,
      title: "Cyber Physical Systems",
      description: "IEEE Seminar - Ramaiah Institute of Technology"
    },
    {
      image: "https://amtrustfinancial.com/getmedia/6e3ee407-025d-4716-8f6a-79dd7df03b4c/GettyImages-1172324608-2023-PLUS-Symposium-for-D-O-1200-x-630-min.jpg",
      file: tekCert,
      title: "National Level Technical Symposium",
      description: "TEKWARZZ - P.S.V College of Engineering"
    },
    {
      image: "https://www.datascience.movie/wp-content/uploads/2019/09/Documentary-Title-Facebook-1200x630.jpg",
      file: dataOrien,
      title: "Data Science Orientation",
      description: "IBM"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRQKP9pRkKKsSY6lQEgDo69k-s-vF7aB3cA&s",
        file: chatgpt,
        title: "Effective ChatGPT Prompts",
        description: "O'Reilly"
      },
      {
        image: "https://ict-enews.net/wp-content/uploads/2020/02/0210-VBA-1200x630.jpg",
        file: VBA,
        title: "VB for Microsoft Excel",
        description: "O'Reilly"
      },
      {
        image: "https://sloanreview.mit.edu/wp-content/uploads/2020/06/GEN-Camm-Recession-Economy-Analytics-Data-Scientists-2400x1260-1-1200x630.jpg",
        file: whatData,
        title: "What is Data Science?",
        description: "IBM"
      },
      {
        image: "https://cdn.stackoverflow.co/images/jo7n4k8s/production/885690a35f19242cd2ac198e23283698d38c6a59-1200x630.png?w=1200&h=630&auto=format&dpr=2",
        file: coursera_python,
        title: "Programming for Everybody (Getting Started with Python)",
        description: "University of Michigan"
      },
      {
        image: "https://nirachamberlain.com/wp-content/uploads/2023/12/Untitled-2023-12-22T170005.067.jpg",
        file: maths,
        title: "Mathematical Perspectives on Computational Science and Engineering",
        description: "Ramaiah Institute of Technology"
      },
      {
        image: "https://logodix.com/logo/1983640.png",
        file: lab,
        title: "Industrial Automation Based Professional Training Program",
        description: "LabVIEW"
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
