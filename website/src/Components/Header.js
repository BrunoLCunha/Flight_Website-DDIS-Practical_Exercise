import React, {Component} from 'react';
import Link from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header id="fh5co-header-section" className="sticky-banner">
                <div className="container">
                    <div className="nav-header">
                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                        <h1 id="fh5co-logo"><a href="index.html"><i className="icon-airplane"></i>Travel</a></h1>
                        {/*<!-- START #fh5co-menu-wrap -->*/}
                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="fh5co-primary-menu">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li>
                                    <a href="/vacations" className="fh5co-sub-ddown">Vacations</a>
                                    <ul className="fh5co-sub-menu">
                                        <li><a href="#">Family</a></li>
                                        <li><a href="#">CSS3 &amp; HTML5</a></li>
                                        <li><a href="#">Angular JS</a></li>
                                        <li><a href="#">Node JS</a></li>
                                        <li><a href="#">Django &amp; Python</a></li>
                                    </ul>
                                </li>
                                <li><a href="/flights">Flights</a></li>
                                <li><a href="/hotel">Hotel</a></li>
                                <li><a href="/car">Car</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;