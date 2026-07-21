import { z } from "zod";

const createConsultaAberturaSchema = z.object({
  gestacaoId: z.number(),
  profissionalId: z.number(),
  agendamentoId: z.number().optional(),
  abortos: z.number().int().min(0),
  natimortos: z.number().int().min(0),
  nivelRisco: z.boolean(),
  dataUltimaMenstruacao: z.coerce.date(),
  idadeGestacional: z.number().int().min(0).max(42),
  comorbidades: z.string().optional(),
  prescricaoExames: z.string().optional(),
  prescricaoPreventivos: z.string().optional(),
  sintomas: z.string().optional(),
  observacoes: z.string().optional(),
  status: z.boolean().default(true),
});

const updateConsultaAberturaSchema = z.object({
  abortos: z.number().int().min(0).optional(),
  natimortos: z.number().int().min(0).optional(),
  nivelRisco: z.boolean().optional(),
  dataUltimaMenstruacao: z.coerce.date().optional(),
  idadeGestacional: z.number().int().min(0).max(42).optional(),
  comorbidades: z.string().optional(),
  prescricaoExames: z.string().optional(),
  prescricaoPreventivos: z.string().optional(),
  sintomas: z.string().optional(),
  observacoes: z.string().optional(),
  status: z.boolean().optional(),
});

export { createConsultaAberturaSchema, updateConsultaAberturaSchema };
