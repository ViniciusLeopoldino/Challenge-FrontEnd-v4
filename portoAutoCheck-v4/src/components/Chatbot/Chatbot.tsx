import React, { useState } from 'react';
import styles from './Chatbot.module.css';

// Futuramente, o componente Chatbot será um chatbot funcional que interage com o usuário e responde perguntas sobre o veículo do usuário.

interface ChatbotProps {
  title: string;
  questions: string[];
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ title, questions, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [userResponse, setUserResponse] = useState('');

  const handleResponseSubmit = () => {
    if (userResponse) {
      setResponses([...responses, userResponse]);
      setUserResponse('');
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  return (
    <div className={styles.chatbot}>
      <div className={styles.chatbotHeader}>
        <h3>{title}</h3>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.chatWindow}>
        <div className={styles.question}>
          <p>{questions[currentQuestionIndex]}</p>
        </div>
        <input 
          type="text" 
          value={userResponse} 
          onChange={(e) => setUserResponse(e.target.value)} 
          placeholder="Digite sua resposta" 
        />
        <button onClick={handleResponseSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Chatbot;
