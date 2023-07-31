import React, { Component } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Blog Api
import BlogApi from '../../services/BlogApi';

// CLASS 
class BlogList extends Component {

  // Componentteki isim
  static displayName = "Blog_List";

  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      blogList: [],
    }; //end constructor

    // BIND
  }

  // CDM
  componentDidMount() {
    //const url='https://jsonplaceholder.typicode.com/posts';
    BlogApi.blogServiceList()
      .then((response) => {
        console.log(response);
        this.setState({
          blogList: response.data
        }); //end setState
      })
      .catch((err) => {
        console.log('Error:', err);
      }
      );
  } //end CDM

  // FUNCTION

  //RENDER
  render() {

    //object destructing
    const { t } = this.props;
    const { blogList } = this.state;

    //RETURN 
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase">Blog List</h1>
        {/* table.table.table-hover.table-striped>thead>tr>th{item $}*4^^tbody>tr>td{item $}*4 */}
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>{t('blog_id')}</th>
              <th>{t('blog_header')}</th>
              <th>{t('blog_content')}</th>
              <th>{t('date')}</th>
              <th>{t('update')}</th>
              <th>{t('view')}</th>
              <th>{t('delete')}</th>
            </tr>
          </thead>
          <tbody>

            {
              blogList.map((temp) =>
                <tr key={temp.id}>
                  <td>{temp.id}</td>
                  <td>{temp.header}</td>
                  <td>{temp.content}</td>
                  <td>{temp.systemDate}</td>
                  <td><i className="fa-solid fa-pen-nib text-primary" style={{ "cursor": "pointer" }}></i></td>
                  <td><i className="fa-solid fa-binoculars text-warning" style={{ "cursor": "pointer" }}></i></td>
                  <td><i className="fa-solid fa-trash text-danger" style={{ "cursor": "pointer" }}></i></td>
                </tr>
              )
            } 
          </tbody>
        </table>
      </React.Fragment>
    ) //end return
  } //end render
} // end class

// 
export default withTranslation()(BlogList);
