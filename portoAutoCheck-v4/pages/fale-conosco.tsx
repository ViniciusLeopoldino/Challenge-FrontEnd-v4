import React from 'react';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import styles from '../src/styles/pages/FaleConosco.module.css';
import MenuLateral from '../src/components/MenuLateral/MenuLateral';

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   alert('Mensagem enviada!');
// }

const FaleConosco: React.FC = () => {
  return (
    <>
    <Header title="Fale Conosco" />
    <div className={styles.container}>
    <MenuLateral /> {/* Adicionando o Menu Lateral aqui */}
      <div>
        <Input type="text" id="nome" name="nome" placeholder="Nome" />
        <br />
        <Input type="email" id="email" name="email" placeholder="E-mail" />
        <textarea id="mensagem" name="mensagem" placeholder="Deixe sua mensagem" />
        <Button type="submit">Enviar</Button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FaleConosco;
