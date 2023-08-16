import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const GameNewForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [picture, setPicture] = useState("");
    const [genre, setGenre] = useState("");
    const [creation_date, setCreationDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(`${API}/games`, {
                rating,
                title,
                picture,
                genre,
                creation_date,
            })
            .then(() => {
                navigate("/games");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="image" className="new_labels">Image</label>
                <input
                onChange={(e) => setPicture(e.target.value)}
                id="image"
                name="image"
                type="text"
                value={picture}
                />

                <br></br>

                <label htmlFor="title" className="new_labels">Title</label>
                <input
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                name="title"
                type="text"
                value={title}
                />

                <br></br>

                <label htmlFor="creation_date" className="new_labels">Creation Date</label>
                <input
                onChange={(e) => setCreationDate(e.target.value)}
                id="creation_date"
                name="creation_date"
                type="text"
                value={creation_date}
                />

                <br></br>

                <label htmlFor="genre" className="new_labels">Genre</label>
                <input
                onChange={(e) => setGenre(e.target.value)}
                id="genre"
                name="genre"
                type="text"
                value={genre}
                />

                <br></br>

                <label htmlFor="rating" className="new_labels">Rating</label>
                <input
                onChange={(e) => setRating(e.target.value)}
                id="rating"
                name="rating"
                type="text"
                value={rating}
                />

                <br></br>
                
                <input classname="new-submit" type="submit" value="submit" style={{color:" rgb(0, 0, 0)"}}/>
            </form>
        </div>
    )
}

export default GameNewForm;