import React, {Component} from 'react';
import Link from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header id="fh5co-header-section" className="sticky-banner">
                <div className="container">
                    <div className="nav-header">
                        <a href="/" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                        <h1 id="fh5co-logo"><a href="/"><i className="icon-airplane"></i>DSIDESTINOS</a></h1>
                        {/*<!-- START #fh5co-menu-wrap -->*/}
                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="fh5co-primary-menu">
                                <li className="active"><a href="/">Menu</a></li>
                                <li>
                                    <a href="/vacations" className="fh5co-sub-ddown">Viagens</a>
                                    <ul className="fh5co-sub-menu">
                                        <li><a href="/">Family</a></li>
                                        <li><a href="/">CSS3 &amp; HTML5</a></li>
                                        <li><a href="/">Angular JS</a></li>
                                        <li><a href="/">Node JS</a></li>
                                        <li><a href="/">Django &amp; Python</a></li>
                                    </ul>
                                </li>
                                <li><a href="/flights">Vôos</a></li>
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