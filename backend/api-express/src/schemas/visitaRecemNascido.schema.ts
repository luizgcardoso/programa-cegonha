import { z } from "zod";

const createVisitaRecemNascidoSchema = z.object({
  bebeId: z.string(),
  profissionalId: z.number(),
  agendamentoId: z.number().optional(),
  tipoAmamentacao: z.string().min(1),
  prescricaoTestes: z.string().nullable().optional(),
  prescricaoVacinas: z.string().nullable().optional(),
  saudeUmbigo: z.boolean(),
  observacoes: z.string().nullable().optional(),
  status: z.boolean().default(true),
});

const updateVisitaRecemNascidoSchema = z.object({
  tipoAmamentacao: z.string().min(1).optional(),
  prescricaoTestes: z.string().nullable().optional(),
  prescricaoVacinas: z.string().nullable().optional(),
  saudeUmbigo: z.boolean().optional(),
  observacoes: z.string().nullable().optional(),
  status: z.boolean().optional(),
});

export { createVisitaRecemNascidoSchema, updateVisitaRecemNascidoSchema };
