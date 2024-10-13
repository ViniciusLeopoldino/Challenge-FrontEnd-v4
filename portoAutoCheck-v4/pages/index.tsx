// pages/index.tsx

import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redireciona para a página de login
  }, [router]);

  return null; // Não renderiza nada na página inicial
};

export default Home;
