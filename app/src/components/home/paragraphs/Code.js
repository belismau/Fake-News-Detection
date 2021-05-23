import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import './Code.css'

class Code extends React.Component {
    render() {
        return(
            <div className="CodeDiv">
                <div className="topBar">
                    <div className="redCircle"></div>
                    <div className="yellowCircle"></div>
                    <div className="greenCircle"></div>
                </div>
                <div className="CodeContainer">
                    <div
                        className="CopyCode"
                        onClick={this.props.copyCode}>
                        <FaRegCopy className="ContentIcon"/>
                    </div>

                    <div className="Code">
                        {this.props.codeContent}
                    </div>
                </div>
            </div>
        )
    }
}

export default Code;