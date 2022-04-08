import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from "../models/Usuario";

class SessaoController {
    async store(req, res) {
        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({
            where: { email },
        });

        if(!usuario) {
            return res.json({ erro: 'Usuario não existe' });
        }

        const senha_combina = bcrypt.compare(senha, usuario.senha);

        if(!senha_combina) {
            return res.json({ erro: 'E-mail ou senha incorretos!' })
        }

        const { id, nome } = usuario

        return res.json({
            usuario: {
                id,
                nome,
                email
            },
            token: jwt.sign({ id }, '698dc19d489c4e4db73e28a713eab07b', {
                expiresIn: '15m'
            })
        })

    }
}

export default new SessaoController();
