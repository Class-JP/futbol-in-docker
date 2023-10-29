import { Request, Response } from "express";
import { GameService } from "../services/game.service";
import { Game } from "../models/game";
import { Pool } from "pg";

export class GamesController {
  private readonly gameService: GameService;

  constructor(private readonly dbConnection: Pool) {
    this.gameService = new GameService(this.dbConnection);
  }

  async list(response: Response) {
    const { games, error } = await this.gameService.getGames();

    if (error) {
      response.status(500).json({ error });
    } else {
      response.status(200).json(games);
    }
  }

  async show(request: Request, response: Response) {
    const gameID = parseInt(request.params.id);

    const { game, error } = await this.gameService.getGame(gameID);

    if (error) {
      response.status(500).json({ error });
    } else if (!game) {
      response.status(404).send({message: "Game not found"});
    } else {
      response.status(200).json(game);
    }
  }

  async create(request: Request, response: Response) {
    const newGame: Game = this.setGameEntity(request.body);

    const { game, error } = await this.gameService.insertGame(newGame);

    if (error) {
      response.status(500).json({ error });
    } else {
      response.status(201).json(game);
    }
  }

  async update(request: Request, response: Response) {
    const gameID = parseInt(request.params.id);
    const modGame: Game = this.setGameEntity(request.body);

    const { game, error } = await this.gameService.updateGame(gameID, modGame);

    if (error) {
      response.status(500).json({ error });
    } else {
      response.status(200).json(game);
    }
  }

  async destroy(request: Request, response: Response) {
    const gameID = parseInt(request.params.id);

    const { error } = await this.gameService.deleteGame(gameID);

    if (error) {
      response.status(500).json({ error });
    } else {
      response.status(200).json({message: 'Game was Deleted'});
    }
  }

  private setGameEntity(data: any): Game {

    const game: Game = {
      description: data.description,
      location: data.location,
      matchDate: data.matchDate,
      score: data.score,
      teamLocal: data.teamLocal,
      teamVisit: data.teamVisit,
    };

    return game;
  }
}
