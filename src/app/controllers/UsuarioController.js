import Usuario from '../models/Usuario';

class UsuarioController {
    async store(req, res) {
        const { email } = req.body;

        const userExists = await Usuario.findOne({ where: { email } })

        if (userExists) {
            return res.json({erro: 'Usuário já cadastrado'})
        }

        const usuario = await Usuario.create(req.body)

        return res.json(usuario);
    }
}

export default new UsuarioController()
