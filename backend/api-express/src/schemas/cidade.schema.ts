import { z } from "zod";

const createCidadeSchema = z.object({
  estadoId: z.string().uuid(),
  nome: z.string().min(3),
  status: z.boolean().default(true),
});

const updateCidadeSchema = z.object({
  nome: z.string().min(3).optional(),
  status: z.boolean().optional(),
});

export { createCidadeSchema, updateCidadeSchema };
