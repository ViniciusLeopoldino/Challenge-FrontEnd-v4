import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from '../styles/pages/OficinaProxima.module.css';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const OficinaProxima: React.FC = () => {
  return (
    <>
    <Header title="Oficina Próxima" />
    <div className={styles.container}>
      <form>
        <label htmlFor="cep">Digite seu CEP:</label>
        <Input type="text" id="cep" name="cep" />
        <Button type="submit">Pesquisar</Button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.583415123054!2d-46.64520848530162!3d-23.568113684662074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b7470a7ad7%3A0x4e29aa67c2b4cb6a!2sAv.%20Lins%20de%20Vasconcelos%2C%20São%20Paulo%20-%20SP%2C%2015330-000!5e0!3m2!1spt-BR!2sbr!4v1631706394573!5m2!1spt-BR!2sbr"
        width="600"
        height="350"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <Button onClick={() => alert('Carregando GPS...')}>GPS</Button>
    </div>
    <Footer />
    </>
    
  );
};

export default OficinaProxima;
