import React, { useState } from 'react';
import './_styles/footer-styles.css';

const Footer = ({appendFilter, completedCount, clearCompleted}) => {
    const [choosenFilter, setChoosenFilter] = useState('all');

    const linkFilter = (value) => {
        appendFilter(value);
        switch (value) {
            case 'all':
                setChoosenFilter('all');
                break;
            case 'active':
                setChoosenFilter('active');                
                break;
            case 'completed':
                setChoosenFilter('completed');                
                break;
            default:
                return null;
        }
    }

    const allFilterClass = `filters__element link all-filter ${ choosenFilter==='all' ? 'choosen' : '' }`
    const activeFilterClass = `filters__element link active-filter ${ choosenFilter==='active' ? 'choosen' : '' }`
    const completedFilterClass = `filters__element link completed-filter ${ choosenFilter==='completed' ? 'choosen' : '' }`

    return(
        <footer className={"footer"}>
            <ul className="list filters-list">
                <li onClick={ () => linkFilter('all') } className={allFilterClass}>All</li>
                <li onClick={ () => linkFilter('active') } className={activeFilterClass}>Acitve</li>
                <li onClick={ () => linkFilter('completed') } className={completedFilterClass}>Completed</li>
            </ul>
            <span className="task-counter">{ completedCount } task{ (completedCount !== 1) ? 's' : '' } left</span>
            <span className="clear-completed link" onClick={ () => clearCompleted() }>Clear completed</span> 
        </footer>
    )
}



export default Footer