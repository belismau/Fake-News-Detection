import React from 'react';
import './Paragraphs.css';
import Code from './Code';

class Motivation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            functionCode: [
                "all_list = [char for char in text if char not in string.punctuation]",
                "clean_str = ''.join(all_list)",
                "return clean_str"
            ],
            code: [
                "data['text'] = data['text'].apply(punctuation_removal)",
                "data['text'] = data['text'].apply(punctuation_removal)"
            ]
        }
    }
    render() {
        return(
            <div className="Paragraph">
                <h2> 1. Motivation </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
                    lectus velit, mattis eget euismod in, lacinia a ex. Proin egestas 
                    orci pellentesque ligula lacinia, at condimentum risus placerat.&nbsp;
                    <span className="Underline">Curabitur</span>
                    &nbsp;congue neque ullamcorper ligula ultricies consequat. 
                    Maecenas ac eros aliquet, sodales eros nec, varius tellus. 
                    Etiam molestie ligula ipsum, sed tristique risus dictum ac. Sed 
                    feugiat neque sed risus tristique posuere. Ut fringilla suscipit 
                    est. Nullam dignissim porta odio ut suscipit. Quisque vel neque 
                    magna. Aenean ut feugiat dolor.&nbsp;
                    <span className="Link">Vestibulum</span> 
                    &nbsp;et consequat turpis. 
                    In sed dolor purus. Nulla molestie odio sit amet molestie vehicula. 
                    Aenean tellus elit, molestie in arcu et, imperdiet tincidunt libero. 
                    Cras sit amet lacus porta, iaculis metus a, varius justo. Integer non 
                    nisl aliquam nisi blandit ultricies.
                </p>
                <Code 
                    function      =   {"function"}
                    name          =   {"remove"}
                    parameter     =   {"item"}
                    codeImport    =   {"math"}
                    functionCode  =   {this.state.functionCode}
                    code          =   {this.state.code}
                />
                <p> 
                    Sed at sapien ante. In sed diam ante. Morbi felis ex, ullamcorper 
                    vel accumsan eu, feugiat sed mauris. Suspendisse ut venenatis mauris. 
                    Vestibulum sit amet ullamcorper risus.
                </p>
            </div>
        )
    }
}

export default Motivation;
