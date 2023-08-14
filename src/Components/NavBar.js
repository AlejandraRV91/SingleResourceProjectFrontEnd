import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navbar">
            <h1 className="text-center header">
                {" "}
                <img src="https://media.istockphoto.com/id/942803814/vector/video-game-controller-icon-silhouette.jpg?s=612x612&w=0&k=20&c=J0t3yfS6Rh6FxM8B7YGdmObohMQO7INX7i-oHnUw7yM=" width="100px" height="100px"></img> {" "}
                Video Games
            </h1>
            <Nav fill className="content">
                <Nav.Item className="nav-all-games">
                <Button variant="warning" className="all-games">
                    <Link to={`/games`}>All Games</Link>
                </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="warning" className="add-game">
                        <Link to={`/games/new`}>Add a Game</Link>
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavBar; 