import React from "react";
import { useState, useEffect } from "react";
import Game from "./Game";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/games`)
            .then((response) => {
                console.log(response);
                setGames(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="Games">
            <section>
                <table>
                    <tbody>
                        {games.map((game) => {
                            return <Game key={game.id} game={game} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Games;