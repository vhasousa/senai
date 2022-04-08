import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
import SessaoController from './app/controllers/SessaoController';

const routes = Router();

routes.post('/usuarios', UsuarioController.store);
routes.post('/login', SessaoController.store)

export default routes;
