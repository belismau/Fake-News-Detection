import React from 'react';
import { FaShareSquare, FaSave, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleDownload = this.handleDownload.bind(this)
    }

    handleDownload() {
        fetch('http://localhost:3001/api/download')
    }
    
    render() {
        const mailTo = "mailto:sabanovicbelis@gmail.com?" +
                       "subject=Fake News Detection Med Maskininlärning Och Logistik Regression&" +
                       "body=Kolla in detta projekt av Belis Sabanovic genom att klicka på " +
                       "följande länk: https://fakenewsdetection.cf/"
                        
        return(
            <div className="HeaderDiv">
                <div className="HeaderContent">
                    <h1> 
                        Identifiering av Fake News Med Hjälp Av
                        <span> Maskininlärning </span>
                        <span> Maskin- inlärning </span>
                        Och Logistisk Regression 
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