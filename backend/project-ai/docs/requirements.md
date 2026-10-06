# Requisitos do Projeto — Equipe Cegonha

Este documento detalha os requisitos funcionais e não funcionais do MVP, conforme definido no Plano de Governança AI-DLC.

## 1. Requisitos Funcionais (RF)

### 1.1. Gestão de Pessoas e Pacientes
- **RF01 - Cadastro de Pessoa:** O sistema deve permitir o cadastro de dados básicos de uma pessoa (Nome, CPF, Data de Nascimento, Sexo, Estado Civil, Nacionalidade).
- **RF02 - Vínculo de Paciente:** O sistema deve permitir que uma Pessoa seja registrada como Paciente, adicionando informações específicas (Tipo Sanguíneo, Alergias, Responsável).
- **RF03 - Listagem de Pacientes:** O sistema deve exibir uma lista de pacientes cadastrados com ações rápidas de visualização e edição.

### 1.2. Gestações e Recém-Nascidos
- **RF04 - Registro de Gestação:** O sistema deve permitir registrar uma gestação para uma paciente, incluindo DUM (Data da Última Menstruação), DPP (Data Provável do Parto) e Idade Gestacional.
- **RF05 - Acompanhamento de Parto:** O sistema deve permitir atualizar a gestação com a data e tipo de parto (Normal/Cesariana).
- **RF06 - Registro de Recém-Nascido (Bebe):** O sistema deve permitir o vínculo de um ou mais bebês a uma gestação finalizada.

### 1.3. Acompanhamento e Visitas
- **RF07 - Registro de Visita Domiciliar:** O sistema deve permitir que um Profissional (ACS) registre visitas realizadas, vinculando-as à gestação da paciente.
- **RF08 - Histórico de Acompanhamento:** O sistema deve manter um histórico consolidado de visitas, consultas e exames realizados (indicadores).

### 1.4. Profissionais
- **RF09 - Cadastro de Profissional:** O sistema deve permitir o cadastro de profissionais (ACS), vinculando-os a uma Pessoa e definindo matrícula, cargo, equipe e área de cobertura.

### 1.5. Dashboard e Indicadores
- **RF10 - Painel de Controle:** O sistema deve apresentar um dashboard com cards de indicadores agregados (Ex: Total de Gestantes Ativas, Visitas no Mês).

## 2. Requisitos Não Funcionais (RNF)

- **RNF01 - Performance:** As listagens e dashboards devem carregar em menos de 2 segundos.
- **RNF02 - Segurança:** Acesso restrito a profissionais autenticados (Simulado via `authMock.ts` no MVP).
- **RNF03 - Integridade:** Validação rigorosa de contratos de dados utilizando **Zod**.
- **RNF04 - Persistência:** Dados armazenados em banco de dados relacional **PostgreSQL** via **TypeORM**.
- **RNF05 - Usabilidade:** Interface responsiva construída com **React** e **TailwindCSS**, priorizando formulários de página única.

## 3. Restrições e Escopo Negativo (Feature Freeze)

Conforme o AI-DLC, os seguintes itens **NÃO** fazem parte do MVP:
- Avaliações Odontológicas complexas.
- Anexos de Exames de Imagem.
- Carteira de Vacinação completa.
- Sistema de Agendamento com cálculo de concorrência.
- Normalização complexa de Endereços.
