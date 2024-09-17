import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../MenuLateral/MenuLateral.module.css'; 
import logo from '../img/Logo_PortoSeguro_menu.svg'; 

const MenuLateral: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${styles.menuLateral} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={styles.menuItems}>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/porto-auto-check">Porto Auto Check</Link></li>
          <li><Link to="/manutencao">Manutenção</Link></li>
          <li><Link to="/oficina-proxima">Oficina Próxima</Link></li>
          <li><Link to="/fale-conosco">Fale Conosco</Link></li>
          <li><Link to="/">Sair</Link></li>
          <br />
          <li><Link to="/integrantes">Integrantes</Link></li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default MenuLateral;
