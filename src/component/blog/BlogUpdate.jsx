import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import BlogApi from '../../services/BlogApi';

// CLASS
class BlogUpdate extends Component {

  // Componentteki isim
  static displayName = "Blog_Update";

  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      id: 1, // this.props.match.params.id
      header: null,
      content: null,
      systemDate: null,
      blogDto: {},
      spinnerData: false,
      multipleRequest: false, // çoklu kayıtlara izin verme
      validationErrors: {},
    }; //end constructor

    // BIND
  }

  // CDM
  componentDidMount() {
    BlogApi.blogServiceFindById(this.state.id)
      .then(
        ((response) => {
          const findMyBlog = response.data;
          console.log(findMyBlog);
          this.setState({
            header: findMyBlog.header,
            content: findMyBlog.content,
            systemDate: findMyBlog.systemDate
          })
        }))
      .catch((err) => {
        console.error(err);
      })
  } //end CDM

  // FUNCTION
  //onChangeInputValue 
  onChangeInputValue = (event) => {
    // inputta gelen verileri almak
    const { name, value } = event.target;
    console.log(`${name} ${value}`);

    // Backentten gelen hataları yakalamak
    const backentErrorHandling = { ...this.state.validationErrors };
    console.log(backentErrorHandling.errorHandler);
    backentErrorHandling[name] = undefined;

    // STATE
    this.setState({
      [name]: value,
      backentErrorHandling,
    })
  }


  // CREATE SUBMIT
  updateSubmit = async (event) => {
    // Browser sen dur bir şey yapma lütfen
    event.preventDefault();

    const { header, content } = this.state;
    const blogDto = { header, content }
    //console.log(blogDto);

    // (asyn-await)
    try {
      // SPINNER GÖNDERMEDEN ÖNCE
      this.setState({
        spinnerData: true,
        multipleRequest: true
      })
      // UPDATE
      const response = await BlogApi.blogServiceUpdateId(this.state.id,blogDto);
      if (response.status == 200) {
        //alert("Ekleme Başarılı")
        console.log("Güncelleme Başarılı");
        // SPINNER GÖNDERMEDEN ÖNCE
        this.setState({
          spinnerData: false,
          multipleRequest: false
        })
       // PHP
       this.props.history.push("/blog/list")
      }
    } catch (err) {
      console.error(err);
      // HATA SPINNER ÇALIŞSIN
      this.setState({
        //spinnerData: true,
        multipleRequest: true
      }); //end setState

      // Backentten gelen Hata varsa yakala
      if (err.response.data.validationErrors) {
        this.setState({
          validationErrors: err.response.data.validationErrors
        }) //end setState
      } //end if
    } // end catch
  } //  end Submit


  // RENDER
  render() {

    // object destructing
    const { t } = this.props;

    // Hatayı Yakalama
    const { validationErrors, multipleRequest} = this.state;
    const { header, content } = validationErrors;

    // RETURN
    return (
      <React.Fragment>
        <br /><br /><br /><br />
        <h1 className="text-primary">UPDATE</h1>
        <form>
          {/* HEADER */}
          <div className="form-group mb-4">
            <label>{t("blog_header")}</label>
            <input
              type="text"
              className="form-control"
              id="header"
              name="header"
              placeholder={t("blog_header")}
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValue}
              value={this.state.header}
            />
            <span className="text-danger">{header}</span>
          </div>

          <div className="form-group mb-4">
            <label>{t("blog_content")}</label>
            <input
              type="text"
              className="form-control"
              id="content"
              name="content"
              placeholder={t("blog_content")}
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValue}
              value={this.state.content}
            />
            <span className="text-danger">{content}</span>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn btn-primary mb-5"
            disabled={(multipleRequest)}
            onClick={this.updateSubmit}>
            {(this.state.spinnerData) && <span className="spinner-border text-warning"></span>}
            {t('submit')}
          </button>
        </form>
      </React.Fragment>
    ) //end return
  } //end render
} // end class

// Blog Create
export default withTranslation()(BlogUpdate);
