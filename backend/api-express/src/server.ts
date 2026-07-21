import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import routes from "./routes/routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

AppDataSource.initialize()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao conectar no banco:", err));
