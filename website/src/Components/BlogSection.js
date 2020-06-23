import React, {Component} from 'react';

class BlogSection extends Component {
    render() {
        return(
            <div id="fh5co-blog-section" className="fh5co-section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Recent From Blog</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-bottom-padded-md">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <a href="#"><img className="img-responsive" src="images/place-1.jpg" alt="" /></a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3><a href="#">30% Discount to Travel All Around the World</a></h3>
                                        <span className="posted_by">Sep. 15th</span>
                                        <span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#">Learn More...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <a href="#"><img className="img-responsive" src="images/place-2.jpg" alt="" /></a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3><a href="#">Planning for Vacation</a></h3>
                                        <span className="posted_by">Sep. 15th</span>
                                        <span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#">Learn More...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="clearfix visible-sm-block"></div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <a href="#"><img className="img-responsive" src="images/place-3.jpg" alt="" /></a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3><a href="#">Visit Tokyo Japan</a></h3>
                                        <span className="posted_by">Sep. 15th</span>
                                        <span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#">Learn More...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="clearfix visible-md-block"></div>
                    </div>

                    <div className="col-md-12 text-center animate-box">
                        <p><a className="btn btn-primary btn-outline btn-lg" href="#">See All Post <i className="icon-arrow-right22"></i></a></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default BlogSection;