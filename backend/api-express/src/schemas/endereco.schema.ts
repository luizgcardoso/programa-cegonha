import { z } from "zod";

const createEnderecoPessoaSchema = z.object({
  isResponsavel: z.boolean().default(false),
  logradouro: z.string().min(3),
  numeroResidencial: z.string().trim().min(1),
  cep: z.string().length(8).regex(/^\d+$/),
  complemento: z.string().optional(),
  bairro: z.string().min(1),
  status: z.boolean().default(true),
});

const createEnderecoResponsavelSchema = z.object({
  isResponsavel: z.boolean().default(true),
  logradouro: z.string().min(3),
  numeroResidencial: z.string().trim().min(1),
  cep: z.string().length(8).regex(/^\d+$/),
  complemento: z.string().optional(),
  bairro: z.string().min(1),
  status: z.boolean().default(true),
});

const updateEnderecoSchema = z.object({
  logradouro: z.string().min(3).optional(),
  numeroResidencial: z.string().min(1).optional(),
  cep: z.string().length(8).regex(/^\d+$/).optional(),
  complemento: z.string().optional(),
  bairro: z.string().min(1).optional(),
  status: z.boolean().optional(),
});

export {
  createEnderecoPessoaSchema,
  createEnderecoResponsavelSchema,
  updateEnderecoSchema,
};
