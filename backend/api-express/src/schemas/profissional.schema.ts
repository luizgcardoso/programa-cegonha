import { z } from "zod";

const createProfissionalSchema = z.object({
  pessoaId: z.string().uuid().optional(),
  matricula: z.string().min(1),
  cargo: z.string().min(1),
  equipe: z.string().min(1),
  status: z.boolean().default(true),
});

const updateProfissionalSchema = z.object({
  matricula: z.string().min(1).optional(),
  cargo: z.string().min(1).optional(),
  equipe: z.string().min(1).optional(),
  status: z.boolean().optional(),
});

export { createProfissionalSchema, updateProfissionalSchema };
