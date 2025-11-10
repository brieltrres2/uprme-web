import '../App.css';
import "../index.css";
import { Link } from "react-router-dom";


function MobFooter (){

    return(
        <div style={{marginBottom: '20px'}}>
            <div style={{ height: '1px', backgroundColor: 'lime', width: '90%', margin: '20px auto' }} />
            <div className="black" style={{backgroundColor: 'rgba(0, 0, 0, 1)'}}>

                <div className="footerXM">
                    <p>
                        Copyright © UPRM Esports 2025. All Rights Reserved<br/>
                        University of Puerto Rico - Mayagüez Campus<br/>
                        eSports Student Organization<br/>
                        made for UPRM Esports by <a className='jiffkami' href='https://jiffkami.space'> jiffkami</a>
                    </p>

                </div>
                <div className="legal-container">
                    <Link to="/terms-of-service" className="legal-link" style={{paddingRight: '10px'}}>Terms of
                        Service</Link>
                    <div className="white">|</div>
                    <Link to="/contact" className="legal-link" style={{paddingRight: '10px'}}>Contact Us</Link>
                    {/* <div class="white">|</div>
            <Link to="/credits" className="legal-link">Credits</Link>
        </div>
                  <div className="divider">*/}</div>


        </div>
</div>
)
    ;
}

export default MobFooter;