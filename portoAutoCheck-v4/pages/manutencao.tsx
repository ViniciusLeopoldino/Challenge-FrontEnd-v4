import React, { useState } from 'react';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Button from '../src/components/Button/Button';
import MenuLateral from '../src/components/MenuLateral/MenuLateral';
import Input from '../src/components/Input/Input';
import styles from '../src/styles/pages/Manutencao.module.css';

const Manutencao: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre edição e visualização
  const [maintenanceData, setMaintenanceData] = useState({
    lastMaintenanceItem: 'Pastilha de Freio',
    lastMaintenanceDate: '09/01/2024',
    lastMaintenanceKm: '15.000',
    lastMaintenanceType: 'Corretiva',
    nextMaintenanceItem: 'Câmbio',
    nextMaintenanceDate: '01/11/2024',
    nextMaintenanceKm: '20.000',
    nextMaintenanceType: 'Preventiva',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaintenanceData({
      ...maintenanceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar as alterações
    setIsEditing(false); // Finaliza o modo de edição
  };

  return (
    <>
      <Header title="Manutenções" />
      <main className={styles.main}>
        <MenuLateral /> {/* Menu lateral */}
        <section className={styles.container}>
        <div className={styles.dataContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.lastMaintenanceInfo}>
              <h3>Última manutenção</h3>
              <p>Item:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="lastMaintenanceItem"
                    name="lastMaintenanceItem"
                    value={maintenanceData.lastMaintenanceItem}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.lastMaintenanceItem
                )}
              </span>
              <p>Data:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="lastMaintenanceDate"
                    name="lastMaintenanceDate"
                    value={maintenanceData.lastMaintenanceDate}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.lastMaintenanceDate
                )}
              </span>
              <p>Quilometragem:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="lastMaintenanceKm"
                    name="lastMaintenanceKm"
                    value={maintenanceData.lastMaintenanceKm}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.lastMaintenanceKm
                )}
              </span>
              <p>Tipo:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="lastMaintenanceType"
                    name="lastMaintenanceType"
                    value={maintenanceData.lastMaintenanceType}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.lastMaintenanceType
                )}
              </span>
            </div>

            <div className={styles.nextMaintenanceInfo}>
              <h3>Próxima manutenção</h3>
              <p>Item:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="nextMaintenanceItem"
                    name="nextMaintenanceItem"
                    value={maintenanceData.nextMaintenanceItem}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.nextMaintenanceItem
                )}
              </span>
              <p>Data:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="nextMaintenanceDate"
                    name="nextMaintenanceDate"
                    value={maintenanceData.nextMaintenanceDate}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.nextMaintenanceDate
                )}
              </span>
              <p>Quilometragem:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="nextMaintenanceKm"
                    name="nextMaintenanceKm"
                    value={maintenanceData.nextMaintenanceKm}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.nextMaintenanceKm
                )}
              </span>
              <p>Tipo:</p>
              <span className={styles.inputField}>
                {isEditing ? (
                  <Input
                    id="nextMaintenanceType"
                    name="nextMaintenanceType"
                    value={maintenanceData.nextMaintenanceType}
                    onChange={handleChange}
                  />
                ) : (
                  maintenanceData.nextMaintenanceType
                )}
              </span>
            </div>

            <div className={styles.buttonGroup}>
              <Button type="button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Salvar' : 'Editar'}
              </Button>
              {isEditing && <Button type="submit">Confirmar</Button>}
            </div>
          </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Manutencao;
