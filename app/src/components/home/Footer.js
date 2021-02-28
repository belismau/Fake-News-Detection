import './Footer.css';

function Footer() {
    return(
        <div className="Footer">
            <div className="FooterFirst">
                <p>
                    Denna webbapplikation är&nbsp;
                    <span className="Underline">utvecklad</span>
                    &nbsp;av Belis Sabanovic. 
                    Artikeln syftar till att
                    beskriva hur maskininlärning kan användas
                    för att förhindra fejknyheter.
                </p>
            </div>
        </div>
    )
}

export default Footer;