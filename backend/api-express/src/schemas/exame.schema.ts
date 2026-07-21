import { z } from "zod";

const createExameSchema = z.object({
  gestacaoId: z.number(),
  tipo: z.string().min(1),
  data: z.coerce.date(),
  urlAnexo: z.url(),
  formatoAnexo: z.string().min(1),
});

const updateExameSchema = z.object({
  tipo: z.string().min(1).optional(),
  data: z.coerce.date().optional(),
  urlAnexo: z.url().optional(),
  formatoAnexo: z.string().min(1).optional(),
});

export { createExameSchema, updateExameSchema };
