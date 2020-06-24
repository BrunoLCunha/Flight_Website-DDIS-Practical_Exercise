import React, {Component} from 'react';
import CommentsSection from './CommentsSection';
import BlogSection from './BlogSection';
import FooterSection from './FooterSection';
import DestinationSection from './DestinationSection';
import FeatureSection from './FeatureSection';
import TourSection from './TourSection';
import HeroSection from './HeroSection';
import Header from './Header';

class PageWrapper extends Component {
    render(){
        return(
            <div id="fh5co-wrapper">

            <HeroSection />
            <TourSection />
            <FeatureSection />
            <DestinationSection />
            <BlogSection />
            <CommentsSection />

            </div>
        )
    }
}

export default PageWrapper