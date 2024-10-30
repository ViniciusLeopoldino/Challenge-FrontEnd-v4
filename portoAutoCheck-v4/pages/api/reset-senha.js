import { getConnection } from './db';
import bcrypt from 'bcrypt';

const resetSenha = async (req, res) => {
  if (req.method === 'POST') {
    const { email, newPassword } = req.body;

    console.log("Dados recebidos:", req.body); // Para ver os dados recebidos

    if (!email || !newPassword) {
      return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
    }

    let connection;

    try {
      connection = await getConnection(); // Obtenha a conexão do banco de dados

      const userResult = await connection.execute('SELECT * FROM cadastro WHERE email = :email', [email]);

      console.log("Usuário encontrado:", userResult); // Para ver o resultado da consulta

      if (userResult.rows.length === 0) {
        return res.status(404).json({ message: 'E-mail não encontrado.' });
      }

      // Gerar o hash da nova senha
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Atualiza ambas as colunas 'senha' e 'confsenha'
      await connection.execute('UPDATE cadastro SET senha = :senha, confsenha = :confsenha WHERE email = :email', 
        {
          senha: hashedPassword,
          confsenha: hashedPassword,
          email: email
        }
      );

      await connection.commit(); // Certifique-se de confirmar a transação

      return res.status(200).json({ message: 'Senha atualizada com sucesso!' });
    } catch (error) {
      console.error("Erro ao atualizar a senha:", error); // Para ver o erro
      return res.status(500).json({ message: 'Erro ao atualizar a senha.' });
    } finally {
      if (connection) {
        try {
          await connection.close(); // Feche a conexão após o uso
        } catch (err) {
          console.error('Erro ao fechar a conexão:', err);
        }
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default resetSenha;
