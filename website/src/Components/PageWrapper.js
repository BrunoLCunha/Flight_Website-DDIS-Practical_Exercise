import React, {Component} from 'react';
import CommentsSection from './CommentsSection';
import BlogSection from './BlogSection';
import FooterSection from './FooterSection';
import DestinationSection from './DestinationSection';
import FeatureSection from './FeatureSection';
import TourSection from './TourSection';
import HeroSection from './HeroSection';

class PageWrapper extends Component {
    render(){
        return(
            <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <header id="fh5co-header-section" class="sticky-banner">
                    <div class="container">
                        <div class="nav-header">
                            <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                            <h1 id="fh5co-logo"><a href="index.html"><i class="icon-airplane"></i>Travel</a></h1>
                            {/*<!-- START #fh5co-menu-wrap -->*/}
                            <nav id="fh5co-menu-wrap" role="navigation">
                                <ul class="sf-menu" id="fh5co-primary-menu">
                                    <li class="active"><a href="index.html">Home</a></li>
                                    <li>
                                        <a href="vacation.html" class="fh5co-sub-ddown">Vacations</a>
                                        <ul class="fh5co-sub-menu">
                                            <li><a href="#">Family</a></li>
                                            <li><a href="#">CSS3 &amp; HTML5</a></li>
                                            <li><a href="#">Angular JS</a></li>
                                            <li><a href="#">Node JS</a></li>
                                            <li><a href="#">Django &amp; Python</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="flight.html">Flights</a></li>
                                    <li><a href="hotel.html">Hotel</a></li>
                                    <li><a href="car.html">Car</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            
            <HeroSection />
            <TourSection />
            <FeatureSection />
            <DestinationSection />
            <BlogSection />
            <CommentsSection />
            <FooterSection />
            </div>
            </div>
        )
    }
}

export default PageWrapper