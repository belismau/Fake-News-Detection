import React from 'react';
import './Content.css';
import TableOfContents from './TableOfContents';
import Problemformulering from './paragraphs/Problemformulering'
import Introduktion from './paragraphs/Introduktion';
import References from './paragraphs/References';
import RelateratArbete from './paragraphs/RelateratArbete';
import BefintligaLosningar from './paragraphs/BefintligaLosningar';
import MojligaLosningar from './paragraphs/MojligaLosningar';
import SlutgiltigLosning from './paragraphs/SlutgiltigLosning';

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            copyText: this.copyText
        }

        this.copyText = this.copyText.bind(this)
    }

    copyText(e) {
        var code = document.getElementsByClassName('Code')[0];
        var range = document.createRange();
        range.selectNode(code);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }

    render() {
        return(
            <div className="ContentContainer">
                <TableOfContents />
                <Introduktion />
                <Problemformulering copyText={this.state.copyText} />
                <RelateratArbete />
                <BefintligaLosningar />
                <MojligaLosningar />
                <SlutgiltigLosning />
                <References />
            </div>
        )
    }
}

export default Content;