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
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confsenha, setConfsenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação simples dos campos
    if (!email || !senha || !confsenha) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    setLoading(true); // Inicia o estado de carregamento
    setErrorMessage(''); // Limpa mensagens anteriores

    // Faz a requisição para a API usando Axioss
    try {
      const response = await axios.post('/api/cadastro', { // Alterado para a rota da API
        email: email,
        senha: senha,
        confsenha: confsenha,
      });

      if (response.status === 201) { // Alterado para verificar o status 201
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
            <label htmlFor="email">E-mail:</label>
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
            <label htmlFor="senha">Senha:</label>
            <Input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="conf-senha">Confirme a senha:</label>
            <Input
              type="password"
              id="conf-senha"
              name="conf-senha"
              placeholder="Confirme sua senha"
              value={confsenha}
              onChange={(e) => setConfsenha(e.target.value)}
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
