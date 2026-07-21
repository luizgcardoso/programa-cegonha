import { z } from "zod";

const createGestacaoSchema = z.object({
  pacienteId: z.string().uuid(),
  nivelRisco: z.boolean(),
  dataParto: z.coerce.date().nullable().optional(),
  tipoParto: z.boolean().nullable().optional(),
  idadeGestacional: z.number().int().min(0).max(42),
  status: z.boolean().default(true),
});

const updateGestacaoSchema = z.object({
  nivelRisco: z.boolean().optional(),
  dataParto: z.coerce.date().nullable().optional(),
  tipoParto: z.boolean().nullable().optional(),
  idadeGestacional: z.number().int().min(0).max(42).optional(),
  status: z.boolean().optional(),
});

export { createGestacaoSchema, updateGestacaoSchema };
