import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Form from '../src/components/Form/Form';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import styles from '../src/styles/pages/InitialStyles.module.css'; 

const ResetSenha: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação simples para garantir que todos os campos estão preenchidos
    if (!email || !cpf || !newPassword) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de envio do formulário e redefinição de senha
    console.log("E-mail:", email, "CPF:", cpf, "Nova Senha:", newPassword);

    // Redireciona para a página de login após o envio bem-sucedido
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Recuperar Senha</h1>
      </header>
      <main className={styles.main}>
        <Form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <Input 
              type="email" 
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
              id="cpf" 
              name="cpf" 
              placeholder="CPF" 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input 
              type="password" 
              id="new-password" 
              name="new-password" 
              placeholder="Nova Senha" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Exibe mensagem de erro se houver */}
          <div className={styles.buttonGroup}>
            <Button type="submit">Enviar</Button>
            <Button type="button" onClick={() => router.push('/')}>Voltar</Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default ResetSenha;




