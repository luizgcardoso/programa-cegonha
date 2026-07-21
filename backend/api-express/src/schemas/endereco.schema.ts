import { z } from "zod";

const createEnderecoSchema = z.object({
  isResponsavel: z.boolean(),
  logradouro: z.string().min(3),
  numeroResidencial: z.string().min(1),
  cep: z.string().length(8).regex(/^\d+$/),
  complemento: z.string().optional(),
  bairro: z.string().min(1),
  cidadeId: z.number(),
  pessoaId: z.number().optional(),
  responsavelId: z.number().optional(),
  status: z.boolean().default(true),
});

const updateEnderecoSchema = z.object({
  isResponsavel: z.boolean().optional(),
  logradouro: z.string().min(3).optional(),
  numeroResidencial: z.string().min(1).optional(),
  cep: z.string().length(8).regex(/^\d+$/).optional(),
  complemento: z.string().optional(),
  bairro: z.string().min(1).optional(),
  cidadeId: z.number().optional(),
  status: z.boolean().optional(),
});

export { createEnderecoSchema, updateEnderecoSchema };
