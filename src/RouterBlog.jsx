// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// ROUTER
import { Navigate, Route, Routes } from 'react-router-dom';

// HEADER , FOOTER
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';

// Component Class CRUD
import BlogList from './component/blog_class/BlogList';
import BlogUpdate from './component/blog_class/BlogUpdate';
import BlogView from './component/blog_class/BlogView';
import BlogCreate from './component/blog_class/BlogCreate';

// Component Function CRUD
import BlogList2 from './component/blog_function/BlogList2';
import BlogUpdate2 from './component/blog_function/BlogUpdate2';
import BlogView2 from './component/blog_function/BlogView2';
import BlogCreate2 from './component/blog_function/BlogCreate2';


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

                        {/* Blog Class CRUD */}
                        <Route path='/blog/list' element={<BlogList />} />
                        <Route path='/blog/create' element={<BlogCreate />} />
                        <Route path='/blog/view/:id' element={<BlogView />} />
                        <Route path='/blog/update/:id' element={<BlogUpdate />} />

                        {/* Blog Function CRUD */}
                        <Route path='/blog/list2' element={<BlogList2 />} />
                        <Route path='/blog/create2' element={<BlogCreate2 />} />
                        <Route path='/blog/view2' element={<BlogView2 />} />
                        <Route path='/blog/update2' element={<BlogUpdate2 />} />

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