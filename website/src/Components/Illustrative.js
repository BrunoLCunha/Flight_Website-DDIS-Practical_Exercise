import React, {Component} from 'react';

class Illustrative extends Component{
    render() {
        return(
            <div className="fh5co-section-gray">
                <div className="container">
                    <p></p>
                    <h1>Oops!</h1>
                    <p>Esse era apenas uma feature de ilustração.</p>
                    <p>Para acessar vôos e hotéis, além de adicioná-los no carrinho, acesse os resultados retornados pelas pesquisas</p>
                    <p><a className="btn btn-primary btn-outline btn-lg" href="/flights">Buscar vôos <i className="icon-arrow-right22"></i></a></p>
                    <p><a className="btn btn-primary btn-outline btn-lg" href="/hotel">Buscar hotéis <i className="icon-arrow-right22"></i></a></p>
                    <p><a className="btn btn-primary btn-outline btn-lg" href="/"><i className="icon-arrow-left22"></i> Volte para o começo</a></p>
                </div>
            </div>
        )
    }
}

export default Illustrative;