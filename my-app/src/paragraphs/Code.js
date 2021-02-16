import React from 'react';
import { FaCopy } from 'react-icons/fa';
import './Code.css'

class Code extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="CodeContainer">
                <div
                    className="CopyCode"
                    onClick={this.props.copyCode}>
                    <FaCopy className="ContentIcon"/>
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
        )
    }
}

export default Code;