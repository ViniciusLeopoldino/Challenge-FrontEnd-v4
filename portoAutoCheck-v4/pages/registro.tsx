import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; 
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
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação simples dos campos
    if (!name || !email || !vehicle) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    setLoading(true); // Inicia o estado de carregamento
    setErrorMessage(''); // Limpa mensagens anteriores

    // Faz a requisição para a API Java usando Axios
    try {
      const response = await axios.post('https://.../cadastro', { // incluir aqui a API de JAVA
        nome: name,
        email: email,
        veiculo: vehicle,
      });

      if (response.status === 200) {
        // Se o cadastro for bem-sucedido, redireciona para a página de login
        router.push('/');
      } else {
        // Se a API retornar um erro, exibe a mensagem de erro
        setErrorMessage('Erro ao realizar o cadastro. Por favor, tente novamente.');
      }
    } catch (error) {
      // Em caso de erro na requisição
      setErrorMessage('Falha na comunicação com o servidor.');
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <h1>Registro</h1>
        <Form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome:</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              //required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail:</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="vehicle">Veículo:</label>
            <Input
              type="text"
              id="vehicle"
              name="vehicle"
              placeholder="Veículo"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              //required
            />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <div className={styles.buttonGroup}>
            <Button type="submit" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar'}
            </Button>
            <Button type="button" onClick={() => router.push('/')}>
              Voltar
            </Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default Registro;
