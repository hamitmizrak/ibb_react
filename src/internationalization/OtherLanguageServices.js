import axios from "axios";

// Language
class OtherLanguageServices {

    // Language Flag Button
    headerAccessLanguageServices(languageButtonTrigger) {
        axios.defaults.headers["accept-language"] = languageButtonTrigger;
    }
}

export default new OtherLanguageServices();