import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../../models/game.model";
import GamesService from "../../services/GamesService";
import { formatDate } from "../utils/format";

export const ShowGame = (props: {}) => {
  const { id  } = useParams();
  const [game, setGame] = useState<Partial<Game>>({});

  
  useEffect(() => {
    const service = new GamesService();

    service
      .fetchGame(Number(id)).then((game: Game) => {
        setGame(game);
      }).catch(err => {
        console.error(err);
        alert('Game cannot be display, something went wrong.');
      })
  }, [id]);

  return (
    <div className="show-game px-80 py-10">
      <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <strong className="px-2">Game</strong>
          <span >{game.description}</span>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <strong  className="px-2">Home Team</strong>
          <span>{game.teamlocal}</span>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <strong  className="px-2">Visit Team</strong>
          <span>{game.teamvisit}</span>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <strong  className="px-2">Game Location</strong>
          <span>{game.location}</span>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <strong  className="px-2">Score</strong>
          <span>{game.score}</span>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <strong  className="px-2">Match Date</strong>
          <span>{ formatDate(game.matchdate) }</span>
        </li>
      </ul>
    </div>
  );
};
