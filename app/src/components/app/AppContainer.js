import React from 'react';
import Form from './Form';
import FormHeader from './FormHeader';
import Result from './Result';
import './AppContainer.css'

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            result: {},
            form: true,
            app: false
        };

        this.handleChange   = this.handleChange.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
        this.handleAppClick = this.handleAppClick.bind(this);
        this.handleResClick = this.handleResClick.bind(this);
    }

    handleAppClick(e) {
        this.setState({
            form: true,
            app: false
        })
        this.addClickedTab(e.target);
        this.removeClickedTab(document.getElementsByClassName('resTab')[0])
        document.getElementsByClassName('InputNewsBtn')[0].classList.remove('toggleSubmit');
    }

    handleResClick(e) {
        this.setState({
            form: false,
            app: true,
        })
        this.addClickedTab(e.target);
        this.removeClickedTab(document.getElementsByClassName('appTab')[0])
        document.getElementsByClassName('InputNewsBtn')[0].classList.add('toggleSubmit');
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    addClickedTab(element) {
        element.style.background    = 'rgb(193, 214, 0);';
        element.style.height        = '80%';
    }

    removeClickedTab(element) {
        element.style.background    = 'rgb(193, 214, 0);';
        element.style.height        = '70%';
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('/handlenews', {
            method: 'POST',
            body: JSON.stringify({ 'data': this.state.value}),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(res => this.setState({ 
            result: res,
            form: false,
            app: true
        }));
        this.addClickedTab(document.getElementsByClassName('resTab')[0])
        this.removeClickedTab(document.getElementsByClassName('appTab')[0])
        document.getElementsByClassName('InputNewsBtn')[0].classList.add('toggleSubmit');
    }

    render() {
        return(
            <div className="AppContainer">
                <div>
                    <FormHeader 
                        handleAppClick={this.handleAppClick}
                        handleResClick={this.handleResClick}
                    />
                    {this.state.form ?
                        <Form 
                            handleChange    =   {this.handleChange}
                            value           =   {this.state.value}
                        />
                    : 
                        <Result 
                            result={this.state.result}
                        />
                    }
                    <div className="BtnContainer">
                        <div 
                            className   =   "InputNewsBtn"
                            onClick     =   {this.handleSubmit}
                        >
                            <p> Skicka </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppContainer;