import { z } from "zod";

const createContatoSchema = z.object({
  titular: z.boolean(),
  email: z.email().optional(),
  telefonePrincipal: z.string().min(10),
  telefoneSecundario: z.string().min(10).optional(),
  pessoaId: z.number().optional,
  responsavelId: z.number().optional(),
});

const updateContatoSchema = z.object({
  titular: z.boolean().optional(),
  email: z.email().optional(),
  telefonePrincipal: z.string().min(10).optional(),
  telefoneSecundario: z.string().min(10).optional(),
});

export { createContatoSchema, updateContatoSchema };
