import React from 'react';
import './Form.css'

class Form extends React.Component {
    render() {
        return(
            <form 
                method="POST"
                className="Form"
            >
                <textarea
                    className   =   "InputNews"
                    type        =   "text"
                    id          =   "news"
                    placeholder =   "Ange eller klistra in en nyhet..."
                    value       =   {this.props.value}
                    onChange    =   {this.props.handleChange}
                />
            </form>
        )
    }
}

export default Form;