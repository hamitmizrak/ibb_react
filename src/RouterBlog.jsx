// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

// CLASS
class RouterBlog extends Component {

    // displayName
    static displayName=" Router_Blog";

    // constructor
    constructor(props) {
        super(props);

        // STATE
        this.state={};

        // BIND
    } //end constructor

    // CDM

    // Function

    // Render
    render() {

        // Return
        return (
            <React.Fragment>

                <Header/>
                <br />
                <Main/>
                <br/>
                <Footer/>
            </React.Fragment>
        ) //end return
    } //end render
} //end class

// Class Adı aşağıda gösterme
//export default RouterBlog();

// Higher Order Component
export default withTranslation()(RouterBlog);