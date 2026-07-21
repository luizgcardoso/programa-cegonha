import { z } from "zod";

const createEstadoSchema = z.object({
  nome: z.string().min(3),
  sigla: z.string().length(2).toUpperCase(),
  status: z.boolean().default(true),
});

const updateEstadoSchema = z.object({
  nome: z.string().min(3).optional(),
  sigla: z.string().length(2).toUpperCase().optional(),
  status: z.boolean().optional(),
});

export { createEstadoSchema, updateEstadoSchema };
