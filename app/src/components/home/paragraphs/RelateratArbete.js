import React from 'react';
import './Paragraphs.css';

class RelateratArbete extends React.Component {
    render() {
        return(
            <div className="Paragraph">
                <h2> 3. Relaterat Arbete </h2>
                <p>
                    Det finns ett flertal arbeten inriktade på Fake News där även 
                    maskininlärning används. F. Nada, B.F. Khan, A. Maryam, N. Zuha och 
                    Z. Ahmed [2] har gjort ett liknande arbete där logistisk regression 
                    tillämpas på fejknyheter. Deras uppsats utforskar hur falskt innehåll 
                    kan begränsas genom automatisk identifiering. Uppgiften utförs med 
                    hjälp av ett dataset och språkbehandlingstekniker för logistisk 
                    regression. Vidare i projektet ”Early Detection of Fake News "Before It Flies High"” 
                    föreslår författarna F.B. Gereme och W. Zhu [3] en modell för tidig upptäckt 
                    av falska nyheter med hjälp av djupinlärning. Författarna använder tre 
                    olika heterogena dataset för att skapa en mer generisk modell som ska 
                    fungera bättre i den verkliga världen. Resultatet uppnåddes bland annat 
                    genom implementering av flera modellbyggnadsmetoder som RNN, LSTM  och 
                    CNN. 
                </p>

                <p>
                    I en annan uppsats fokuserar S. Vijayarag-havan, Z. Guo, Y. Wang, J. 
                    Voong, W. Xu, A. Nasseri, J. Cai, L. Li, K. Vuong och E. Wadhwa [4] på 
                    falska nyheter med flera olika modelltyper. ”Fake News Detection with 
                    Different Models” tar upp falska nyheters problemområde som löses med 
                    NLP. Författarna beskriver hur datasetsen förbehandlats innan 
                    användning, och använder bland annat logistisk regression som 
                    maskininlärningsalgoritm för att klassificera data. I uppsatsen beskrivs 
                    även tre olika vektoralgoritmer för språkbehandling; CountVectorizer, 
                    TF-IDF och Word2Vec. 
                </p>

                <p>
                    För att sammanfatta det relaterade arbetet finns det 
                    diverse vetenskapliga artiklar och arbeten relaterade till maskininlärning 
                    där fokus ligger på identifiering av falska nyheter. Olika algoritmer 
                    tillämpas, som till exempel logistisk och linjär regression samt SVM. 
                    Även olika klassificerare används i processer. Två exempel är Random 
                    Forest och ANN.
                </p>
            </div>
        )
    }
}

export default RelateratArbete;
