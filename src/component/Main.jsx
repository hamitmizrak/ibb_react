import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong className="text-primary">Merhabalar</strong> 
                    {/* inline css */}
                    <span style={{"color":"red"}}>Nasılsınız Güzel insanlar.</span> 
                </div>

                <button className="btn btn-primary mt-3 mb-3">/blog/list  buton </button>

{/* paragrag: */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, pariatur deleniti. Impedit neque facere libero dignissimos obcaecati at! Veritatis alias quia ex ut odio voluptas unde illo culpa enim cupiditate.
                Qui obcaecati ipsa numquam, expedita nam nihil adipisci blanditiis eum mollitia quas optio impedit enim, eaque sequi facilis vel. Autem enim eius inventore deserunt, nobis doloribus porro omnis accusamus quasi.
                Voluptatibus itaque consequuntur voluptate blanditiis repellendus temporibus reiciendis odio enim adipisci minima deserunt, consequatur dignissimos asperiores assumenda dolor similique id? Ad, tenetur velit a suscipit laboriosam commodi alias unde. Veniam!
                Amet, deserunt nam rerum similique, iure quasi repellat labore suscipit architecto tenetur odit ea ipsam, repellendus numquam? Dicta vel, sit sequi earum eligendi, voluptas perferendis, ad reprehenderit corporis commodi ipsam?
                Reiciendis animi voluptas temporibus, vero placeat totam magnam, commodi ea necessitatibus ut adipisci. Odio minus vitae illo sequi! Architecto consequatur voluptas illum repellat et velit quibusdam adipisci odit aperiam debitis.
                Culpa, necessitatibus totam! Fugit cupiditate temporibus, ab tenetur dolores, incidunt debitis illo minima doloribus perferendis praesentium repellat vitae autem eaque minus sequi odit, qui similique dolorum. Quibusdam modi ea iusto?
                Quasi ad culpa sapiente obcaecati ullam quam id pariatur nihil enim earum dolore modi, corrupti sit delectus architecto quibusdam dignissimos? Veniam architecto libero nam dolorem officiis molestias consectetur ullam itaque?
                Repellendus tempore, magni nisi, cupiditate aspernatur at voluptatum possimus velit autem, fuga sed dolor similique sequi natus. Esse, quibusdam earum porro fugiat distinctio facere vel, recusandae deserunt quisquam, aliquam minima!
                Officiis corrupti alias amet dicta. Nesciunt expedita sequi doloremque rerum dolorem molestias. Ex optio animi, fugit suscipit vitae quisquam ipsam omnis numquam beatae, consequuntur debitis, sit molestiae harum dicta? Eveniet?
                At incidunt corporis obcaecati quasi! Unde recusandae eos esse harum, sunt laborum qui asperiores corrupti maxime animi magni voluptatum ratione quisquam incidunt ex delectus aspernatur? Aut a ut illum pariatur.</p>
            </React.Fragment>
        )
    }
}
