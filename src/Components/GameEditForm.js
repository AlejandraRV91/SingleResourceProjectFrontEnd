import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const GameEditForm = () => {
    const API = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    let navigate = useNavigate();

    const [edit, setEdit ] = useState({
        title: "",
        creation_date: "",
        genre: "",
        rating: "",
        picture: "",
    });

    const updateGame = (updatedGame) => {
        axios
            .put(`${API}/games/${id}`, updatedGame)
            .then(
                () => {
                    navigate(`/games/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const handleText = (e) => {
        setEdit({ ...edit, [e.target.id]: e.target.value })
    };

    useEffect(() => {
        axios.get(`${API}/games/${id}`).then (
            (res) => setEdit(res.data),
            (error) => navigate(`/not-found`)
        );
    }, [id, navigate, API]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGame(edit, id);
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="edit_labels">Title:</label>
                <input
                    id="title"
                    value={edit.title}
                    type="text"
                    onChange={handleText}
                    placeholder="Title of Game"
                    required
                />

                <br></br>

                <label htmlFor="creation_date" className="edit_labels">Creation Date:</label>
                <input
                    id="creation_date"
                    value={edit.creation_date}
                    type="text"
                    name="creation_date"
                    onChange={handleText}
                />

                <br></br>

                <label htmlFor="genre" className="edit_labels">Genre:</label>
                <input
                    id="genre"
                    value={edit.genre}
                    type="text"
                    name="genre"
                    onChange={handleText}
                />

                <br></br>

                <label htmlFor="rating" className="edit_labels">Rating:</label>
                <input
                    id="rating"
                    value={edit.rating}
                    type="text"
                    onChange={handleText}
                />

                <br></br>

                <label htmlFor="picture" className="edit_labels">Picture:</label>
                <input
                    id="picture"
                    type="text"
                    pattern="https://.*"
                    onChange={handleText}
                    value={edit.picture}
                />

                <br></br>

                <input className="edit-submit" type="submit" style={{color:" rgb(0, 0, 0)"}}/>
            </form>
            <Link to={`/games/${id}`}>
                <button className="edit-button">Nevermind!</button>
            </Link>
        </div>
    );
};

export default GameEditForm;