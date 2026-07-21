import { Router } from "express";
import {
  PessoasController,
  PacientesController,
  EstadosController,
  ProfissionaisController,
  BebesController,
  ResponsaveisController,
  GestacaoController,
  ContatoController,
  EnderecoController,
  VisitaController,
  VisitaRecemNascidoController,
  ConsultaPreNatalController,
  ConsultaAberturaController,
  AgendamentoController,
  ExameController,
  VacinacaoController,
  AvaliacaoOdontoController,
  AfericaoBebeController,
  AfericaoGestanteController,
  CidadeController,
  AreaCoberturaController,
} from "../controllers";
import { BadRequestError } from "../utils/api-error";

const routes = Router();

const pessoasController = new PessoasController();
const pacientesController = new PacientesController();
const estadosController = new EstadosController();
const profissionaisController = new ProfissionaisController();
const bebesController = new BebesController();
const responsaveisController = new ResponsaveisController();
const gestacaoController = new GestacaoController();
const contatoController = new ContatoController();
const enderecoController = new EnderecoController();
const visitaController = new VisitaController();
const visitaRecemNascidoController = new VisitaRecemNascidoController();
const consultaPreNatalController = new ConsultaPreNatalController();
const consultaAberturaController = new ConsultaAberturaController();
const agendamentoController = new AgendamentoController();
const exameController = new ExameController();
const vacinacaoController = new VacinacaoController();
const avaliacaoOdontoController = new AvaliacaoOdontoController();
const afericaoBebeController = new AfericaoBebeController();
const afericaoGestanteController = new AfericaoGestanteController();
const cidadeController = new CidadeController();
const areaCoberturaController = new AreaCoberturaController();

routes.post("/pessoas", pessoasController.create);
routes.get("/pessoas", pessoasController.findAll);
routes.get("/pessoas/:id", pessoasController.findById);
routes.put("/pessoas/:id", pessoasController.update);
routes.delete("/pessoas/:id", pessoasController.delete);
routes.put("/pessoas/", async (req, res) => {
  throw new BadRequestError("Registro não identificado.");
});
routes.delete("/pessoas/", async (req, res) => {
  throw new BadRequestError("Registro não identificado.");
});

routes.post("/pacientes", pacientesController.create);
routes.get("/pacientes", pacientesController.findAll);
routes.get("/pacientes/:id", pacientesController.findById);
routes.put("/pacientes/:id", pacientesController.update);
routes.delete("/pacientes/:id", pacientesController.delete);

routes.post("/estados", estadosController.create);
routes.get("/estados", estadosController.findAll);
routes.get("/estados/:id", estadosController.findById);
routes.put("/estados/:id", estadosController.update);
routes.delete("/estados/:id", estadosController.delete);

routes.post("/cidades", cidadeController.create);
routes.get("/cidades", cidadeController.findAll);
routes.get("/cidades/:id", cidadeController.findById);
routes.put("/cidades/:id", cidadeController.update);
routes.delete("/cidades/:id", cidadeController.delete);

routes.post("/profissionais", profissionaisController.create);
routes.get("/profissionais", profissionaisController.findAll);
routes.get("/profissionais/:id", profissionaisController.findById);
routes.put("/profissionais/:id", profissionaisController.update);
routes.delete("/profissionais/:id", profissionaisController.delete);

routes.post("/bebes", bebesController.create);
routes.get("/bebes", bebesController.findAll);
routes.get("/bebes/:id", bebesController.findById);
routes.put("/bebes/:id", bebesController.update);
routes.delete("/bebes/:id", bebesController.delete);

routes.post("/responsaveis", responsaveisController.create);
routes.get("/responsaveis", responsaveisController.findAll);
routes.get("/responsaveis/:id", responsaveisController.findById);
routes.put("/responsaveis/:id", responsaveisController.update);
routes.delete("/responsaveis/:id", responsaveisController.delete);

routes.post("/gestacao", gestacaoController.create);
routes.get("/gestacao", gestacaoController.findAll);
routes.get("/gestacao/:id", gestacaoController.findById);
routes.put("/gestacao/:id", gestacaoController.update);
routes.delete("/gestacao/:id", gestacaoController.delete);

routes.post("/contatos", contatoController.create);
routes.get("/contatos", contatoController.findAll);
routes.get("/contatos/:id", contatoController.findById);
routes.put("/contatos/:id", contatoController.update);
routes.delete("/contatos/:id", contatoController.delete);

