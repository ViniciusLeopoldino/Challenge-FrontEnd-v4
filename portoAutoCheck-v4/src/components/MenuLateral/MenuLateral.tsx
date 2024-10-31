import React, { useState } from 'react';
import Link from 'next/link'; // Importando o Link do Next.js
import styles from '../MenuLateral/MenuLateral.module.css'; 
import logo from '../img/Logo_PortoSeguro_menu.svg'; 
import Image from 'next/image';

const MenuLateral: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${styles.menuLateral} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </div>
        <ul className={styles.menuItems}>
          <li><Link href="/perfil">Perfil</Link></li> 
          <li><Link href="/porto-auto-check">Porto Auto Check</Link></li>
          <li><Link href="/manutencao">Manutenção</Link></li>
          <li><Link href="/oficina-proxima">Oficina Próxima</Link></li>
          <li><Link href="/fale-conosco">Fale Conosco</Link></li>
          <li><Link href="/">Sair</Link></li>
          <br />
          <li><Link href="/integrantes">Integrantes</Link></li>
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
