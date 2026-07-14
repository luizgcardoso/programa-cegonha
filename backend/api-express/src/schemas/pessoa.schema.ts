import {z} from "zod"

const createPessoaSchema = z.object({
    nome: z.string().min(3),
    cpf: z.string().length(11),
    telefone: z.string() 
});

const updatePessoaSchema = z.object({

});


export {createPessoaSchema, updatePessoaSchema}