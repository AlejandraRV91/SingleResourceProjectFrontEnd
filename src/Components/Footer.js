import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
        <ul>
          <h2>
            <img
            src="https://media.istockphoto.com/id/942803814/vector/video-game-controller-icon-silhouette.jpg?s=612x612&w=0&k=20&c=J0t3yfS6Rh6FxM8B7YGdmObohMQO7INX7i-oHnUw7yM="
            width="40px"
            height="40px"
            alt="game controller"
            ></img>
            Meet The Devs</h2>
          <li>
            <a href="https://github.com/winterbelle" target="_blank">
                Blanca Altamirano
            </a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/AlejandraRV91" target="_blank">
                Alejandra Ramirez
            </a>
          </li>
        </ul>
        </footer> 
    )
}

export default Footer;