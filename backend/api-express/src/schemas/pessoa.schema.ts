import { date, z } from "zod";

const createPessoaSchema = z.object({
  nome: z.string().min(3),
  cpf: z.string().length(11).regex(/^\d+$/),
  dataNascimento: z.coerce.date(),
  sexo: z.boolean(),
  estadoCivil: z.string().min(1),
  nacionalidade: z.string().min(1),
  tipoPessoa: z.boolean(),
  dataCriacao: z.coerce.date().default(() => new Date()),
  status: z.boolean().default(true),
});

const updatePessoaSchema = z.object({
  nome: z.string().min(3).optional(),
  dataNascimento: z.coerce.date().optional(),
  sexo: z.boolean().optional(),
  estadoCivil: z.string().min(1).optional(),
  nacionalidade: z.string().min(1).optional(),
  dataAlteracao: z.coerce.date().default(() => new Date()),
  status: z.boolean().optional(),
});

export { createPessoaSchema, updatePessoaSchema };
