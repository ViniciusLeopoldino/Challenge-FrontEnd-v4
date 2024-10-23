import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../src/styles/pages/InitialStyles.module.css';
import loginImage from '../src/assets/Logo_PortoSeguro.svg'; 
import Button from '../src/components/Button/Button';
import Form from '../src/components/Form/Form';
import Input from '../src/components/Input/Input';
import Image from 'next/image';

const Login: React.FC = () => {
  const router = useRouter();

  // Estado para armazenar o e-mail e a senha inseridos pelo usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Credenciais fake pré-definidas
  const fakeEmail = 'teste@email.com';
  const fakePassword = '123456';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação de login
    if (email === fakeEmail && password === fakePassword) {
      // Redireciona para a página de perfil se as credenciais estiverem corretas
      router.push('/perfil');
    } else {
      // Exibe mensagem de erro se as credenciais estiverem erradas
      setErrorMessage('E-mail ou senha inválidos. Tente novamente.');
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
            <Button type="submit">Entrar</Button>

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



// TODO: ABAIXO O CÓDIGO UTILIZANDO AXIOS PARA FAZER A REQUISIÇÃO PARA A API DE LOGIN

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import axios from 'axios'; // Adicionar o axios para requisições HTTP
// import styles from '../src/styles/pages/InitialStyles.module.css';
// import loginImage from '../src/assets/Logo_PortoSeguro.svg'; 
// import Button from '../src/components/Button/Button';
// import Form from '../src/components/Form/Form';
// import Input from '../src/components/Input/Input';
// import Image from 'next/image';

// const Login: React.FC = () => {
//   const router = useRouter();

//   // Estado para armazenar o e-mail e a senha inseridos pelo usuário
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       // Fazer o POST para a API de login
//       const response = await axios.post('http://.../login', {  // Inserir a URL da API de login de JAVA
//         email,
//         password
//       });

//       // Sucesso: Redireciona para a página de perfil
//       if (response.status === 200) {
//         // Supondo que você receba um token ou algum indicador de sucesso
//         const { token } = response.data; 

//         // Armazene o token no localStorage (ou outro método de armazenamento seguro)
//         localStorage.setItem('authToken', token);

//         // Redireciona para a página de perfil
//         router.push('/perfil');
//       }
//     } catch (error) {
//       // Exibe mensagem de erro se o login falhar
//       setErrorMessage('E-mail ou senha inválidos. Tente novamente.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <Image src={loginImage} alt="Login" className={styles.loginImage} width={100} height={100} />
//       </header>
//       <main className={styles.main}>
//         <Form onSubmit={handleSubmit}>
//           <div className={styles.inputGroup}>
//             <label htmlFor="username">Usuário:</label>
//             <Input 
//               id="username" 
//               name="username" 
//               placeholder='email@email.com.br' 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label htmlFor="password">Senha:</label>
//             <Input 
//               id="password" 
//               name="password" 
//               type="password" 
//               placeholder='********' 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//           </div>
//           {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Exibe erro, se houver */}
//           <div className={styles.buttonGroup}>
//             <Button type="submit">Entrar</Button>

//             <Link href="/registro">
//               <Button type="button">Registrar</Button>
//             </Link>
//             <br />
//             <Link href="/reset-senha">
//               <Button type="button">Recuperar Senha</Button>
//             </Link>
//           </div>
//         </Form>
//       </main>
//     </div>
//   );
// };

// export default Login;
