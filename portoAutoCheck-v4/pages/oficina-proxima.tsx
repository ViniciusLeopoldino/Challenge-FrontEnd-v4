import React, { useState } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import styles from '../src/styles/pages/OficinaProxima.module.css';
import Button from '../src/components/Button/Button';
import Input from '../src/components/Input/Input';
import MenuLateral from '../src/components/MenuLateral/MenuLateral';

const OficinaProxima: React.FC = () => {
  const [cep, setCep] = useState('');
  const [offices, setOffices] = useState<any[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const [selectedOffices, setSelectedOffices] = useState<number[]>([]); // Estado para armazenar oficinas selecionadas

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const fetchCoordinates = async (cep: string) => {
    if (cep.length !== 8) {
      throw new Error('CEP deve ter 8 dígitos');
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
      throw new Error('Falha ao buscar o endereço do ViaCEP');
    }

    const data = await response.json();

    if (!data || !data.localidade || !data.uf) {
      throw new Error('CEP inválido');
    }

    const address = `${data.logradouro}, ${data.localidade}, ${data.uf}`;
    const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`);
    const geocodeData = await geocodeResponse.json();

    if (geocodeData.status === "OK") {
      const location = geocodeData.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error(`Falha ao obter coordenadas do endereço: ${geocodeData.status}`);
    }
  };

  const fetchOffices = async (lat: number, lng: number) => {
    const response = await fetch(`/api/oficinas?lat=${lat}&lng=${lng}&radius=100000`);

    if (!response.ok) {
      throw new Error('Falha ao buscar as oficinas');
    }

    const data = await response.json();
    if (data.offices) {
      setOffices(data.offices);
      setSelectedOffices([]); // Resetar a seleção de oficinas quando novas oficinas são buscadas
    } else {
      setOffices([]);
      setError('Nenhuma oficina encontrada.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Limpar mensagens de erro
    setLoading(true); // Começar a carregar

    try {
      const coordinates = await fetchCoordinates(cep);
      setLocation(coordinates);
      await fetchOffices(coordinates.lat, coordinates.lng);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ocorreu um erro');
    } finally {
      setLoading(false); // Finalizar carregamento
    }
  };

  const handleCheckboxChange = (index: number) => {
    setSelectedOffices(prevSelected => {
      if (prevSelected.includes(index)) {
        // Se já estiver selecionado, remover da seleção
        return prevSelected.filter(i => i !== index);
      } else {
        // Caso contrário, adicionar à seleção
        return [...prevSelected, index];
      }
    });
  };

  const handleLoadGPS = () => {
    if (selectedOffices.length > 0) {
      const office = offices[selectedOffices[0]]; // Pegar a primeira oficina selecionada
      const { lat, lng } = office.geometry.location;
      // Redirecionar para o Google Maps
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
    } else {
      alert('Selecione uma oficina para carregar a rota.');
    }
  };

  return (
    <>
      <Header title="Oficina Próxima" />
      <div className={styles.container}>
        <MenuLateral />
        <form onSubmit={handleSubmit}>
          <label htmlFor="cep">Digite seu CEP:</label>
          <Input type="text" id="cep" name="cep" value={cep} onChange={handleCepChange} />
          <Button type="submit" disabled={loading}>Pesquisar</Button>
        </form>

        {/* Exibir mensagens de erro, se houver */}
        {error && <p className={styles.error}>{error}</p>}

        {/* Exibir lista de oficinas com checkboxes dentro de um contêiner com barra de rolagem */}
        {offices.length > 0 && (
          <div className={styles.officeContainer}>
            <ul className={styles.officeList}>
              {offices.map((office, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={selectedOffices.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {office.name} - {office.geometry.location.lat}, {office.geometry.location.lng}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Carregando o mapa apenas se a localização estiver disponível */}
        {location && (
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '300px' }} // Alterado para 100% de largura
            center={{ lat: location.lat, lng: location.lng }}
            zoom={12}
          >
            {offices.length > 0 ? (
              offices.map((office, index) => (
                <Marker
                  key={index}
                  position={{
                    lat: office.geometry.location.lat,
                    lng: office.geometry.location.lng,
                  }}
                  title={office.name}
                />
              ))
            ) : (
              <Marker position={location} title="Você está aqui" />
            )}
          </GoogleMap>
        </LoadScript>
        
        )}

        {loading && <p>Carregando...</p>}

        <Button onClick={handleLoadGPS}>Carregar GPS</Button>
      </div>
      <Footer />
    </>
  );
};

export default OficinaProxima;
