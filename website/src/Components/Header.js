import React, {Component} from 'react';

class Header extends Component {
    render() {
        return(
            <header id="fh5co-header-section" className="sticky-banner">
                <div className="container">
                    <div className="nav-header">
                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                        <h1 id="fh5co-logo"><a href="/"><i className="icon-airplane"></i>DSIDESTINOS</a></h1>
                        {/*<!-- START #fh5co-menu-wrap -->*/}
                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="fh5co-primary-menu">
                                <li><a href="/">Início</a></li>
                                <li><a href="/vacations" className="fh5co-sub-ddown">Viagens</a></li>
                                <li><a href="/flights">Voos</a></li>
                                <li><a href="/hotel">Hotéis</a></li>
                                <li><a href="/car">Carros</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;