import React, {Component} from 'react';

class CommentsSection extends Component {
    render(){
        return(
            <div id="fh5co-testimonial" style={{backgroundImage: "%PUBLIC_URL%/images/img_bg_1.jpg"}}>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Happy Clients</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-testimony animate-box">
                                <blockquote>
                                    <span className="quote"><span><i className="icon-quotes-right"></i></span></span>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                </blockquote>
                                <p className="author">John Doe, CEO <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> <span className="subtext">Creative Director</span></p>
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                            <div className="box-testimony animate-box">
                                <blockquote>
                                    <span className="quote"><span><i className="icon-quotes-right"></i></span></span>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                                </blockquote>
                                <p className="author">John Doe, CEO <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> <span className="subtext">Creative Director</span></p>
                            </div>
                            
                            
                        </div>
                        <div className="col-md-4">
                            <div className="box-testimony animate-box">
                                <blockquote>
                                    <span className="quote"><span><i className="icon-quotes-right"></i></span></span>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                </blockquote>
                                <p className="author">John Doe, Founder <a href="#">FREEHTML5.co</a> <span className="subtext">Creative Director</span></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentsSection;