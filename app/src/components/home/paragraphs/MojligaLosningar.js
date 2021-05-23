import React from 'react';
import './Paragraphs.css';

class MojligaLosningar extends React.Component {
    render() {
        return(
            <div className="Paragraph">
                <h2> Möjliga Lösningar </h2>
                <p>
                    Lösningen för att identifiera falska nyheter med logistisk regression 
                    kan som tidigare nämnts utföras med bland annat automatiska och manuella 
                    faktakontroller, förökningsvägar och prediktiva modelleringsbaserade 
                    metoder. För att öka modellens prestat-ion och förbättra resultatet 
                    ytterligare kan ensemblemetoder inkluderas i processen där prediktiva 
                    modelleringsbaserade metoder tillämpas. Maskininlärningstekniken ger 
                    möjlighet till kombination med två eller flera modeller för att producera 
                    en ny, optimal och förutsägbar modell. Med andra ord kan ett antal modeller 
                    tas med i beräkningarna för att producera en slutgiltig modell som 
                    förutsäger det önskade resultatet [12]. Det finns flera typer av 
                    ensemblemetoder som är anpassade till olika ändamål; de vanligaste är 
                    Bagging och Boosting. Kort sagt handlar Bagging om att dela upp 
                    träningsdelen i flera ”sub samples” som matas in till varje modell, 
                    medan idén bakom Boosting är konvertering av ”weak learners”  till ”strong 
                    learners” i sekventiella iterationer [13]. Till exempel kan dessa 
                    ensemblemetoder implementeras med sklearn, vilken ger tillgång till 
                    klassen VotingClassifier().
                </p>
                <p>
                    Nedan följer en enkel illustration av hur ensemblemetoder kan utföras, 
                    där fyra olika klassificerare används. Bland annat nyttjas logistisk 
                    regression och SVM som inmatningsklassificerare i följande exempel.
                </p>
                <div className="ContentPictureDiv">
                    <img 
                        className="ContentPicture miniPic"
                        src="../img/ensemblemetoder.png"
                        alt="ensemblemetoder"
                    />
                </div>
                {/*<h4 className="ContentPictureText">
                    Figur 2: Illustration av ensemblemetod
                </h4>*/}
            </div>
        )
    }
}

export default MojligaLosningar;