routes.post("/enderecos", enderecoController.create);
routes.get("/enderecos", enderecoController.findAll);
routes.get("/enderecos/:id", enderecoController.findById);
routes.put("/enderecos/:id", enderecoController.update);
routes.delete("/enderecos/:id", enderecoController.delete);

routes.post("/visitas", visitaController.create);
routes.get("/visitas", visitaController.findAll);
routes.get("/visitas/:id", visitaController.findById);
routes.put("/visitas/:id", visitaController.update);
routes.delete("/visitas/:id", visitaController.delete);

routes.post("/visitas-recem-nascido", visitaRecemNascidoController.create);
routes.get("/visitas-recem-nascido", visitaRecemNascidoController.findAll);
routes.get("/visitas-recem-nascido/:id", visitaRecemNascidoController.findById);
routes.put("/visitas-recem-nascido/:id", visitaRecemNascidoController.update);
routes.delete(
  "/visitas-recem-nascido/:id",
  visitaRecemNascidoController.delete,
);

routes.post("/consultas-prenatal", consultaPreNatalController.create);
routes.get("/consultas-prenatal", consultaPreNatalController.findAll);
routes.get("/consultas-prenatal/:id", consultaPreNatalController.findById);
routes.put("/consultas-prenatal/:id", consultaPreNatalController.update);
routes.delete("/consultas-prenatal/:id", consultaPreNatalController.delete);

routes.post("/consultas-abertura", consultaAberturaController.create);
routes.get("/consultas-abertura", consultaAberturaController.findAll);
routes.get("/consultas-abertura/:id", consultaAberturaController.findById);
routes.put("/consultas-abertura/:id", consultaAberturaController.update);
routes.delete("/consultas-abertura/:id", consultaAberturaController.delete);

routes.post("/agendamentos", agendamentoController.create);
routes.get("/agendamentos", agendamentoController.findAll);
routes.get("/agendamentos/:id", agendamentoController.findById);
routes.put("/agendamentos/:id", agendamentoController.update);
routes.delete("/agendamentos/:id", agendamentoController.delete);

routes.post("/exames", exameController.create);
routes.get("/exames", exameController.findAll);
routes.get("/exames/:id", exameController.findById);
routes.put("/exames/:id", exameController.update);
routes.delete("/exames/:id", exameController.delete);

routes.post("/vacinacoes", vacinacaoController.create);
routes.get("/vacinacoes", vacinacaoController.findAll);
routes.get("/vacinacoes/:id", vacinacaoController.findById);
routes.put("/vacinacoes/:id", vacinacaoController.update);
routes.delete("/vacinacoes/:id", vacinacaoController.delete);

routes.post("/avaliacoes-odonto", avaliacaoOdontoController.create);
routes.get("/avaliacoes-odonto", avaliacaoOdontoController.findAll);
routes.get("/avaliacoes-odonto/:id", avaliacaoOdontoController.findById);
routes.put("/avaliacoes-odonto/:id", avaliacaoOdontoController.update);
routes.delete("/avaliacoes-odonto/:id", avaliacaoOdontoController.delete);

routes.post("/afericoes-bebe", afericaoBebeController.create);
routes.get("/afericoes-bebe", afericaoBebeController.findAll);
routes.get("/afericoes-bebe/:id", afericaoBebeController.findById);
routes.put("/afericoes-bebe/:id", afericaoBebeController.update);
routes.delete("/afericoes-bebe/:id", afericaoBebeController.delete);

routes.post("/afericoes-gestante", afericaoGestanteController.create);
routes.get("/afericoes-gestante", afericaoGestanteController.findAll);
routes.get("/afericoes-gestante/:id", afericaoGestanteController.findById);
routes.put("/afericoes-gestante/:id", afericaoGestanteController.update);
routes.delete("/afericoes-gestante/:id", afericaoGestanteController.delete);

routes.post("/area-cobertura", areaCoberturaController.create);
routes.get("/area-cobertura", areaCoberturaController.findAll);
routes.get("/area-cobertura/:id", areaCoberturaController.findById);
routes.put("/area-cobertura/:id", areaCoberturaController.update);
routes.delete("/area-cobertura/:id", areaCoberturaController.delete);

export default routes;
