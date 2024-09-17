import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import styles from '../styles/pages/InitialStyles.module.css'; 

const ResetSenha: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Redireciona para a página de login
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Recuperar Senha</h1>
      </header>
      <main className={styles.main}>
        <Form onSubmit={() => { /* Adicione sua lógica de envio aqui */ }}>
          <div className={styles.inputGroup}>
            <Input type="email" id="email" name="email" placeholder="E-mail" />
          </div>
          <div className={styles.inputGroup}>
            <Input type="text" id="cpf" name="cpf" placeholder="CPF" />
          </div>
          <div className={styles.inputGroup}>
            <Input type="password" id="new-password" name="new-password" placeholder="Nova Senha" />
          </div>
          <div className={styles.buttonGroup}>
            <Button type="submit">Enviar</Button>
            <Button type="button" onClick={handleBack}>Voltar</Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default ResetSenha;



