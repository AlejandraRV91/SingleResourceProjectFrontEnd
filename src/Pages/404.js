import React from "react"
import { Link } from "react-router-dom"
import lostInSpace from "../assets/space-404.jpg"

const four0Four = () => {
    return (
        <div className='text-center error'>
            <h1>Oh No, We're Lost In Space!</h1>
            <h3>Return <Link className='return-home' to="/">Home</Link></h3>
            <img src={lostInSpace} width='800px' height='600px' alt="lost in space"/>
        </div>
    )
}

export default four0Four