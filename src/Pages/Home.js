import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div className='Home'>
            <h1> Keep track of your most favorite games! </h1>
            <Link to={"/games/new"}>
                <h2 className='home-link'>  Log a game now</h2> 
                <img src='https://media.npr.org/assets/img/2022/12/15/games-we-love-promo-2_wide-e5bf0208eadeea3b9b4952eb0b38df91e9e75715.jpg' alt='games' width="500px"/>
            </Link>

        </div>
    )
} 

export default Home;
