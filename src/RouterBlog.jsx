// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// ROUTER
import { Navigate, Route, Routes } from 'react-router-dom';

// HEADER , FOOTER
import Header from './component/Header';
import Footer from './component/Footer';

// Component CRUD
import BlogList from './component/blog/BlogList';
import BlogUpdate from './component/blog/BlogUpdate';
import BlogView from './component/blog/BlogView';
import BlogCreate from './component/blog/BlogCreate';
import Main from './component/Main';

// CLASS
class RouterBlog extends Component {

    // displayName
    static displayName = " Router_Blog";

    // constructor
    constructor(props) {
        super(props);

        // STATE
        this.state = {};

        // BIND
    } //end constructor

    // CDM

    // Function

    // Render
    render() {

        // Return
        return (
            <React.Fragment>
                {/* HEADER */}
                <Header logo="fa-solid fa-blog" />

                <div className="container">
                    <Routes>
                        <Route path='/' element={<Main />} />

                        {/* Blog CRUD */}
                        <Route path='/blog/list' element={<BlogList />} />
                        <Route path='/blog/create' element={<BlogCreate />} />
                        <Route path='/blog/view/:id' element={<BlogView />} />
                        <Route path='/blog/update/:id' element={<BlogUpdate />} />

                        {/* for bad request */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>

                {/* FOOTER */}
                <Footer copy="&copy; 2021 - 2023 Copyright" />
            </React.Fragment>
        ) //end return
    } //end render
} //end class

// Class Adı aşağıda gösterme
//export default RouterBlog();

// Higher Order Component
export default withTranslation()(RouterBlog);