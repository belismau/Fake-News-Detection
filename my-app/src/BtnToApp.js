import { FaArrowRight } from 'react-icons/fa';
import './BtnToApp.css';
import { Link } from 'react-router-dom';

function BtnToApp() {
    return(
        <div className="BtnToApp">
            <Link 
                to="/app"
                style={{ textDecoration: 'none' }}
            >
                <div className="BtnToAppButton"> 
                    <p> Prova Fake News Detektor </p>
                    <FaArrowRight className="BtnToAppArrow" />
                </div>
            </Link>
        </div>
    )
}

export default BtnToApp;