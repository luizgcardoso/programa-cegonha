import { z } from "zod";

const createProfissionalSchema = z.object({
  matricula: z.string().min(3),
  cargo: z.string().min(3),
  equipe: z.string().min(3),
  dataCriacao: z.coerce.date().default(() => new Date()),
  status: z.boolean().default(true),
});

const updateProfissionalSchema = z.object({
  matricula: z.string().min(3).optional(),
  cargo: z.string().min(3).optional(),
  equipe: z.string().min(3).optional(),
  dataAlteracao: z.coerce.date().default(() => new Date()),
  status: z.boolean().optional(),
});

export { createProfissionalSchema, updateProfissionalSchema };
