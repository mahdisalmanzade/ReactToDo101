import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} className="formStyle">
                <input 
                    type="text" 
                    name="title" 
                    className="addInput"
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="submit" 
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

// Prop Types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default AddTodo