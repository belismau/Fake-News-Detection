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
                <h2> 1. Introduktion </h2>
                <p>
                    På sistone har <i>falska nyheter</i> ökat markant. Den explosiva tillväxten 
                    av fejknyheter har visat sig ha flertalet negativa påföljder; bland 
                    annat ses dessa nyheter generellt som ett direkt hot mot&nbsp;
                    <span className="Underline">demokratin</span>
                    &nbsp;[1]. Spridning av vilseledande information har även gjort det svårt att 
                    identifiera pålitliga nyhetskällor. Detta ökar behovet av verktyg 
                    som kan ge kännedom om tillförlitligheten hos onlineinnehåll. I 
                    nuläget finns diverse metoder för att bromsa tillväxten av fejknyheter. 
                    Bland annat kan <b>maskininlärningstekniker</b> användas för att identifiera 
                    pålitligheten hos digitala nyheter [2]. I denna uppsats kommer fokuset 
                    ligga på automatisk identifiering av falskt innehåll, med hjälp av 
                    ett dataset och <i>maskininlärning</i>, där algoritmen&nbsp;
                    <i>logistisk regression</i> tillämpas.
                </p>
                <Code 
                    function      =   {"function"}
                    name          =   {"remove"}
                    parameter     =   {"item"}
                    codeImport    =   {"math"}
                    functionCode  =   {this.state.functionCode}
                    code          =   {this.state.code}
                    copyCode      =   {this.props.copyText}
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
