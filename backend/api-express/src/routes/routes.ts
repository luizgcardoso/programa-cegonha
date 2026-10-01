import { Router } from "express";
import {
  PessoasController,
  PacientesController,
  ProfissionaisController,
  BebesController,
  GestacaoController,
  VisitaController,
} from "../controllers";

const routes = Router();

// ============================================================================
// INICIALIZAÇÃO DOS CONTROLLERS - MVP (TCC)
// ============================================================================
const pessoasController = new PessoasController();
const pacientesController = new PacientesController();
const profissionaisController = new ProfissionaisController();
const bebesController = new BebesController();
const gestacaoController = new GestacaoController();
const visitaController = new VisitaController();

// ============================================================================
// ROTAS ATIVAS - ESCOPO PRINCIPAL
// ============================================================================

// --- PESSOAS ---
routes.post("/pessoas", pessoasController.create);
routes.get("/pessoas", pessoasController.findAll);
routes.get("/pessoas/:id", pessoasController.findById);
routes.put("/pessoas/:id", pessoasController.update);
routes.delete("/pessoas/:id", pessoasController.delete);

// --- PACIENTES ---
routes.post("/pacientes", pacientesController.create);
routes.get("/pacientes", pacientesController.findAll);
routes.get("/pacientes/:id", pacientesController.findById);
routes.put("/pacientes/:id", pacientesController.update);
routes.delete("/pacientes/:id", pacientesController.delete);

// --- PROFISSIONAIS (ACS) ---
routes.post("/profissionais/:idPessoa", profissionaisController.create);
routes.get("/profissionais", profissionaisController.findAll);
routes.get("/profissionais/:id", profissionaisController.findById);
routes.put("/profissionais/:id", profissionaisController.update);
routes.delete("/profissionais/:id", profissionaisController.delete);

// --- GESTAÇÃO ---
routes.post("/gestacao", gestacaoController.create);
routes.get("/gestacao", gestacaoController.findAll);
routes.get("/gestacao/:id", gestacaoController.findById);
routes.put("/gestacao/:id", gestacaoController.update);
routes.delete("/gestacao/:id", gestacaoController.delete);

// --- BEBÊS ---
routes.post("/bebes", bebesController.create);
routes.get("/bebes", bebesController.findAll);
routes.get("/bebes/:id", bebesController.findById);
routes.put("/bebes/:id", bebesController.update);
routes.delete("/bebes/:id", bebesController.delete);

// --- VISITAS (ACOMPANHAMENTO) ---
routes.post("/visitas", visitaController.create);
routes.get("/visitas", visitaController.findAll);
routes.get("/visitas/:id", visitaController.findById);
routes.put("/visitas/:id", visitaController.update);
routes.delete("/visitas/:id", visitaController.delete);

export default routes;
