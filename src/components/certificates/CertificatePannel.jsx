import React from 'react';

export const CertificatePannel = ({ image, file, title, description }) => {
  return (
    <div className="certificate__panel">
        <img className="certificate__img" src={image} alt={title} />
      <div className='p-5'>
        <h5 className="certificate__title">
          {title}
        </h5>
        <p className="certificate__description">
          {description}
        </p>
      </div>

      <div className='certificate_title_btn'>        
          <a href={file}  target="_blank" rel="noopener noreferrer" >
          <button >View Certifiacte</button></a>
        </div>

    </div>
  );
};
