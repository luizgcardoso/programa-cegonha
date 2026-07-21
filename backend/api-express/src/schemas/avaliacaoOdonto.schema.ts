import { z } from "zod";

const createAvaliacaoOdontoSchema = z.object({
  gestacaoId: z.number(),
  profissionalId: z.number(),
  agendamentoId: z.number().optional(),
  resultado: z.string().min(1),
  prescricoes: z.string().optional(),
  observacoes: z.string().optional(),
});

const updateAvaliacaoOdontoSchema = z.object({
  resultado: z.string().min(1).optional(),
  prescricoes: z.string().optional(),
  observacoes: z.string().optional(),
});

export { createAvaliacaoOdontoSchema, updateAvaliacaoOdontoSchema };
