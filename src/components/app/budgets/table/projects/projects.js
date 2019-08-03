import React from 'react';
import './projects.css';

export default function Projects({projectsCount}) {
   
    return (
        <div className='budgets-table-projects'>
            <div>{projectsCount} {projectsCount === 1 ? 'project' : 'projects'}</div>
            <div><img src='images/icons-png/shevron.png' alt='shevron' /></div>   
        </div>
    )
}