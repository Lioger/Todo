import React, { Component } from 'react';
import FooterGenerator from './FooterGenerator';
import './_styles/footer-styles.css';

class Footer extends Component {
    state = {
        choosenFilter: 'all'
    }

    linkFilter = (value) => {
        this.props.appendFilter(value);
        switch (value) {
            case 'all':
                this.setState({
                    choosenFilter: 'all'
                });
                break;
            case 'active':
                this.setState({
                    choosenFilter: 'active'
                });                
                break;
            case 'completed':
                this.setState({
                    choosenFilter: 'completed'
                });                
                break;
            default:
                return null;
        }
    }
    render(){
        const hideStatus = !this.props.showFooter ? 'hidden' : '';

        const allFilterClass = `filters__element link all-filter ${ this.state.choosenFilter==='all' ? 'choosen' : '' }`
        const activeFilterClass = `filters__element link active-filter ${ this.state.choosenFilter==='active' ? 'choosen' : '' }`
        const completedFilterClass = `filters__element link completed-filter ${ this.state.choosenFilter==='completed' ? 'choosen' : '' }`

        const filterClassArr = [allFilterClass, activeFilterClass, completedFilterClass];

        return(
            <FooterGenerator hideStatus={ hideStatus } 
                linkFilter={ this.linkFilter }
                filterClassArr={ filterClassArr } 
                completedCount={ this.props.completedCount } 
                clearCompleted={ this.props.clearCompleted }
            />
        )
    }
}


export default Footer