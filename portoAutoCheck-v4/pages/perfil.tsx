import React, { useState } from 'react';
import Header from '../src/components/Header/Header';
import Button from '../src/components/Button/Button';
import Footer from '../src/components/Footer/Footer';
import MenuLateral from '../src/components/MenuLateral/MenuLateral';
import Form from '../src/components/Form/Form';
import styles from '../src/styles/pages/SharedForm.module.css';

const Perfil: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: 'João da Silva',
    cpf: '132.123.321-10',
    telefone: '(11) 9 7876-2300',
    cep: '03044-051',
    modelo: 'Fiat Fastback',
    ano: '2024',
    placa: 'ABC1D23',
    cor: 'Vermelho',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false); 
  };

  return (
    <>
      <Header title="Perfil" />
      <div className={styles.container}>
        <MenuLateral />
        <Form onSubmit={handleSubmit}>
          <div className={styles.content}>
            <div className={styles.dataContainer}>
              <div className={styles.inputGroup}>
                <h2>Dados Pessoais</h2>
                <p>Nome:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="nome" value={userData.nome} onChange={handleChange} />
                  ) : (
                    userData.nome
                  )}
                </span>
                <p>CPF:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="cpf" value={userData.cpf} onChange={handleChange} />
                  ) : (
                    userData.cpf
                  )}
                </span>
                <p>Telefone:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="telefone" value={userData.telefone} onChange={handleChange} />
                  ) : (
                    userData.telefone
                  )}
                </span>
                <p>CEP:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="cep" value={userData.cep} onChange={handleChange} />
                  ) : (
                    userData.cep
                  )}
                </span>
              </div>
              <div className={styles.inputGroup}>
                <h2>Dados do Veículo</h2>
                <p>Modelo:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="modelo" value={userData.modelo} onChange={handleChange} />
                  ) : (
                    userData.modelo
                  )}
                </span>
                <p>Ano:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="ano" value={userData.ano} onChange={handleChange} />
                  ) : (
                    userData.ano
                  )}
                </span>
                <p>Placa:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="placa" value={userData.placa} onChange={handleChange} />
                  ) : (
                    userData.placa
                  )}
                </span>
                <p>Cor:</p>
                <span className={styles.inputField}>
                  {isEditing ? (
                    <input name="cor" value={userData.cor} onChange={handleChange} />
                  ) : (
                    userData.cor
                  )}
                </span>
              </div>
            </div>
            <div className={styles.buttonGroup}>
            <Button type="button" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Salvar' : 'Editar'}
            </Button>
            </div>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;