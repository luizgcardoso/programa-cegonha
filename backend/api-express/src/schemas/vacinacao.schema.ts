import { z } from "zod";

const createVacinacaoSchema = z.object({
  nome: z.string().min(1),
  dataAplicacao: z.coerce.date(),
  tipoPaciente: z.boolean(),
  observacao: z.string().optional(),
  gestacaoId: z.number().optional(),
  bebeId: z.string().optional(),
});

const updateVacinacaoSchema = z.object({
  nome: z.string().min(1).optional(),
  dataAplicacao: z.coerce.date().optional(),
  tipoPaciente: z.boolean().optional(),
  observacao: z.string().optional(),
});

export { createVacinacaoSchema, updateVacinacaoSchema };
