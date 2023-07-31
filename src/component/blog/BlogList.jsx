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
    const {t}=this.props;

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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>item 1</td>
          <td>item 2</td>
          <td>item 3</td>
          <td>item 4</td>
        </tr>
      </tbody>
     </table>
     
      </React.Fragment>
    ) //end return
  } //end render
} // end class

// 
export default withTranslation()(BlogList);
