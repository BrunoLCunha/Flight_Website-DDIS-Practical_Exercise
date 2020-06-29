import React, {Component} from 'react';
import BlogSection from './BlogSection';
import DestinationSection from './DestinationSection';
import TourSection from './TourSection';
import HeroSection from './HeroSection';

class PageWrapper extends Component {
    render(){
        return(
            <div id="fh5co-wrapper">

            <HeroSection />
            <TourSection />
            <DestinationSection />
            <BlogSection />

            </div>
        )
    }
}

export default PageWrapper