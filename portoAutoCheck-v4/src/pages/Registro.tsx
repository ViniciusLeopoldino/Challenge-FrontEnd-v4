import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import styles from '../styles/pages/InitialStyles.module.css';

const Registro: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Redireciona para a página de login
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        
      </header>
      <main className={styles.main}>
      <h1>Registro</h1>
        <Form onSubmit={() => { /* Adicione sua lógica de envio aqui */ }}>
          <div className={styles.inputGroup}>
            <Input type="text" id="name" name="name" placeholder="Nome" />
          </div>
          <div className={styles.inputGroup}>
            <Input type="text" id="email" name="email" placeholder="E-mail" />
          </div>
          <div className={styles.inputGroup}>
            <Input type="text" id="vehicle" name="vehicle" placeholder="Veículo" />
          </div>
          <div className={styles.buttonGroup}>
            <Button type="submit">Registrar</Button>
            <Button type="button" onClick={handleBack}>Voltar</Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default Registro;
