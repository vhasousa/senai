import Usuario from '../models/Usuario';
import bcrypt from 'bcryptjs';

class UsuarioController {
    async store(req, res) {
        const { email, nome, senha } = req.body;

        const userExists = await Usuario.findOne({ where: { email } });

        if (userExists) {
            return res.json({erro: 'Usuário já cadastrado'});
        }

        const hash_senha = await bcrypt.hash(senha, 8)

        const usuario = await Usuario.create({email, nome, senha: hash_senha});

        return res.json(usuario);
    }
}

export default new UsuarioController();
