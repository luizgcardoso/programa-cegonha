import { Router } from "express";
import { EstadosController } from "../controllers/EstadosController";
import { ApiError, BadRequestError, NotFoundError } from "../utils/api-error";

const routes = Router();

routes.get('/', async (req, res) => {
  throw new NotFoundError('teste n');
});
routes.post('/estados', new EstadosController().create);

export default routes