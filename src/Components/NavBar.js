import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navbar">
            <h1 className="text-center header">Video Games</h1>
            <Nav fill className="content">
                <Nav.Item className="all-games">
                    <Link to={`/games`}>All Games</Link>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="outline-info" className="add-game">
                        <Link to={`/games/new`}>Add a Game</Link>
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavBar; 