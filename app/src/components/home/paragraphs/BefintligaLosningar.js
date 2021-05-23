import React from 'react';
import './Paragraphs.css';
import Code from './Code';

class BefintligaLosningar extends React.Component {
    constructor() {
        super();
        this.state = {
            codeContent1:   <div>
                                <p>
                                    pipe = <span className="Code-blue">Pipeline</span>([<br />
                                    <span className="Code-indent">(
                                        <span className="Code-red">’vect’</span>, 
                                        <span className="Code-blue"> CountVectorizer</span>()),
                                    </span><br /> 
                                    <span className="Code-indent">(
                                        <span className="Code-red">’tfidf’</span>,
                                        <span className="Code-blue"> TfidfTransformer</span>()),
                                    </span><br />
                                    <span className="Code-indent">(
                                        <span className="Code-red">’model’</span>, 
                                        <span className="Code-blue"> LogisticRegression</span>())
                                    </span><br />
                                    ])
                                </p>
                                <p>
                                    pipe.<span className="Code-blue">fit</span>(X_train, y_train) 
                                </p>
                                <p>
                                    prediction = model.<span className="Code-blue">predict</span>(X_test)
                                </p>
                            </div>
        }
    }

    render() {
        return(
            <div className="Paragraph">
                <h2> Befintliga Lösningar </h2>
                <p>
                    I detta avsnitt presenteras befintliga, redan existerande 
                    lösningar för identifiering av falskt innehåll. Nedan beskrivs 
                    manuella och automatiska faktakontroller, prediktiva modelleringsbaserade 
                    metoder som innefattar logistisk regression och förökningsvägar.
                </p>
                <h3> Faktakontroll </h3>
                <p>
                    För att upptäcka falska nyheter utförs i många fall en process kallad 
                    faktakontroll. Den syftar till att bedöma nyhetens äkthet genom att 
                    jämföra kunskapen som utvinns från nyhetsinnehåll med kända fakta. 
                    En typ av faktakontroll är expertbaserad faktakontroll, där verifiering 
                    av ett angivet nyhetsin-nehåll utförs av en liten grupp som anses vara 
                    mycket trovärdiga faktakontrollanter. Med andra ord utförs processen 
                    manuellt av individer, till skillnad från processer som använder 
                    maskininlärningsmetoder. En manuell process av denna typ är relativt 
                    enkel att utföra och är även mycket exakt, men är dock kostsamt och 
                    systemet kommer sannolikt att överväldigas när antalet nyheter som ska 
                    kontrolleras ökar. I manuella faktakontroller ingår även metoden 
                    Crowdsourcing [5].
                </p>
                <p>
                    Till skillnad från manuell faktakontroll som beskrivits ovan kan 
                    även automatiska kontroller utföras, vilka använder teknikerna 
                    Information Retrieval (IR) och Natural Language Processing. 
                    Automatiska kontroller utförs i två steg; faktaextrahering och 
                    faktakontroll, där första steget handlar om att extrahera rå fakta 
                    från webben, som sedan rensas och förfinas för att bygga en kunskapsbas 
                    och kunskapsgraf. Efteråt utförs en faktakontroll för att bedöma 
                    sanningen och trovärdigheten i nyhetsinnehållet. Tillvägagångssättet 
                    illustreras i Figur 1 [5].
                </p>
                <img 
                    className="ContentPicture"
                    src="../img/factchecking.png"
                    alt="Faktakontroll"
                />
                <h4 className="ContentPictureText">
                    Figur 1: Illustration av processen för automatisk faktakontroll
                </h4>
                <h3> Prediktiv Metod </h3>
                <p>
                    Automatisk identifiering av falska nyheter kan åstadkommas med hjälp av 
                    maskinin-lärning, och utföras med prediktiva modelleringsbaserade metoder 
                    [6]. Det är en process för att använda kända, existerande resultat och 
                    utveckla en modell som kan förutsäga värden för nya händelser [7]. 
                    I sådant fall krävs implementering av någon typ av algoritm eller modell. 
                    En algoritm kan till exempel vara logistisk regression, där dess positiva 
                    koefficient ökar sannolikheten för ”sanning” och dess negativa ökar 
                    sannolik-heten för ”falskhet” [6]. Andra prediktiva modelleringsbaserade 
                    metoder kan exempelvis vara linjär regression, ridge regression och 
                    beslutsträd [7]. 
                </p>
                <p>
                    Ett exempel på hur prediktiva metoder kan implementeras är med hjälp av 
                    sklearn ; ett python-bibliotek för utföring av maskininlärningsuppgifter. 
                    Biblioteket erbjuder bland annat klasserna LogisticRegression() 
                    tillsammans med Pipeline() - för att vektorisera och implementera ett 
                    statiskt mått som utvärderar hur relevant ett ord är - för att sedan 
                    träna modellen och avgöra dess precision/prestation. Sklearn erbjuder 
                    även andra typer av maskininlärningsalgoritmer (Support Vector 
                    Classification, Nearest Neighbors Regression och Random Forest för att 
                    nämna några) vilka också kan användas som prediktiva metoder. Skillnaden 
                    ligger i hur modellerna presterar. Nedan följer en kort sammanfattning 
                    av hur denna lösning implementeras med sklearn [8].
                </p>
                <Code 
                    codeContent  =   {this.state.codeContent1}
                    copyCode      =   {this.props.copyText}
                />
                <p> 
                    Fördelarna med prediktiva modelleringsbaserade metoder är många; 
                    bland annat minskar metoden tiden för att utföra analys av en viss 
                    nyhet, ansträngning och kostnader för att förutsäga resultat. Dock finns 
                    det utmaningar i att upprätthålla säkerhet och integritet med hänsyn 
                    till de enorma datamängderna som är involverade i processen för prediktiv 
                    modellering [9].
                </p>
                <h3> Förökningsvägar </h3>
                <p>
                    Till skillnad från prediktiva metoder har förökningsvägar fördelen 
                    att kunna upptäcka falska nyheter i ett tidigt skede. Metoden innebär att 
                    till en början modellera förökningsvägen för varje nyhet som en multivariat 
                    tidsserie där varje tupel är en numerisk vektor, vilken representerar 
                    egenskaper hos en användare som spridit nyheten. Därefter byggs en 
                    tidsserieklassificering som fångar globala och lokala variationer av 
                    användaregenskaper längs förökningsvägen för att upptäcka falska 
                    nyheter [10]. Enligt författarna i referens [10] kan deras modell, 
                    som bygger på den beskrivna metoden, upptäcka en falsk nyhet med en 
                    noggrannhet på 85% fem minuter efter att den börjat spridas. 
                </p>
                <p>
                    Modeller som bygger på förökningsvägar har även begränsningar. En 
                    nackdel och utmaning för processer som tillämpar metoden är att det 
                    slutgiltiga resultatet kan bli felaktigt eller mindre korrekt om den 
                    tillämpas på falska nyheter som är relativt nya. Anledningen är att just 
                    sådana liknande nyhetsartiklar möjligtvis inte finns tillgängliga ännu [11].
                </p>
            </div>
        )
    }
}

export default BefintligaLosningar;
