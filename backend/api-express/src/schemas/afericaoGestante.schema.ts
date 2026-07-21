import { z } from "zod";

const createAfericaoGestanteSchema = z.object({
  glicose: z.number().positive(),
  peso: z.number().positive(),
  pressaoArterial: z.number().positive(),
  alturaUterina: z.number().positive(),
  batimentosCardiacos: z.number().int().positive(),
  edemas: z.boolean(),
  movimentosFetais: z.boolean(),
  avaliacaoEdemas: z.string().nullable().optional(),
});

const updateAfericaoGestanteSchema = z.object({
  glicose: z.number().positive().optional(),
  peso: z.number().positive().optional(),
  pressaoArterial: z.number().positive().optional(),
  alturaUterina: z.number().positive().optional(),
  batimentosCardiacos: z.number().int().positive().optional(),
  edemas: z.boolean().optional(),
  movimentosFetais: z.boolean().optional(),
  avaliacaoEdemas: z.string().nullable().optional(),
});

export { createAfericaoGestanteSchema, updateAfericaoGestanteSchema };
