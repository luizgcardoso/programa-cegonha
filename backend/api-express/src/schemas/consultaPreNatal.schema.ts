import { z } from "zod";

const createConsultaPreNatalSchema = z.object({
  gestacaoId: z.number(),
  profissionalId: z.number(),
  agendamentoId: z.number().optional(),
  nivelRisco: z.boolean(),
  dataUltimaMenstruacao: z.coerce.date(),
  idadeGestacional: z.number().int().min(0).max(42),
  sintomas: z.string().optional(),
  observacoes: z.string().optional(),
  status: z.boolean().default(true),
});

const updateConsultaPreNatalSchema = z.object({
  nivelRisco: z.boolean().optional(),
  dataUltimaMenstruacao: z.coerce.date().optional(),
  idadeGestacional: z.number().int().min(0).max(42).optional(),
  sintomas: z.string().optional(),
  observacoes: z.string().optional(),
  status: z.boolean().optional(),
});

export { createConsultaPreNatalSchema, updateConsultaPreNatalSchema };
