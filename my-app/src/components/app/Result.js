import React from 'react';
import './Result.css'

class Result extends React.Component {
    render() {
        return(
            <div className="Result">
                <div>
                    {this.props.result.data ?
                        <p> {this.props.result.data} </p>
                    :
                        <p> Modellens resultat visas här... </p>
                    }
                </div>
            </div>
        )
    }
}

export default Result;