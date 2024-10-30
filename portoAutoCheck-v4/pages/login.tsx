import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../src/styles/pages/InitialStyles.module.css';
import loginImage from '../src/assets/Logo_PortoSeguro.svg'; 
import Button from '../src/components/Button/Button';
import Form from '../src/components/Form/Form';
import Input from '../src/components/Input/Input';
import Image from 'next/image';
import axios from 'axios';

const Login: React.FC = () => {
  const router = useRouter();

  // Estado para armazenar o e-mail e a senha inseridos pelo usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Adiciona estado de carregamento

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(''); // Limpa mensagens de erro anteriores
    setLoading(true); // Inicia o estado de carregamento

    // Faz a requisição para a API para validar as credenciais
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Se o login for bem-sucedido, redireciona para a página de perfil
        router.push('/perfil');
      } else {
        // Se a API retornar um erro, exibe a mensagem de erro
        setErrorMessage('E-mail ou senha inválidos. Tente novamente.');
      }
    } catch (error) {
      // Em caso de erro na requisição
      setErrorMessage('E-mail ou senha inválidos. Tente novamente.');
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={loginImage} alt="Login" className={styles.loginImage} width={100} height={100} />
      </header>
      <main className={styles.main}>
        <Form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Usuário:</label>
            <Input 
              id="username" 
              name="username" 
              placeholder='email@email.com.br' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha:</label>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              placeholder='********' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Exibe erro, se houver */}
          <div className={styles.buttonGroup}>
            <Button type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            <Link href="/registro">
              <Button type="button">Registrar</Button>
            </Link>
            <br />
            <Link href="/reset-senha">
              <Button type="button">Recuperar Senha</Button>
            </Link>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default Login;
