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
            id:1,
            registerDto:{}
        }
    }

    // CDM
    componentDidMount(){
        BlogApi.blogServiceFindById(this.state.id).then((response)=>{
            console.log(response);
            this.setState({
                registerDto:response.data
            })
        })
    }

    // RENDER
    render() {

        // RETURN
        return (
            <React.Fragment>
                <br /><br /><br /><br /><br />
                <div className="card">
                    <img style={{width:"50%"}} src={cardPicture} className='mx-auto' alt=""/>
                    <div className="card-body mx-auto">
                        <h4 className="card-title mx-auto">ID: {this.state.id} Lorem ipsum dolor sit amet.</h4>
                        <h4 className="card-title mx-auto">ID: {this.state.registerDto.id} Lorem ipsum dolor sit amet.</h4>
                        <p className="card-text"><b>HEADER:</b> {this.state.registerDto.header}</p>
                        <p className="card-text"><b><mark>CONTENT:</mark></b>{this.state.registerDto.content}</p>
                        <p className="card-text"><i style={{fontWeight:"bold"}}>DATE:</i> <q>{this.state.registerDto.systemDate}</q></p>
                    </div>
                </div>
            </React.Fragment>
        ) // end Return
    } //end render
} // end class BlogView

export default withTranslation()(BlogView)
