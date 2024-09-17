import React from 'react';
import styles from './Map.module.css';

interface MapProps {
  src: string;
}

const Map: React.FC<MapProps> = ({ src }) => {
  return (
    <iframe
      className={styles.map}
      src={src}
      width="600"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default Map;
