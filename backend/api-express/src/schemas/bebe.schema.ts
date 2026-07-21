import { z } from "zod";

const createBebeSchema = z.object({
  gestacaoId: z.number(),
  nome: z.string().min(1),
  dataNascimento: z.coerce.date(),
  horaNascimento: z.coerce.date(),
  sexo: z.boolean(),
  tipoParto: z.boolean(),
  status: z.boolean().default(true),
});

const updateBebeSchema = z.object({
  nome: z.string().min(1).optional(),
  dataNascimento: z.coerce.date().optional(),
  horaNascimento: z.coerce.date().optional(),
  sexo: z.boolean().optional(),
  tipoParto: z.boolean().optional(),
  status: z.boolean().optional(),
});

export { createBebeSchema, updateBebeSchema };
