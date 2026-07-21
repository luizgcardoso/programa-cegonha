import { z } from "zod";

const createVacinacaoSchema = z.object({
  nome: z.string().min(1),
  dataAplicacao: z.coerce.date(),
  tipoPaciente: z.boolean(),
  observacao: z.string().nullable().optional(),
  gestacaoId: z.number().nullable().optional(),
  bebeId: z.string().nullable().optional(),
});

const updateVacinacaoSchema = z.object({
  nome: z.string().min(1).optional(),
  dataAplicacao: z.coerce.date().optional(),
  tipoPaciente: z.boolean().optional(),
  observacao: z.string().nullable().optional(),
});

export { createVacinacaoSchema, updateVacinacaoSchema };
