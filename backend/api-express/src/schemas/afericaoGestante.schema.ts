import { z } from "zod";

const createAfericaoGestanteSchema = z.object({
  glicose: z.number().positive(),
  peso: z.number().positive(),
  pressaoArterial: z.number().positive(),
  alturaUterina: z.number().positive(),
  batimentosCardiacos: z.number().positive(),
  edemas: z.boolean(),
  rimovimentosFetaissco: z.boolean(),
  avaliacaoEdemas: z.string().optional(),
});

const updateAfericaoGestanteSchema = z.object({
  glicose: z.number().positive(),
  peso: z.number().positive(),
  pressaoArterial: z.number().positive(),
  alturaUterina: z.number().positive(),
  batimentosCardiacos: z.number().positive(),
  edemas: z.boolean(),
  rimovimentosFetaissco: z.boolean(),
  avaliacaoEdemas: z.string().optional(),
});

export { createAfericaoGestanteSchema, updateAfericaoGestanteSchema };
