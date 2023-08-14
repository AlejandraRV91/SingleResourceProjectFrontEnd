import React from "react";
import { Link } from "react-router-dom";

const Game = ( { game, index }) => {
    return (
        <tr>
            <td>
               <Link to={`/games/${index}`}>
                <img src={game.picture} alt={`${game.title} img`} width="42" height="42"/>
                {game.title}
                </Link> 
            </td>
        </tr>
    )
}

export default Game; 