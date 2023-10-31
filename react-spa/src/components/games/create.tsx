import React from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "../../models/game.model";
import { GamesForm } from "./form";
import GamesService from "../../services/GamesService";


export const GamesCreate = (props: {}) => {
  
  const navigate = useNavigate();
  
  const handleOnSave = (newGame:  Partial<Game>) => {
  const service = new GamesService();

    service
      .createGame(newGame)
      .then(() => {
        alert('Game created');
        navigate("/games");
      })
      .catch((err) => {
        console.error(err);
        
        alert('Something Went Wrong!')
      });
  };

  

  return (
    <div>
      <h1 className="w-full px-20 py-10">Add Game</h1>
      <GamesForm data={{}} onSave={handleOnSave}></GamesForm>
    </div>
  );
};