import React from 'react';
import './Projects.css';

export const   Projects = () => {
    return (
        <div className={"projects"}>
            <div id="content">
            <h1>Projects</h1>
            <p>These are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up!</p>
        </div>
        <div className="cards">      
         <div className="card">
             <img src={require('../assets/chat.png')} alt=""/>
             <p>ChatUp</p>
             <a href="https://github.com/rinZee/Chat-Up" target='_blank' rel="noopener noreferrer">show code</a>
             <a href="https://chat-upp.herokuapp.com/" target='_blank' rel="noopener noreferrer">open site</a>
         </div>
         <div className="card">
             <img src={require('../assets/FoodBook.png')} alt=""/>
             <p>FoodBook</p>
             <a href="https://github.com/rinZee/React-recipe" target='_blank' rel="noopener noreferrer">show code</a>
             <a href="https://chat-upp.herokuapp.com/" target='_blank' rel="noopener noreferrer">open site</a>
         </div>
</div>
        </div>
    )
}
