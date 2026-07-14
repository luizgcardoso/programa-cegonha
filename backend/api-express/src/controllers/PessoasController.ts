
import {Request, Response} from 'express'
import { BadRequestError } from '../utils/api-error';
export class PessoasController {
         
  async create(req: Request, res: Response) {
    const { 
      nome,
       dataNasc, 
       sexo, 
       estadoCivil, 
       nacionalidade, 
       cpf, 
       email, 
       telefone, 
       tipoSanguineo,
       alergias,
       dataCriacao,
    } = req.body; 
    throw new BadRequestError('dados faltantes') 
}
}