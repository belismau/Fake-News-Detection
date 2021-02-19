import React from 'react';
import './InputNews.css'

class InputNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            result: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('/handlenews', {
            method: 'POST',
            body: JSON.stringify({ 'data': this.state.value}),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(res => this.setState({ result: res }));
    }

    render() {
        return(
            <div className="InputNewsCont">
                <form 
                    onSubmit  =   {this.handleSubmit}
                    method    =   "POST"
                >
                    <label> Klistra in en nyhet nedan. </label>
                    <textarea
                        className   =   "InputNews"
                        type        =   "text"
                        id          =   "news"
                        placeholder =   "Ange någon nyhet här..."
                        value       =   {this.state.value}
                        onChange    =   {this.handleChange}
                    />
                    <input
                        className   =   "InputNewsBtn"
                        value       =   "Skicka"
                        type        =   "submit"
                    />
                </form>
                <p> {this.state.result.data} </p>
            </div>
        )
    }
}

export default InputNews;