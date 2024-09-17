import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
// import Form from '../components/Form/Form';
import styles from '../styles/pages/Perfil.module.css';

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

  return (
    <>
    <Header title="Perfil" /> 
    
      <div className={styles.container}>
        
        <div className={styles.inputGroup}>
          <h2>Dados Pessoais</h2>
          <p>Nome: {isEditing ? <input name="nome" value={userData.nome} onChange={handleChange} /> : userData.nome}</p>
          <p>CPF: {isEditing ? <input name="cpf" value={userData.cpf} onChange={handleChange} /> : userData.cpf}</p>
          <p>Telefone: {isEditing ? <input name="telefone" value={userData.telefone} onChange={handleChange} /> : userData.telefone}</p>
          <p>CEP: {isEditing ? <input name="cep" value={userData.cep} onChange={handleChange} /> : userData.cep}</p>
        </div>
        <div className={styles.inputGroup}>  
          <h2>Dados do Veículo</h2>
          <p>Modelo: {isEditing ? <input name="modelo" value={userData.modelo} onChange={handleChange} /> : userData.modelo}</p>
          <p>Ano: {isEditing ? <input name="ano" value={userData.ano} onChange={handleChange} /> : userData.ano}</p>
          <p>Placa: {isEditing ? <input name="placa" value={userData.placa} onChange={handleChange} /> : userData.placa}</p>
          <p>Cor: {isEditing ? <input name="cor" value={userData.cor} onChange={handleChange} /> : userData.cor}</p>
        </div> 

        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Salvar' : 'Editar'}
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
