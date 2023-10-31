import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import GamesService from "../../services/GamesService";

type Props = {
  gameId: number;
  children: ReactNode
}
export const DeleteGame = (props: Props) => {

  const service = new GamesService();
  const navigate = useNavigate();


  const handleDelete = (id: number) => {
    service
      .deleteGame(id)
      .then((message: string) => {
        navigate("/");
        alert(message);
      }).catch((err) => alert('Cannot be deleted...'));
  };

  return (
  <div style={{display: 'initial', position: 'initial'}} onClick={() => handleDelete(props.gameId)}>
    {props.children}
  </div>
  );
};
