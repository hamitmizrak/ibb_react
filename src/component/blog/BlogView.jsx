import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// CLASS
class BlogView extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      //id:this.props.value.matches[0].params.id,

    }; //end constructor

    // BIND
  }

  // CDM

  // FUNCTION

  // Componentteki isim
  static displayName = "Blog_View";

  // RENDER
  render() {

    // RETURN
    return (
      <React.Fragment>
        view
      </React.Fragment>
    ) //end return
  } //end render
} // end class

// Blog Create
export default withTranslation()(BlogView);
