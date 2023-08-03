import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class BlogCreate extends Component {

  // Componentteki isim
  static displayName = "Blog_Create";

  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
    }; //end constructor

    // BIND
  }

  // CDM

  //RENDER
  render() {
    //object destructing
    const { t } = this.props;

    // RETURN
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">{t('blog_create')}</h1>

        <form>
          {/* HEADER */}
          <div className="form-group mb-4">
            <span>{t("blog_header")}</span>
            <input
              type="text"
              className="form-control"
              id=""
              name=""
              placeholder={t("blog_header")}
              required={true}
              autoFocus={true}
            />
          </div>

          {/* CONTENT */}
          <div className="form-group mb-4">
            <span>{t("blog_content")}</span>
            <textarea
              className="form-control"
              id=""
              name=""
              required={true}
              placeholder={t("blog_content")}
              rows="6"></textarea>
          </div>
          <button className="btn btn-primary mb-5">{t('submit')}</button>
          <br /><br /><br /><br /> <br /><br /><br />
        </form>
      </React.Fragment>
    ) //end return
  } //end render
} // end class

// Blog Create
export default withTranslation()(BlogCreate);

