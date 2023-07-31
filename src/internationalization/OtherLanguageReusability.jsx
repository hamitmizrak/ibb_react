

// rfc
import React from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Router Dom
import { Link } from 'react-router-dom'

// Flag
import tr_flag from "../assist/flag/tr.jpg"
import en_flag from "../assist/flag/en.jpg"
import OtherLanguageServices from './OtherLanguageServices'

//FUNCTION
function OtherLanguageReusability(props) {

    // Bayraklar Datalar
    const internationalizationLanguageServise = (languageButtonTrigger) => {
        const { i18n } = props;
        i18n.changeLanguage(languageButtonTrigger);
        OtherLanguageServices.headerAccessLanguageServices(languageButtonTrigger);
    }

    // RETURN
    return (
        <React.Fragment>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => internationalizationLanguageServise('tr')}>
                        <img src={tr_flag} style={{height:"20px"}} alt='tr' />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => internationalizationLanguageServise('en')}>
                        <img src={en_flag} style={{height:"20px"}} alt='tr'/>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    )
}


export default withTranslation()(OtherLanguageReusability)
