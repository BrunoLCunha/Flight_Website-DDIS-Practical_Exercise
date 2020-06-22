import React, {Component} from 'react';

class BlogSection extends Component {
    render() {
        return(
            <div id="fh5co-blog-section" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Recent From Blog</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-bottom-padded-md">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="fh5co-blog animate-box">
                                <a href="#"><img class="img-responsive" src="images/place-1.jpg" alt="" /></a>
                                <div class="blog-text">
                                    <div class="prod-title">
                                        <h3><a href="#">30% Discount to Travel All Around the World</a></h3>
                                        <span class="posted_by">Sep. 15th</span>
                                        <span class="comment"><a href="">21<i class="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#">Learn More...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="fh5co-blog animate-box">
                                <a href="#"><img class="img-responsive" src="images/place-2.jpg" alt="" /></a>
                                <div class="blog-text">
                                    <div class="prod-title">
                                        <h3><a href="#">Planning for Vacation</a></h3>
                                        <span class="posted_by">Sep. 15th</span>
                                        <span class="comment"><a href="">21<i class="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#">Learn More...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="clearfix visible-sm-block"></div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="fh5co-blog animate-box">
                                <a href="#"><img class="img-responsive" src="images/place-3.jpg" alt="" /></a>
                                <div class="blog-text">
                                    <div class="prod-title">
                                        <h3><a href="#">Visit Tokyo Japan</a></h3>
                                        <span class="posted_by">Sep. 15th</span>
                                        <span class="comment"><a href="">21<i class="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="#">Learn More...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="clearfix visible-md-block"></div>
                    </div>

                    <div class="col-md-12 text-center animate-box">
                        <p><a class="btn btn-primary btn-outline btn-lg" href="#">See All Post <i class="icon-arrow-right22"></i></a></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default BlogSection;