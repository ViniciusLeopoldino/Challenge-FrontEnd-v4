import { NextApiRequest, NextApiResponse } from 'next';
import { getConnection } from './db'; // Importa a função de conexão

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, senha, confsenha } = req.body;

        // Verifique se todos os campos obrigatórios estão presentes
        if (!email || !senha || !confsenha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        // Verifique se a senha e a confirmação da senha coincidem
        if (senha !== confsenha) {
            return res.status(400).json({ error: 'A senha e a confirmação da senha não coincidem.' });
        }

        try {
            const connection = await getConnection();
            const result = await connection.execute(
                `INSERT INTO cadastro (email, senha, confsenha) VALUES (:email, :senha, :confsenha)`,
                { email, senha, confsenha },
                { autoCommit: true } // Commita automaticamente
            );

            await connection.close(); // Feche a conexão após a operação
            return res.status(201).json({ message: 'Cadastro realizado com sucesso.' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao realizar o cadastro.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
