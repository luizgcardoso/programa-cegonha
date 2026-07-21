import { z } from "zod";

const createAreaCoberturaSchema = z.object({
  profissionalId: z.number(),
  identificacao: z.string().min(3),
  qtdPacientes: z.number().int().min(0),
  status: z.boolean().default(true),
});

const updateAreaCoberturaSchema = z.object({
  identificacao: z.string().min(3).optional(),
  qtdPacientes: z.number().int().min(0).optional(),
  status: z.boolean().optional(),
});

export { createAreaCoberturaSchema, updateAreaCoberturaSchema };
