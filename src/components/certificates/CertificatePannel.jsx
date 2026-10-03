import React from 'react';

export const CertificatePannel = ({ file, title, description }) => {
  return (
    <article className="certificate__panel">
      <div>
        <h3 className="certificate__title">
          {title}
        </h3>
        <p className="certificate__description">
          {description}
        </p>
      </div>

      <a href={file} target="_blank" rel="noopener noreferrer" className="certificate__link">
        View certificate
        <i className="bx bx-right-arrow-alt certificate__link-icon" aria-hidden="true"></i>
      </a>
    </article>
  );
};
