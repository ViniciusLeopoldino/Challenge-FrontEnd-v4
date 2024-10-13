// src/components/Layout/Layout.tsx
import React from 'react';
import MenuLateral from '../MenuLateral/MenuLateral'; 
import styles from './Layout.module.css'; 
import Head from 'next/head'; // Importando o Head do Next.js

interface LayoutProps {
  children: React.ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Seu Título Aqui</title>
        <meta name="description" content="Descrição do seu site." />
      </Head>
      <div className={styles.container}>
        <MenuLateral />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
