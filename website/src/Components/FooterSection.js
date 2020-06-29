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
                                    <li><a href="#">Manila</a></li>
                                    <li><a href="#">Dubai</a></li>
                                    <li><a href="#">Bangkok</a></li>
                                    <li><a href="#">Tokyo</a></li>
                                    <li><a href="#">New York</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Top Hotéis</h3>
                                <ul>
                                    <li><a href="#">Tambo Del Inka</a></li>
                                    <li><a href="#">Al Maha</a></li>
                                    <li><a href="#">Cocoa Island by Como</a></li>
                                    <li><a href="#">Four Seasons Gresham Palace</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Interesses</h3>
                                <ul>
                                    <li><a href="#">Praias</a></li>
                                    <li><a href="#">Viagem em família</a></li>
                                    <li><a href="#">Viagem de despesas</a></li>
                                    <li><a href="#">Comidas &amp; Bebidas</a></li>
                                    <li><a href="#">Lua de mel</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Melhores destinos</h3>
                                <ul>
                                    <li><a href="#">Praia Boracay</a></li>
                                    <li><a href="#">Dubai</a></li>
                                    <li><a href="#">Singapura</a></li>
                                    <li><a href="#">Hongkong</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Acessível</h3>
                                <ul>
                                    <li><a href="#">Comidas &amp; Bebidas</a></li>
                                    <li><a href="#">Vôos de tarifa</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center">
                                <p>Copyright 2016 Free Html5 <a href="#">Module</a>. All Rights Reserved. <br />Made with <i className="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterSection;