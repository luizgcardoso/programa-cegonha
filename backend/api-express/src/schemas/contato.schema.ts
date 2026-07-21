import { z } from "zod";

const createContatoSchema = z.object({
  titular: z.boolean(),
  email: z.string().email().nullable().optional(),
  telefonePrincipal: z.string().min(10),
  telefoneSecundario: z.string().min(10).nullable().optional(),
  pessoaId: z.string().uuid().nullable().optional(),
  responsavelId: z.number().nullable().optional(),
});

const updateContatoSchema = z.object({
  titular: z.boolean().optional(),
  email: z.string().email().nullable().optional(),
  telefonePrincipal: z.string().min(10).optional(),
  telefoneSecundario: z.string().min(10).nullable().optional(),
});

export { createContatoSchema, updateContatoSchema };
