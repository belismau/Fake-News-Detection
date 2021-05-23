import React from 'react';
import { FaShareSquare, FaSave, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }

        this.handleDownload = this.handleDownload.bind(this)
    }

    handleDownload() {
        window.location.href = window.location.href + 'download'
    }
    
    render() {
        const mailTo = "mailto:sabanovicbelis@gmail.com?" +
                       "subject=Fake News Detection Med Maskininlärning, Logistik Regression Och Ensemblemetoder&" +
                       "body=Kolla in detta projekt av Belis Sabanovic genom att klicka på " +
                       "följande länk: https://fakenewsdetection.cf/"
                        
        return(
            <div className="HeaderDiv">
                <div className="HeaderContent">
                    <h1> 
                        {this.state.result}
                        Identifiering av Fake News Med Hjälp Av
                        <span> Maskininlärning, </span>
                        <span> Maskin- inlärning </span> Logistisk Regression och 
                        Ensemblemetoder
                    </h1>
                    <div className="HeaderPicture">
                        <div className="HeaderLeft">
                            <img
                                src="./img/Belis.jpg" 
                                alt="Me" 
                            />
                            <div>
                                <p> Belis Sabanovic </p>
                                <p> Jan 23, 2021 · 13 min lästid </p>
                            </div>
                        </div>
                        <div className="HeaderRight">
                            <a 
                                href={mailTo}>
                                <FaShareSquare className="HeaderIcon" />
                            </a>
                            <FaSave 
                                className="HeaderIcon"
                                onClick={this.handleDownload}
                            />
                            <a 
                                href="https://www.instagram.com/belissabanovic/">
                                <FaInstagram className="HeaderIcon" />
                            </a>
                            <a 
                                href="https://se.linkedin.com/in/belis-sabanovic-5b1a581b0">
                                <FaLinkedin className="HeaderIcon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;