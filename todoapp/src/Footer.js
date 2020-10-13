import React from 'react';
import './_styles/footer-styles.css';

const Footer = (props) => {
    const sendFilterName = (e) => {
        if (e.target.className.includes('all-filter')) {
            props.appendFilter('all-filter');
        } else if (e.target.className.includes('active-filter')) {
            props.appendFilter('active-filter');
        } else if (e.target.className.includes('completed-filter')) {
            props.appendFilter('completed-filter');
        }
    } 


    const hideStatus = !props.showFooter ? 'hidden' : '';
    const choosen = 'choosen';
    return(
        <footer className={"footer " + hideStatus}>
            <ul className="list filters-list">
                <li onClick={ sendFilterName } className={'filters__element link all-filter ' + choosen}>All</li>
                <li onClick={ sendFilterName } className={'filters__element link active-filter '}>Acitve</li>
                <li onClick={ sendFilterName } className={'filters__element link completed-filter '}>Completed</li>
            </ul>
            <span className="task-counter">{ props.completedCount } task{ (props.completedCount !== 1) ? 's' : '' } left</span>
            <span className="clear-completed link" onClick={ () => props.clearCompleted() }>Clear completed</span> 
        </footer>
    )
}


export default Footer