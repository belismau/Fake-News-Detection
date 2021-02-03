import React from 'react';
import './Content.css';
import TableOfContents from './TableOfContents';
import Motivation from './paragraphs/Motivation'
import Methods from './paragraphs/Methods';
import References from './paragraphs/References';

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            copyText: this.copyText
        }

        this.copyText = this.copyText.bind(this)
    }

    copyText(e) {
        var range = document.createRange();
        range.selectNode(e.target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();

        
    }

    render() {
        return(
            <div className="ContentContainer">
                <TableOfContents />
                <Motivation copyText={this.state.copyText} />
                <Methods />
                <References />
            </div>
        )
    }
}

export default Content;