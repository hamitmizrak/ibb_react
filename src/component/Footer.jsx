import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class Footer extends Component {

    // displayName
    static displayName = " Router_Footer";

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

        //RETURN
        return (
            <React.Fragment>
                {/* Footer */}
                <footer className="text-center text-lg-start bg-dark text-white">
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        {/* Left */}
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        {/* Left */}
                        {/* Right */}
                        <div>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-google" />
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                        {/* Right */}
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3 text-secondary" />
                                        Company name
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Angular
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            React
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Vue
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Laravel
                                        </a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Settings
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Help
                                        </a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p>
                                        <i className="fas fa-home me-3 text-secondary" /> New York, NY
                                        10012, US
                                    </p>
                                    <p>
                                        <i className="fas fa-envelope me-3 text-secondary" />
                                        info@example.com
                                    </p>
                                    <p>
                                        <i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88
                                    </p>
                                    <p>
                                        <i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89
                                    </p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </div>
                    </section>
                    {/* Section: Links  */}
                    {/* Copyright */}
                    <div
                        className="text-center p-4"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
                    >
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                            {this.props.copy}
                        </a>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}

            </React.Fragment>
        ) //end return
    } //end render
} //end class

// Higher Order Component
export default withTranslation()(Footer);
