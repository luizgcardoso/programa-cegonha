import { z } from "zod";

const createVisitaSchema = z.object({
  gestacaoId: z.number(),
  profissionalId: z.number(),
  agendamentoId: z.number().optional(),
  ultimaConsultaRealizada: z.coerce.date(),
  pressaoArterial: z.number().nullable().optional(),
  movimentosFetais: z.boolean(),
  vulnerabilidades: z.string().nullable().optional(),
  observacoes: z.string().nullable().optional(),
  recomendacoes: z.string().nullable().optional(),
  status: z.boolean().default(true),
});

const updateVisitaSchema = z.object({
  ultimaConsultaRealizada: z.coerce.date().optional(),
  pressaoArterial: z.number().nullable().optional(),
  movimentosFetais: z.boolean().optional(),
  vulnerabilidades: z.string().nullable().optional(),
  observacoes: z.string().nullable().optional(),
  recomendacoes: z.string().nullable().optional(),
  status: z.boolean().optional(),
});

export { createVisitaSchema, updateVisitaSchema };
