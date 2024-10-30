import { getConnection } from './db'; // Importa a função de conexão

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Verifique se todos os campos obrigatórios estão presentes
        if (!email || !password) {
            return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
        }

        try {
            const connection = await getConnection();
            const result = await connection.execute(
                `SELECT * FROM cadastro WHERE email = :email AND senha = :senha`,
                { email, senha: password } // Altere para usar o campo de senha adequado
            );

            await connection.close(); // Feche a conexão após a operação

            if (result.rows.length > 0) {
                return res.status(200).json({ message: 'Login bem-sucedido.' });
            } else {
                return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao realizar o login.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
