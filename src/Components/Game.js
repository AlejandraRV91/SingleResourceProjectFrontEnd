import React from "react";
import { Link } from "react-router-dom";

const Game = ( { game }) => {
    return (
        <div className="game-card">
            <Link to={`/games/${game.id}`}>
                <img src={game.picture} alt={`${game.title} img`} width="42" height="42"/>
            </Link> 
            <br></br>
            <div className="name-and-health">
                <br></br>
                <h6>{game.name}</h6>{" "}
            <span> {game.is_favorite ?  <span>❤️</span> : <span> ♡ </span>}</span>
            <br></br>
            <br></br>
            </div>
        </div>
    );
};

export default Game; 