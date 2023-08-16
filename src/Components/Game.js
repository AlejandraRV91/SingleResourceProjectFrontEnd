import React from "react";
import { Link } from "react-router-dom";

const Game = ( { game }) => {
    return (
        <div className="game-card">
            <Link to={`/games/${game.id}`}>
                <img src={game.picture} alt={`${game.title} img`} width="250px" />
            </Link> 
            <br></br>
            <div className="title-and-favorite">
                <br></br>
                <h6>{game.title}</h6>{" "}
            <span> {game.is_favorite ?  <span>❤️</span> : <span> ♡ </span>}</span>
            <br></br>
            <br></br>
            </div>
        </div>
    );
};

export default Game; 