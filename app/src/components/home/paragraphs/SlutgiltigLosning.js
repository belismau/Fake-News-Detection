import React from 'react';
import './Paragraphs.css';
import Code from './Code'

class SlutgiltigLosning extends React.Component {
    constructor() {
        super();
        this.state = {
            codeContent1:   <div>
                                <p>
                                    <span className="Code-green">import </span>
                                    pandas <span className="Code-green">as</span> pd
                                </p>

                                <p> 
                                    fake_news = pd.read_csv(
                                    <span className="Code-red">"dataset/Fake.csv"</span>)<br />
                                    true_news = pd.read_csv(<span className="Code-red">"dataset/True.csv"</span>)
                                </p>

                                <p>
                                    fake_news[<span className="Code-red">'label'</span>] = 
                                    <span className="Code-red"> 'fake'</span> <br />
                                    true_news[<span className="Code-red">'label'</span>] = 
                                    <span className="Code-red"> 'true'</span>
                                </p>

                                <p> 
                                    data = pd.<span className="Code-blue">concat</span>([<br />
                                        <span className="Code-indent">fake_news,</span> <br />
                                        <span className="Code-indent">true_news</span> <br />
                                    ])
                                </p>

                                <p>
                                    data = data.<span className="Code-blue">drop</span>
                                    (columns=[<span className="Code-red">'date'</span>, 
                                    <span className="Code-red"> 'title'</span>, 
                                    <span className="Code-red"> 'subject'</span>])
                                </p>

                                <p>
                                    <span className="Code-green">from </span> 
                                    sklearn.<span className="Code-blue">utils</span> 
                                    <span className="Code-green"> import</span> shuffle
                                </p>

                                <p>
                                    data = <span className="Code-blue">shuffle</span>(data)
                                </p>
                            </div>,

            codeContent2:   <div>
                                <p>
                                    data[<span className="Code-red">'text'</span>] =
                                    data[<span className="Code-red">'text'</span>].
                                    <span className="Code-blue">str</span>.
                                    <span className="Code-blue">lower</span>()
                                </p>
                                <p>
                                    <span className="Code-green">from </span>
                                    string <span className="Code-green">import</span> punctuation
                                </p>
                                <p>
                                    <span className="Code-green">def</span>
                                    <span className="Code-blue"> remove_punctuation</span>
                                    (text):<br />
                                    <span className="Code-indent">temp_list = [ ]</span><br />
                                    <span className="Code-indent">
                                        <span className="Code-green">for</span> char
                                        <span className="Code-green"> in</span> text:<br />
                                        <span className="Code-indent2">
                                            <span className="Code-green">if</span> char
                                            <span className="Code-green"> not in </span> 
                                            punctuation:<br />
                                            <span className="Code-indent3">
                                                temp_list.<span className="Code-blue">append</span>
                                                (char)<br />
                                            </span>
                                        </span>
                                    </span>
                                    <span className="Code-indent">
                                    <span className="Code-green">return </span>
                                    ''.<span className="Code-blue">join</span>(temp_list)
                                    </span>
                                </p>
                                <p>
                                    data[<span className="Code-red">'text'</span>] = 
                                    data[<span className="Code-red">'text'</span>].
                                    <span className="Code-blue">apply</span>(remove_punctuation)
                                </p>
                            </div>,
        
            codeContent3:   <div>
                                <p>
                                    <span className="Code-green">from </span>
                                    nltk.<span className="Code-blue">corpus </span>
                                    <span className="Code-green">import</span> stopwords
                                </p>
                                <p>
                                    stopwords = stopwords.<span className="Code-blue">words</span>
                                    (<span className="Code-red">'english'</span>)
                                </p>
                                <p>
                                    <span className="Code-green">def</span>
                                    <span className="Code-blue"> remove_stopwords</span>
                                    (text):<br />
                                    <span className="Code-indent">temp_list = [ ]</span><br />
                                    <span className="Code-indent">
                                        <span className="Code-green">for</span> word
                                        <span className="Code-green"> in</span> text.
                                        <span className="Code-blue">split</span>():<br />
                                        <span className="Code-indent2">
                                            <span className="Code-green">if</span> word
                                            <span className="Code-green"> not in </span> 
                                            stopwords:<br />
                                            <span className="Code-indent3">
                                                temp_list.<span className="Code-blue">append</span>
                                                (word)<br />
                                            </span>
                                        </span>
                                    </span>
                                    <span className="Code-indent">
                                        <span className="Code-green">return </span>
                                        ''.<span className="Code-blue">join</span>(temp_list)
                                    </span>
                                </p>
                                <p>
                                    data[<span className="Code-red">'text'</span>] = 
                                    data[<span className="Code-red">'text'</span>].
                                    <span className="Code-blue">apply</span>(remove_stopwords)
                                </p>
                            </div>,
            
            codeContent4:   <div>
                                <p>
                                    <span className="Code-green">from </span> 
                                    sklearn.<span className="Code-blue">model_selection </span> 
                                    <span className="Code-green">import</span> train_test_split
                                </p>
                                <p>
                                    X_train,<br /> X_test,<br /> y_train,<br /> y_test =
                                    <span className="Code-blue"> train_test_split</span>(<br />
                                    <span className="Code-indent">data.
                                    <span className="Code-blue">text</span>,<br /></span>
                                    <span className="Code-indent">data.
                                    <span className="Code-blue">label</span>,<br /></span>
                                    <span className="Code-indent">test_size = 0.25,<br /></span>
                                    <span className="Code-indent">random_state = 0<br /></span>
                                    )
                                </p>
                            </div>

        }
    }

