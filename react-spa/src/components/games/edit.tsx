import React, {useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Game } from "../../models/game.model";
import { GamesForm } from "./form";
import GamesService from "../../services/GamesService";


export const GamesEdit = (props: {}) => {
  
  const { id  } = useParams();
  
  const [game, setGame] = useState<Partial<Game>>({});
  const [err, setErr] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const service = new GamesService();
  
    service
    .fetchGame(Number(id))
    .then((game: Game) => setGame(game))
    .catch(err => setErr(!!err));
  }, [id]);
  
  const loadFailJSX = (
    <div className="application-home md:container md:mx-auto content-center text-center">
      <span className="text-center">Games cannot be displayed now, try later.</span>
    </div>
  );
  
  
  const handleOnSave = (newGame:  Partial<Game>) => {
    const service = new GamesService();

    service
      .updateGame(Number(id), newGame)
      .then(() => {
        alert('Info Updated!');
        navigate("/games");
      })
      .catch((err) => {
        console.error(err);
        
        alert('Something Went Wrong!')
      });
  };


  

  return (
    <div>
      <h1 className="w-full px-20 py-10">Edit Game</h1>
      { !!err ? loadFailJSX : <GamesForm data={game} onSave={handleOnSave} /> }
    </div>
  );
};