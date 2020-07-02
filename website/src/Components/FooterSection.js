import React, {Component} from 'react';

class FooterSection extends Component {
    render() {
        return(
            <footer>
                <div id="footer">
                    <div className="container">
                        <div className="row row-bottom-padded-md">
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Sobre viajar</h3>
                                <p>As melhores histórias são encontradas
                                   entre as páginas de um passaporte...</p>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Top rotas de vôo</h3>
                                <ul>
                                    <li><a href="/deadend">Manila</a></li>
                                    <li><a href="/deadend">Dubai</a></li>
                                    <li><a href="/deadend">Bangkok</a></li>
                                    <li><a href="/deadend">Tokyo</a></li>
                                    <li><a href="/deadend">New York</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Top Hotéis</h3>
                                <ul>
                                    <li><a href="/deadend">Tambo Del Inka</a></li>
                                    <li><a href="/deadend">Al Maha</a></li>
                                    <li><a href="/deadend">Cocoa Island by Como</a></li>
                                    <li><a href="/deadend">Four Seasons Gresham Palace</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Interesses</h3>
                                <ul>
                                    <li><a href="/deadend">Praias</a></li>
                                    <li><a href="/deadend">Viagem em família</a></li>
                                    <li><a href="/deadend">Viagem de despesas</a></li>
                                    <li><a href="/deadend">Comidas &amp; Bebidas</a></li>
                                    <li><a href="/deadend">Lua de mel</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Melhores destinos</h3>
                                <ul>
                                    <li><a href="/deadend">Praia Boracay</a></li>
                                    <li><a href="/deadend">Dubai</a></li>
                                    <li><a href="/deadend">Singapura</a></li>
                                    <li><a href="/deadend">Hongkong</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Acessível</h3>
                                <ul>
                                    <li><a href="/deadend">Comidas &amp; Bebidas</a></li>
                                    <li><a href="/deadend">Vôos de tarifa</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center">
                                <p>Copyright 2016 Free Html5 Module. All Rights Reserved. <br />Made with <i className="icon-heart3"></i> by <a href="http://freehtml5.co/" >Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" >Unsplash</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterSection;