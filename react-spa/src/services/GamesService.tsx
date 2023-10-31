import axios from "axios";
import HttpService from "./HttpService";
import { Game } from "../models/game.model";

export default class GamesService extends HttpService {

  public async fetchGames(): Promise<Game[]> {
    try {
      const { data } = await axios.get(`${this.API_HOST}/games`);

      return data as Game[];
    } catch (error) {

      throw error;
    }
  }

  public async fetchGame(id: number) {
    try {
      const { data } = await axios.get(`${this.API_HOST}/games/${id}`);

      return data as Game;
    } catch (error) {

      throw error;
    }
  }

  public async createGame(game: Partial<Game>) {
    try {
      const {id: ommited, ...payload} = game;

      await axios.post(`${this.API_HOST}/games`, payload);
    } catch (error) {
      console.error(error);
      
      throw error;
    }
  }

  public async updateGame(id: number, game: Partial<Game>) {
    try {
      const {id: ommited, ...payload} = game;

      await axios.put(`${this.API_HOST}/games/${id}`, payload);
    } catch (error) {
      console.error(error);
      
      throw error;
    }
  }

  public async deleteGame(id: number) {
    try {
      const { data } = await axios.delete(`${this.API_HOST}/games/${id}`);
      const  { message } = data as { message: string };

      return message;
    } catch (error) {

      throw error;
    }
  }
}
