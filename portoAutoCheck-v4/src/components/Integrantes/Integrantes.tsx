import React from 'react';
import styles from './Integrantes.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface IntegranteProps {
  name: string;
  rm: string;
  image: string;
  github: string;
  linkedin: string;
}

const Integrantes: React.FC<{ integrantes: IntegranteProps[] }> = ({ integrantes }) => {
  return (
    <div className={styles.container}>
      {integrantes.map((integrante) => (
        <div key={integrante.rm} className={styles.integrante}>
          <img src={integrante.image} alt={integrante.name} />
          <h2>{integrante.name}</h2>
          <p>RM:{integrante.rm}</p>
          <div className={styles.socialIcons}>
            <a href={integrante.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Integrantes;
