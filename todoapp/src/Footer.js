import React, { Component } from 'react';
import './_styles/footer-styles.css';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <ul className="list filters-list">
                    <li className="filters__element link all-filter choosen">All</li>
                    <li className="filters__element link active-filter">Acitve</li>
                    <li className="filters__element link completed-filter">Completed</li>
                </ul>
                <span className="task-counter">{ this.props.completedCount } task{ (this.props.completedCount !==1) ? 's' : '' } left</span>
                <span className="clear-completed link hidden">Clear completed</span> 
            </footer>
        )
    }
}

export default Footer