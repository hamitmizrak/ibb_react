import React, {Component} from 'react'

// CSS Main
import './main.css';

// image
import cardPicture from "../assist/img/resim.jpg"

// Router
import {Link} from "react-router-dom";
import OtherLanguageReusability from '../internationalization/OtherLanguageReusability';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong className="text-primary">Merhabalar</strong>
                    {/* inline css */}
                    <span style={{"color": "red"}}>Nasılsınız Güzel insanlar.</span>
                </div>

                <Link to="/blog/list2" className="btn btn-primary"><i class="fa-solid fa-plus"></i>Function List</Link>

                <Link to="/blog/list" className="btn btn-primary">  <img src={cardPicture}/></Link>

                <br/>
                {/* paragrag: */}
                <p>Lorem At s neque minus! Neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima vel ipsa laudantium nostrum nobis, facilis laboriosam hic culpa quisquam velit. Ipsum velit sapiente officia iusto perferendis consequuntur magnam veritatis ducimus?
                Dolor itaque commodi, porro, quae minima, vitae mollitia est nihil eos aliquam accusantium eveniet neque ad inventore? Eius perspiciatis dolores error voluptatum impedit, dolor ducimus saepe ut animi officia. Voluptatibus?
                Necessitatibus ea totam labore delectus iste earum aperiam optio at repellendus, ipsa quisquam rerum esse quo ipsum quam tempore et maiores perspiciatis ipsam id culpa nesciunt! Labore minima excepturi minus?
                Praesentium, tempora voluptatibus! Doloribus, eum ad quisquam necessitatibus tempore suscipit similique labore nam est facilis blanditiis et quis placeat beatae ratione numquam soluta at nesciunt recusandae error? Labore, excepturi deserunt!</p>
            </React.Fragment>
        )
    }
}
