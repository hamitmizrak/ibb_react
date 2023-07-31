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
        console.log('Error:', err)
      }
      );
  } //end CDM

  // FUNCTION

  //RENDER
  render() {

    //RETURN 
    return (
      <React.Fragment>BlogList</React.Fragment>
    ) //end return
  } //end render
} // end class

// 
export default withTranslation()(BlogList);
