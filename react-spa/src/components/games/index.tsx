import React, { Component, ReactNode } from "react";
import GamesService from "../../services/GamesService";
import { NavLink } from "react-router-dom";

import { Game } from "../../models/game.model";
import { DeleteGame } from "./delete";
import { formatDate } from "../utils/format";

interface State {
  games: Game[];
  error?: boolean;
}

export class Games extends Component<{}, State> {
  private readonly gamesService: GamesService;

  constructor(props: {}) {
    super(props);

    this.gamesService = new GamesService();

    this.state = {
      games: [],
      error: false,
    };
  }

  componentDidMount() {
    this.fetchGames();
  };

  async fetchGames() {
    this.gamesService
      .fetchGames()
      .then((games) => {

        this.setState({
          games,
        });
      })
      .catch((err) => {
        console.error(err);

        this.setState({ error: true });
      });
  };

  render() {

    const headerPanel = (): ReactNode =>  {
      return <div className="header-panel md:container md:mx-auto content-center text-right">
        <a
          href="/games/new"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Add Game
        </a>
      </div>;
    }

    const gamesTable = () => (
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Game
            </th>
            <th scope="col" className="px-6 py-3">
              Home Team
            </th>
            <th scope="col" className="px-6 py-3">
              Visit Team
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Match Date
            </th>
            <th scope="col" className="px-6 py-3">
              Score
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.games.map((game: Game) => (
            <tr 
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={`${game.id}-game-row`}
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <NavLink className='text-blue-600' to={`/games/${game.id}`}>{ game.description }</NavLink>
              </th>
              <td className="px-6 py-4">{ game.teamlocal }</td>
              <td className="px-6 py-4">{ game.teamvisit }</td>
              <td className="px-6 py-4">{ game.location }</td>
              <td className="px-6 py-4">{ formatDate(game.matchdate) }</td>
              <td className="px-6 py-4">{ game.score }</td>
              <td className="px-6 py-4 text-right">
                <NavLink to={`/games/${game.id}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </NavLink>
                <DeleteGame gameId={Number(game.id)}>
                  <button style={{width: 0}}className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-6">
                    Delete
                  </button>
                </DeleteGame>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    
    const loadFailJSX = (
      <div className="application-home md:container md:mx-auto content-center text-center">
        <span className="text-center">Games cannot be displayed now, try later.</span>
      </div>
    );

    return (
      <div className="game-list">
        {headerPanel()}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          { !!this.state.error ? loadFailJSX : gamesTable() }
        </div>
      </div>
    );
  }
}
