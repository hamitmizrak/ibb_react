import React, { Component } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Blog Api
import BlogApi from '../../services/BlogApi';
import { Link } from 'react-router-dom';

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
    this.update = this.update.bind(this);
    this.view = this.view.bind(this);
    this.delete = this.delete.bind(this);
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
  // UPDATE
  update(id) {
    //alert(id);
    window.open("/blog/update/"+id);
  }

  // VIEW
  view(id) {
    //alert(id);
    //this.props.history.push("/blog/view/"+id)
    window.open("/blog/view/"+id);
    
  }

  // DELETE
  delete(id) {
    //alert(id);
    BlogApi.blogServiceDeleteId(id)
    .then((response)=>{
      this.setState({
        blogList:this.state.blogList.filter((temp_filter)=>temp_filter.id!=id)
      })
    })
    .catch((err)=>{
      alert("Veri silmede bir hata var")
    });

  }

  //RENDER
  render() {

    //object destructing
    const { t } = this.props;
    const { blogList } = this.state;

    //RETURN 
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">{t('blog_list')}</h1>
        <Link to="/blog/create" className="btn btn-primary"><i class="fa-solid fa-plus"></i> {t('blog_create')}</Link>
        <button className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i> {t('blog_all_delete')}</button>
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
                  {/* UPDATE */}
                  <td>
                    <i
                      className="fa-solid fa-pen-nib text-primary text-center"
                      style={{ "cursor": "pointer" }}
                      onClick={() => this.update(temp.id)}>
                    </i>
                  </td>

                  {/* VIEW */}
                  <td>
                    <Link to={`/blog/view/${temp.id}`}>
                    <i
                      className="fa-solid fa-binoculars text-warning text-center"
                      style={{ "cursor": "pointer" }}>
                    </i>
                    </Link>
                  </td>

                  {/* DELETE */}
                  <td>
                    <i
                      className="fa-solid fa-trash text-danger text-center"
                      style={{ "cursor": "pointer" }}
                      onClick={() => {
                        if (window.confirm("Are you sure to delete?")) {
                          this.delete(temp.id)
                        }
                        else
                          window.alert("Silinmedi !!!")
                      }}>
                    </i>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </React.Fragment>
    ) //end return
  } //end render
} // end class

// npm install react-icons --save
export default withTranslation()(BlogList);
