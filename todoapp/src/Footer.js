import React from 'react';
import './_styles/footer-styles.css';

<<<<<<< HEAD
const Footer = (props) => {
    return(
        <footer className="footer">
            <ul className="list filters-list">
                <li className="filters__element link all-filter choosen">All</li>
                <li className="filters__element link active-filter">Acitve</li>
                <li className="filters__element link completed-filter">Completed</li>
            </ul>
            <span className="task-counter">{ props.completedCount } task{ (props.completedCount !== 1) ? 's' : '' } left</span>
            <span className="clear-completed link" onClick={ () => props.clearCompleted() }>Clear completed</span> 
        </footer>
    )
=======
class Footer extends Component {
    render() {
        if (this.props.todos.length > 0) {
        return(
            <footer className="footer">
                <ul className="list filters-list">
                    <li className="filters__element link all-filter choosen">All</li>
                    <li className="filters__element link active-filter">Acitve</li>
                    <li className="filters__element link completed-filter">Completed</li>
                </ul>
                <span className="task-counter">{ this.props.completedCount } task{ (this.props.completedCount !==1) ? 's' : '' } left</span>
                <span className="clear-completed link" onClick={ () => this.props.clearCompletedClick }>Clear completed</span> 
            </footer>
        )
        } else {
            return null
        }
    }
>>>>>>> 0e7a028706db13e3cd72df14a9bb3d8b5d50227a
}


export default Footer