import React from "react"
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer (){
    return (<footer className={styles.footer}>
        <div>2023 DEVF Todos los derechos reservados </div>
        <div className={styles.social}>
            <a href="#" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
      </div>

    </footer>
    )
  }
  
  export default Footer