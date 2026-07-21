import { z } from "zod";

const createAfericaoBebeSchema = z.object({
  altura: z.number().positive(),
  peso: z.number().positive(),
  cranioCefalico: z.number().positive(),
  testeApgar: z.number().int().min(0).max(10),
  risco: z.boolean(),
});

const updateAfericaoBebeSchema = z.object({
  altura: z.number().positive().optional(),
  peso: z.number().positive().optional(),
  cranioCefalico: z.number().positive().optional(),
  testeApgar: z.number().int().min(0).max(10).optional(),
  risco: z.boolean().optional(),
});

export { createAfericaoBebeSchema, updateAfericaoBebeSchema };
