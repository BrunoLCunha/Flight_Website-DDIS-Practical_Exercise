import React, {Component} from 'react';

class DeadEnd extends Component{
    render() {
        return(
            <div className="fh5co-section-gray">
                <div className="container">
                    <p></p>
                    <h1>Oops!</h1>
                    <p>Parece que você chegou no fim do caminho.</p>
                    <p>Ainda não vendemos passagens aéreas e essas coisas, mas você pode nos contar se gostou do que viu até aqui.</p>
                    <p><a className="btn btn-primary btn-outline btn-lg" href="/cart">Confira seu carrinho <i className="icon-arrow-right22"></i></a></p>
                    <p><a className="btn btn-primary btn-outline btn-lg" href="/contact">Fale com a gente <i className="icon-arrow-right22"></i></a></p>
                    <p><a className="btn btn-primary btn-outline btn-lg" href="/"><i className="icon-arrow-left22"></i> Volte para o começo</a></p>
                </div>
            </div>
        )
    }
}

export default DeadEnd;