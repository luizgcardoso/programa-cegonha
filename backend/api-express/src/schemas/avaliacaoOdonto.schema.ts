import { z } from "zod";

const createAvaliacaoOdontoSchema = z.object({
  gestacaoId: z.number(),
  profissionalId: z.number(),
  agendamentoId: z.number().optional(),
  resultado: z.string().min(1),
  prescricoes: z.string().nullable().optional(),
  observacoes: z.string().nullable().optional(),
});

const updateAvaliacaoOdontoSchema = z.object({
  resultado: z.string().min(1).optional(),
  prescricoes: z.string().nullable().optional(),
  observacoes: z.string().nullable().optional(),
});

export { createAvaliacaoOdontoSchema, updateAvaliacaoOdontoSchema };
