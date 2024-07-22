import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <h1>Olá Developers! Bem-vindos ao TypeScript com Express.JS</h1>
        <h2>Hilário, você é F O D A!</h2>
        
        `);

});

app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT} `));
