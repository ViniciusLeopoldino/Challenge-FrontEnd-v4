import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Form from '../src/components/Form/Form';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import styles from '../src/styles/pages/InitialStyles.module.css';

const Registro: React.FC = () => {
  const router = useRouter();

  // Estados para armazenar os valores dos inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação simples dos campos
    if (!name || !email || !vehicle) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    // Simula o sucesso do registro e redireciona para a página de login
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <h1>Registro</h1>
        <Form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <Input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <Input 
              type="text" 
              id="vehicle" 
              name="vehicle" 
              placeholder="Veículo" 
              value={vehicle} 
              onChange={(e) => setVehicle(e.target.value)} 
            />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Exibe mensagem de erro se houver */}
          <div className={styles.buttonGroup}>
            <Button type="submit">Registrar</Button>
            <Button type="button" onClick={() => router.push('/')}>Voltar</Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default Registro;
