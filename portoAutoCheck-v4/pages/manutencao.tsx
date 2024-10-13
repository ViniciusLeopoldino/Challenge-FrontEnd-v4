import React, { useState } from 'react';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Button from '../src/components/Button/Button';
import styles from '../src/styles/pages/Manutencao.module.css';
import { useEffect } from 'react';
import MenuLateral from '../src/components/MenuLateral/MenuLateral';

const Manutencao: React.FC = () => {
  const [selectedMaintenance, setSelectedMaintenance] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleMaintenanceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaintenance(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    // console.log(selectedMaintenance, selectedDate);
    // console.log('Manutenção agendada com sucesso!');
    // console.log('Manutenção não agendada!');
  }, [selectedMaintenance, selectedDate]);

  return (
    <>
      <Header title='Manutenções'/>
      <main className={styles.main}>
      <MenuLateral /> {/* Adicionando o Menu Lateral aqui */}
        <section className={styles.container}>
          <div className={styles.maintenanceInfo}>
            <h3>Última manutenção</h3>
            <p>Item: Pastilha de Freio | Data: 09/01/2024</p>
            <p>Quilometragem: 15.000 | Tipo: Corretiva</p>
            <h3>Próxima manutenção</h3>
            <p>Item: Câmbio | Data: 01/11/2024</p>
            <p>Quilometragem: 20.000 | Tipo: Preventiva</p>
          </div>
          <section className={styles.scheduleSection}>
            <h3>Agendar nova manutenção</h3>
            <form className={styles.scheduleForm}>
              <label htmlFor="maintenance">Tipo de Manutenção:</label>
              <select id="maintenance" value={selectedMaintenance} onChange={handleMaintenanceChange}>
                <option value="">Selecione</option>
                <option value="preventiva">Preventiva</option>
                <option value="corretiva">Corretiva</option>
              </select>
              <label htmlFor="date">Data:</label>
              <select id="date" value={selectedDate} onChange={handleDateChange}>
                <option value="">Selecione</option>
                <option value="01">Segunda</option>
                <option value="02">Terça</option>
                <option value="03">Quarta</option>
                <option value="04">Quinta</option>
                <option value="05">Sexta</option>
              </select>
              <Button type="submit">Agendar</Button>
            </form>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Manutencao;