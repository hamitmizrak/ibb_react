// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

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
            <div>RouterBlog</div>
        ) //end return
    } //end render
} //end class

// Class Adı aşağıda gösterme
//export default RouterBlog();

// Higher Order Component
export default withTranslation()(RouterBlog);