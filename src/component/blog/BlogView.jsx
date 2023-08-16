import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import BlogApi from '../../services/BlogApi';
import cardPicture from '../../assist/img/resim.jpg'

// CLASS
class BlogView extends Component {

    // Static
    static displayName = "Blog_View";

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            //id: this.props.match.params.id
            id: 1,
            registerDto: {},
        }  // end state
    } //end constructor

    // CDM
    componentDidMount() {
        BlogApi.blogServiceFindById(this.state.id).then((response) => {
            console.log(response);
            this.setState({
                registerDto: response.data
            })
        })
    }

    // RENDER
    render() {
        const { id, header } = this.state.registerDto
        const {t}=this.props;
        // RETURN
        return (
            <React.Fragment>
                <br /><br /><br /><br /><br />
                <div className="card">
                    <img style={{ width: "50%" }} src={cardPicture} className='mx-auto' alt="" />
                    <div className="card-body mx-auto">
                        <h4 className="card-title mx-auto">{t('blog_id')}: {this.state.id} Lorem ipsum dolor sit amet.</h4>
                        <h4 className="card-title mx-auto">{t('blog_id')}: {id} Lorem ipsum dolor sit amet.</h4>
                        <p className="card-text"><b>{t('blog_header')}:</b> {header}</p>
                        <p className="card-text"><b><mark>{t('blog_content')}:</mark></b>{this.state.registerDto.content}</p>
                        <p className="card-text"><i style={{ fontWeight: "bold" }}>{t('date')}:</i> <q>{this.state.registerDto.systemDate}</q></p>
                    </div>
                </div>
            </React.Fragment>
        ) // end Return
    } //end render
} // end class BlogView

export default withTranslation()(BlogView)