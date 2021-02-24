import React from 'react';
import './FormHeader.css'

class FormHeader extends React.Component {
    render() {
        return(
            <div className="topBarCont">
                <div className="topBarInput">
                    <div className="redCircleI"></div>
                    <div className="yellowCircleI"></div>
                    <div className="greenCircleI"></div>
                    <div 
                        className="appTab"
                        onClick={this.props.handleAppClick}
                    >
                        <img 
                            src="https://i.imgur.com/NKNBoBm.png" 
                            alt="Icon"
                        />
                        <p>app</p>
                    </div>
                    <div 
                        className="resTab"
                        onClick={this.props.handleResClick}
                    >
                        <img 
                            src="https://i.imgur.com/NKNBoBm.png" 
                            alt="Icon"
                        />
                        <p>result</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormHeader;