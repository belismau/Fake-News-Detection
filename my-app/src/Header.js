import { FaShareSquare, FaSave, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Header.css';

function Header() {
    const mailTo = "mailto:sabanovicbelis@gmail.com?" +
                   "subject=Fake News Detektor Med Maskininlärning Och Linjär Progression&" +
                   "body=Hej,%0D%0A%0D%0AKolla in detta projekt gjort av Belis Sabanovic " +
                   "genom att klicka på länken nedan:%0D%0A" +
                   "https://belissabanovic.com/%0D%0A%0D%0AHälsningar"
    
    return(
        <div className="HeaderDiv">
            <div className="HeaderContent">
                <h1> 
                    Fake News Detektor Med Maskininlärning 
                    Och Linjär Progression 
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
                        <FaSave className="HeaderIcon" />
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

export default Header;