    render() {
        return(
            <div className="Paragraph">
                <h2> Slutgiltig Lösning </h2>
                <p>
                    Inom detta projekt kommer logistisk regression i form av en prediktiv 
                    modelleringsbaserad metod att tillämpas med hjälp av sklearn i Jupyter 
                    Notebook, tillsammans med ensem-blemetoder som beskrivits under avsnittet 
                    Möjliga Lösningar och som förhoppningsvis kan resultera i ett effektivare 
                    och mer precist resultat för den slutgiltiga modellen. Nedan beskrivs 
                    programmeringsprocessen och vägen till slutresultatet, som startar med 
                    identifie-ring och förbehandling av det valda dataset.
                </p>
                <h3> Förbehandling </h3>
                <p>
                    Det dataset som valts är hämtat från webbsidan Kaggle och innehåller två 
                    filer, Fake.csv och True.csv. Dessa innehåller i sin tur ungefär 20 000 
                    nyheter vardera. Eftersom det inte finns svenska tillgängliga datasets 
                    på internet, kommer engelska nyheter att användas. Filerna innehåller 
                    4 kolumner; title, text, subject och date, varav endast text används 
                    (nyhetens innehåll). För att importera dataset till Jupyter Notebook 
                    och förbehandla data innan användning används biblioteket Pandas. 
                    Nedan visas tillvägagångssättet för behandlingen av de två datasets 
                    skrivet i Python.
                </p>
                <Code
                    codeContent  =   {this.state.codeContent1}
                    copyCode      =   {this.props.copyText}
                />
                <p>
                    Ovanstående kodsnutt gör följande: (1) läser in filerna, (2) lägger till 
                    en kolumn label (fake för falska nyheter och true för sanna nyheter) för 
                    att kunna identifiera nyhetens trovärdighet, (3) sammanfogar de sanna 
                    nyheterna med de falska, (4) tar bort onödiga kolumner som inte behövs 
                    i processen och (5) blandar slutligen den sammanbundna tabellens nyheter 
                    för att förhindra bias.
                </p>
                <p>
                    Nästa steg är förbehandling av endast textkolumnen. Nedan visas 
                    tillvägagångssättet för att transformera all text till små bokstäver och 
                    rensa texten från skiljetecken (,.()- etc.).
                </p>
                <Code
                    codeContent  =   {this.state.codeContent2}
                    copyCode      =   {this.props.copyText}
                />
                <p>
                    Nästa steg är att ta bort stoppord (as, at, be, both, etc.) från texterna. 
                    Nedan visas tillvägagångssättet för borttagandet av stoppord (notera att 
                    detta också går att utföras med list comprehensions, men genomförs på 
                    nedanstående sätt för tydlighetens skull).
                </p>
                <Code
                    codeContent  =   {this.state.codeContent3}
                    copyCode      =   {this.props.copyText}
                />
                <h3> Träning </h3>
                <p>
                    När förbehandling av det valda dataset är klart och nyhetsinnehållen är 
                    färdiga för träning, är nästa steg att dela upp data i två delar; en del 
                    för träning och den andra delen för testning. Anledningen är att kunna 
                    testa data som är färdigtränad med resterande träningsdata, vilket kan 
                    göras med sklearns klass train_test_split. I nuvarande fall kommer 
                    datastorleken för testning vara 25% av den totala datastorleken, men kan 
                    komma att ändras vid ett senare tillfälle i syfte att förbättra resultatet.
                </p>
                <p>
                    Utöver datastorlek för testning, som i nästkommande kodsnutt innehar 
                    namnet test_size, finns också data.text (nyhetstexten) och data.label 
                    (nyhetens trovärdighet, om nyheten är sann eller falsk) som parametrar 
                    för funktionen train_test_split. 
                </p>
                <Code
                    codeContent  =   {this.state.codeContent4}
                    copyCode      =   {this.props.copyText}
                />
                <p>
                    För att skapa en esemblemodell används klassen VotingClassifier. 
                    Den sammanbinder flera klassificerare till en och samma klassificerare, 
                    som senare kan användas för att tränas. En voting classifier, eller 
                    röstklassificerare på svenska, är tydligare beskrivet en 
                    klassificeringsmetod som använder flera klassificerare för att göra en 
                    eller flera förutsägelser. Metoden är användbar när det inte går att 
                    avgöra vilken klassificerare som ska tillämpas för en viss process 
                    [https://towardsdatascience.com/how-voting-classifiers-work-f1c8e41d30ff]. 
                    Inom denna process används logistisk regression tillsammans med random 
                    forest för att skapa den slutgiltiga klassificeraren och modellen. 
                    Nästa kodsnutt förverkligar ovanstående beskrivning.
                </p>
            </div>
        )
    }
}

export default SlutgiltigLosning;
