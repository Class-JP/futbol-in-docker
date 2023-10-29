import { Router, Request, Response } from "express";
import { GamesController } from "../controllers/games.controller";
import { pool as DB_CONNECTION } from "../db/queries";

const router = Router();
const gamesController = new GamesController(DB_CONNECTION);

// Resource Routes: Game Entity
router.get("/", (_req: Request, res: Response) => gamesController.list(res));

router.get("/:id", (req: Request, res: Response) => gamesController.show(req, res));

router.post("/", (req: Request, res: Response) => gamesController.create(req, res))

router.put("/:id", (req: Request, res: Response) => gamesController.update(req, res));

router.delete("/:id", (req: Request, res: Response) => gamesController.destroy(req, res));

export default router;
