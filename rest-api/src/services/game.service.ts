import { Pool } from "pg";
import { Game } from "../models/game";

export class GameService {
  private readonly DB: Pool;

  constructor(dbConnection: Pool) {
    this.DB = dbConnection;
  }

  async getGames(): Promise<{games: Array<Game>, error?: any | undefined}> {
    try {
      const {rows} = await this.DB.query("SELECT * FROM games ORDER BY id ASC");
      
      return {
        games: rows as Array<Game>
      };
    } catch (error) {

      return {games: [], error};
    }
  };

  async getGame(id: number): Promise<{game: Partial<Game>, error?: any | undefined}> {
    try {
      const { rows } = await this.DB.query("SELECT * FROM games WHERE id = $1", [id]);

      return {
        game: rows[0] as Game
      }
    } catch (error) {

      return {
        game: {},
        error
      }
    }
  };

  async insertGame(game: Game): Promise<{game: Partial<Game>, error?: any | undefined}> {
    try {
      const dataValues = Object.values(game);
      const dataFields = Object.keys(game);

      const query = `
        INSERT INTO games 
        (${dataFields.join(', ')}) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING *
      `;

      const { rows } = await this.DB.query(query, dataValues);

      return {
        game: rows[0] as Game
      }
    } catch (error) {
      
      return {
        game: {},
        error
      }
    };
  };

  async updateGame(id: number, game: Game): Promise<{game: Partial<Game>, error?: any | undefined}> {
    try {

      let updateFields: Array<string> = [];
      for (const [field, value] of Object.entries(game)) {
         // cool info about ts and k, v iterations -> https://effectivetypescript.com/2020/05/26/iterate-objects/
        updateFields.push(`${field} = '${value}'`);
      }

      const query: string = `
        UPDATE games 
        SET ${updateFields.join(', ')} 
        WHERE id = $1 
        RETURNING *
      `;

      const { rows } = await this.DB.query(query, [id]);      

      return {
        game: rows[0] as Game
      }
    } catch (error) {

      return {
        game: {},
        error
      }
    };
  };

  async deleteGame(id: number): Promise<{error?: any | undefined}> {
    try {
      await this.DB.query('DELETE FROM games WHERE id = $1', [id]);

      return {};
    } catch (error) {

      return {
        error
      }
    };
  };

};
