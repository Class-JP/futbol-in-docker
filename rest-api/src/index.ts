import express, { Request, Response } from "express";
import cors from 'cors';
import gamesRouter from './routes/game.routes';

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json()); // Enables JSON parsing in the request body
// Routing Regestry
app.use('/games', gamesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello FootballIn API");
});

export default app;
