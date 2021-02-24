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
                        {this.props.codeImport ?
                            <div className="CodeImport">
                                <span>import </span> 
                                <span>{this.props.codeImport}</span>
                            </div>
                        : null }

                        {this.props.function ?
                            <div className="CodeFunction">
                                <span className="CodeDef">{this.props.function} </span>
                                <span 
                                    className="CodeDefName">
                                    {this.props.name}
                                </span>
                                <span>
                                    ({this.props.parameter}):
                                </span>
                                {this.props.functionCode.map((str, i) => 
                                    <p 
                                        key={i}
                                        className="ContentDragIn">
                                        {str}
                                    </p>
                                )}
                            </div>
                        : null }

                        {this.props.code ?
                            <div className="CodeRest">
                                {this.props.code.map((str, i) => 
                                    <p
                                        key={i}>
                                        {str}
                                    </p>
                                )}
                            </div>
                        : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default Code;