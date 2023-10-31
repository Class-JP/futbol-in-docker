import { useEffect, useState } from "react";
import { Game } from "../../models/game.model";

interface FormProps {
  data: Partial<Game>;
  onSave: (newGame: Partial<Game>) => void
}
export const GamesForm = ({data, onSave}:FormProps)=> {

  const [game, setGame] = useState<Partial<Game>>({});

  useEffect(() => {
    setGame(data)
  }, [data]);

  const onChange = (e: any) => {
    const input = e.target;
    const key = input.name as keyof Game;
    const value = input.value;

    const changedGame = {...game};
    changedGame[key] = value;

    setGame(changedGame);
  };

  return (
    <div className="px-20">
        <form className="w-full">
      {/* Description */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Game
        </label>
        <input
          type="description"
          id="description"
          name="description"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="IE: UEFA Champions League Semi-Final"
          required
          value={game.description || ""}
          onChange={onChange}
        />
      </div>
      {/* Home Team */}
      <div className="mb-6">
        <label
          htmlFor="teamlocal"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Home Team
        </label>
        <input
          type="teamlocal"
          id="teamlocal"
          name="teamlocal"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="IE: Real Madrid"
          required
          value={game.teamlocal || ""}
          onChange={onChange}
        />
      </div>
      {/* Visit Team */}
      <div className="mb-6">
        <label
          htmlFor="teamvisit"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Visit Team
        </label>
        <input
          type="teamvisit"
          id="teamvisit"
          name="teamvisit"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="IE: Jueventus"
          required
          value={game.teamvisit || ""}
          onChange={onChange}
        />
      </div>
      {/* Location */}
      <div className="mb-6">
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Location
        </label>
        <input
          type="location"
          id="location"
          name="location"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="IE: Old Trafford"
          required
          value={game.location || ""}
          onChange={onChange}
        />
      </div>
      {/* Location */}
      <div className="mb-6">
        <label
          htmlFor="score"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Score
        </label>
        <input
          type="score"
          id="score"
          name="score"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="IE: 2-2"
          required
          value={game.score || ""}
          onChange={onChange}
        />
      </div>
      {/* Match Date */}
      <div className="mb-6">
        <label
          htmlFor="matchdate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Match Date
        </label>
        <input
          type="matchdate"
          id="matchdate"
          name="matchdate"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="IE: 2-2"
          required
          value={game.matchdate || ""}
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => onSave(game)}
      >
        Save
      </button>
    </form>      
    </div>
  );
};
