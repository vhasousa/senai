import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';

const routes = Router();

routes.post('/usuarios', UsuarioController.store);

export default routes;
