import React from 'react';
import './Paragraphs.css';

class Problemformulering extends React.Component {
    render() {
        return(
            <div className="Paragraph">
                <h2> 2. Problemformulering </h2>
                <p>
                    På sistone har falska nyheter ökat markant. Den explosiva tillväxten 
                    av fejknyheter har visat sig ha flertalet negativa påföljder; bland 
                    annat ses dessa nyheter generellt som ett direkt hot mot demokratin [1]. 
                    Avsikten är oftast att vilseleda läsaren till att tro på något som inte 
                    är sant. Spridning av vilsele-dande information har också gjort det 
                    svårt att identifiera pålitliga nyhetskällor. Detta ökar behovet av 
                    verktyg som kan ge kännedom om tillförlitligheten hos innehåll, 
                    speciellt onlineinnehåll som bland annat förekommer i sociala medier. 
                    I nuläget finns diverse metoder för att någorlunda bromsa tillväxten av 
                    fejknyheter. Till exempel kan maskininlärning användas tillsammans med 
                    diverse algoritmer [2]. I denna uppsats kommer 
                    maskininlärningstekniker att användas tillsammans med ensemblemetod 
                    och algoritmen logistisk regression för automatisk identifiering av 
                    falskt innehåll på internet. Detta ska åstadkommas med hjälp av ett 
                    eller flera datasets. Modellens noggrannhet i procent kommer att tas 
                    fram för att skapa en uppfattning om dess tillförlitlighet mot det 
                    innehåll som användare i efterhand kommer att mata in. Därav har 
                    nedanstående fråga formulerats. 
                </p>

                <p className="problemArea">
                    Hur väl presterar algoritmen Logistisk Regression tillsammans med Ensemblemetoder 
                    för att identifiera Fake News? Kan algoritmens prestation/resultat förbättras?
                </p>

                <p>
                    Processen för att skapa en modell beståendes av flera klassificerare, 
                    vilket inkluderar logistisk regression, ska således kunna svara på om 
                    en sådan modell/algoritm är tillräckligt nyttig för att avgöra en nyhets 
                    pålitlighet. Projektet ska också ta reda på om algoritmens resultat kan 
                    förbättras och effektiviseras.
                </p>

                <p>
                    <span className="Bold">Nyckelord</span>
                    :&nbsp;Fake News/Falska nyheter, Maskininlärning, Ensemblemetoder, Logistisk 
                    Regression.
                </p>
            </div>
        )
    }
}

export default Problemformulering;
