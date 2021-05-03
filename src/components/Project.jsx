import React from 'react'
import './Project.css'
const Project = ({title,code, site, photo}) => {
    return (
        <div className="card">
            <img src={photo} alt=""/>
             <p>{title}</p>
             <a href={code} target='_blank' rel="noopener noreferrer">show code</a>
             <a href={site} target='_blank' rel="noopener noreferrer">open site</a>
         </div>
    )
}

export default Project
