import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heart_solid from "../assets/heart-solid.png";
import heart_outline from "../assets/heart-regular.png";
import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

const GameInfo = () => {
    const [game, setGame] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { title, genre, rating, picture, is_favorite, creation_date } = game;
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API}/games/${id}`)
            .then((res) => {
                console.log(res.data);
                setGame(res.data);
            })
            .catch((c) => {
                navigate("/404")
                console.error("catch", c)
            });
            }, [id, navigate]);

    const goBack = (e) => {
        e.preventDefault();
        window.history.back();
    };

    return (
        <div className="card-body text-center">
            <article>
                <h3>
                    {title}{" "}
                    <img 
                        src={is_favorite ? heart_solid : heart_outline} 
                        height="20px" 
                        width="20px" 
                        alt="healthy-unhealthy" 
                    />
                </h3>
                <br></br>
                <img src={picture} alt={title} height="200px" width="200px" />
                <br></br>
                <br></br>
                <container className="container">
                <h4>Creation Date: {creation_date}</h4>
                <h4>Genre: {genre}</h4>
                <h4>Rating: {rating}</h4>
                </container>

                <div className="d=flex-show=buttons">
                    <div>
                        <button className="btn btn-dark" onClick={goBack}>
                            Back
                        </button>
                    </div>
                    <div>
                        <Link to={`/games/${id}/edit`}>
                            <button className="btn btn-warning">Edit</button>
                        </Link>
                    </div>
                    <div>
                        <ConfirmDelete
                            id={id}
                            navigate={navigate}
                            show={show}
                            handleClose={handleClose}
                            handleShow={handleShow}
                        />
                    </div>
                </div>
            </article>
        </div>
    );
};

export default GameInfo;