import { z } from "zod";

const createResponsavelSchema = z.object({
  nome: z.string().min(3),
  parentesco: z.string().min(1),
  status: z.boolean().default(true),
});

const updateResponsavelSchema = z.object({
  nome: z.string().min(3).optional(),
  parentesco: z.string().min(1).optional(),
  status: z.boolean().optional(),
});

export { createResponsavelSchema, updateResponsavelSchema };
