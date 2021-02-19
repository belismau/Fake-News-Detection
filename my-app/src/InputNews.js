import React from 'react';
import './InputNews.css'

class InputNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            users: []
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
            body: JSON.stringify({ 'data': this.state.value }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(users => this.setState({ users }));
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
                {this.state.users.map(user =>
                    <p key={user.id}>{user.username}</p>
                )}
            </div>
        )
    }
}

export default InputNews;