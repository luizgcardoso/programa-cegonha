import { z } from "zod";

const createAgendamentoSchema = z.object({
  data: z.coerce.date(),
  hora: z.string().regex(/^\d{2}:\d{2}$/),
  dataRetorno: z.coerce.date().optional(),
  horaRetorno: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .optional(),
  status: z.boolean().default(true),
});

const updateAgendamentoSchema = z.object({
  data: z.coerce.date().optional(),
  hora: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .optional(),
  dataRetorno: z.coerce.date().optional(),
  horaRetorno: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .optional(),
  status: z.boolean().optional(),
});

export { createAgendamentoSchema, updateAgendamentoSchema };
