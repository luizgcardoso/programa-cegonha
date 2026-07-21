import { z } from "zod";

const createEnderecoSchema = z.object({
  titular: z.boolean(),
  logradouro: z.string().min(3),
  numeroResidencial: z.string().min(1),
  cep: z.string().length(8).regex(/^\d+$/),
  complemento: z.string().nullable().optional(),
  bairro: z.string().min(1),
  cidadeId: z.string().uuid(),
  pessoaId: z.string().uuid().nullable().optional(),
  responsavelId: z.number().nullable().optional(),
  status: z.boolean().default(true),
});

const updateEnderecoSchema = z.object({
  titular: z.boolean().optional(),
  logradouro: z.string().min(3).optional(),
  numeroResidencial: z.string().min(1).optional(),
  cep: z.string().length(8).regex(/^\d+$/).optional(),
  complemento: z.string().nullable().optional(),
  bairro: z.string().min(1).optional(),
  cidadeId: z.string().uuid().optional(),
  status: z.boolean().optional(),
});

export { createEnderecoSchema, updateEnderecoSchema };
