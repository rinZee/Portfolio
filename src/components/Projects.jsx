import React from 'react';
import './Projects.css';
import Project from './Project';
import chat from '../assets/chat.png';
import foodbook from '../assets/FoodBook.png';

export const Projects = () => {
    return (
        <div className={"projects"}>
            <div id="content">
            <h1>Projects</h1>
            <p>These are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up!</p>
        </div>
        <div className="cards">      
        < Project title={'ChatUp'} code={'https://github.com/rinZee/Chat-Up'} site={"https://chat-upp.herokuapp.com/"} photo={chat} description={'This is a chat application built with socket.io using next.js'}/>
        < Project title={'CookBook'} code={'https://github.com/rinZee/React-recipe'} site={"https://rinzee.github.io/React-recipe/"} photo={foodbook} description={'This is a recipe app that uses react-router and context api'}/>
         
</div>
        </div>
    )
}
