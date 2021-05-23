import './TableOfContents.css';

function TableOfContents() {
    return(
        <div className="TableOfContents">
            <h2> Innehållsförteckning </h2>
            <div className="TOCContent">
                <div className="TOCSection">
                    <div className="TOCNumber">
                        <h1> 01 </h1>
                    </div>
                    <div className="TOCText">
                        <h3> Introduktion </h3>
                        <p> Vad är Fake News? </p>
                        <p> Avsiktlighet </p>
                    </div>
                </div>
                <div className="TOCSection">
                    <div className="TOCNumber">
                        <h1> 02 </h1>
                    </div>
                    <div className="TOCText">
                        <h3> Introduction </h3>
                        <p> What Is Fake News? </p>
                        <p> Research </p>
                    </div>
                </div>
                <div className="TOCSection">
                    <div className="TOCNumber">
                        <h1> 03 </h1>
                    </div>
                    <div className="TOCText">
                        <h3> Methods </h3>
                        <p> Linear Progression </p>
                        <p> Linear Probing </p>
                        <p> Research Questions </p>
                    </div>
                </div>
                <div className="TOCSection">
                    <div className="TOCNumber">
                        <h1> 04 </h1>
                    </div>
                    <div className="TOCText">
                        <h3> Results </h3>
                        <p> First Attempt </p>
                        <p> Second try </p>
                    </div>
                </div>
                <div className="TOCSection">
                    <div className="TOCNumber">
                        <h1> 05 </h1>
                    </div>
                    <div className="TOCText">
                        <h3> Conclusion </h3>
                        <p> Developing </p>
                    </div>
                </div>
                <div className="TOCSection">
                    <div className="TOCNumber">
                        <h1> 06 </h1>
                    </div>
                    <div className="TOCText">
                        <h3> References </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableOfContents;