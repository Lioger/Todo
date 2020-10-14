import React from 'react';

const FooterGenerator = ({hideStatus, linkFilter, filterClassArr, completedCount, clearCompleted}) => {
    return (
        <footer className={"footer " + hideStatus}>
            <ul className="list filters-list">
                <li onClick={ () => linkFilter('all') } className={filterClassArr[0]}>All</li>
                <li onClick={ () => linkFilter('active') } className={filterClassArr[1]}>Acitve</li>
                <li onClick={ () => linkFilter('completed') } className={filterClassArr[2]}>Completed</li>
            </ul>
            <span className="task-counter">{ completedCount } task{ (completedCount !== 1) ? 's' : '' } left</span>
            <span className="clear-completed link" onClick={ () => clearCompleted() }>Clear completed</span> 
        </footer>
    )
}

export default FooterGenerator;