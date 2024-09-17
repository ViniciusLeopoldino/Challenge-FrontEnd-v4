import React from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from '../styles/pages/FaleConosco.module.css';

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   alert('Mensagem enviada!');
// }

const FaleConosco: React.FC = () => {
  return (
    <>
    <Header title="Fale Conosco" />
    <div className={styles.container}>
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
