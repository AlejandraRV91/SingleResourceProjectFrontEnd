import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GameNewForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [picture, setPicture] = useState("");
    const [genre, setGenre] = useState("");
    const [creationDate, setCreationDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("http://localhost:3345/games", {
                rating,
                title,
                picture,
                genre,
                // is_favorite,
                // creation_date,
            })
            .then(function (response) {
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h3>Add a New Game</h3>

            <form onSubmit={handleSubmit}>
                <label for="image">Image</label>
                <input
                onChange={(e) => setPicture(e.target.value)}
                id="image"
                name="image"
                type="text"
                value={picture}
                />

                <label for="game-title">Title</label>
                <input
                onChange={(e) => setTitle(e.target.value)}
                id="game-title"
                name="game-title"
                type="text"
                value={title}
                />

                <label for="creation-date">Date Created</label>
                <input
                onChange={(e) => setCreationDate(e.target.value)}
                id="creation-date"
                name="creation-date"
                type="text"
                value={creationDate}
                />

                <label for="genre">Genre</label>
                <input
                onChange={(e) => setGenre(e.target.value)}
                id="genre"
                name="genre"
                type="text"
                value={genre}
                />

                <label for="rating">Rating</label>
                <input
                onChange={(e) => setRating(e.target.value)}
                id="rating"
                name="rating"
                type="text"
                value={rating}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default GameNewForm;