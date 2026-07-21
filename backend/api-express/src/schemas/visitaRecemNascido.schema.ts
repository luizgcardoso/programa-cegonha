import { z } from "zod";

const createVisitaRecemNascidoSchema = z.object({
  bebeId: z.number(),
  profissionalId: z.number(),
  agendamentoId: z.number().optional(),
  tipoAmamentacao: z.string().min(1),
  prescricaoTestes: z.string().optional(),
  prescricaoVacinas: z.string().optional(),
  saudeUmbigo: z.boolean(),
  observacoes: z.string().optional(),
  status: z.boolean().default(true),
});

const updateVisitaRecemNascidoSchema = z.object({
  tipoAmamentacao: z.string().min(1).optional(),
  prescricaoTestes: z.string().optional(),
  prescricaoVacinas: z.string().optional(),
  saudeUmbigo: z.boolean().optional(),
  observacoes: z.string().optional(),
  status: z.boolean().optional(),
});

export { createVisitaRecemNascidoSchema, updateVisitaRecemNascidoSchema };
