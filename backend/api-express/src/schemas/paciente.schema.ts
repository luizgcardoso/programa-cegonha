import { z } from "zod";

const createPacienteSchema = z.object({
  pessoaId: z.number(),
  responsavel: z.boolean(),
  tipoSanguineo: z.string().min(1),
  alergias: z.string().optional(),
  status: z.boolean().default(true),
});

const updatePacienteSchema = z.object({
  responsavel: z.boolean().optional(),
  tipoSanguineo: z.string().min(1).optional(),
  alergias: z.string().optional(),
  status: z.boolean().optional(),
});

export { createPacienteSchema, updatePacienteSchema };
