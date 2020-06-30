import React, {Component} from 'react';

class Posts extends Component {
    render() {
        return( 
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="fh5co-blog animate-box">
                    <img className="img-responsive" src="images\leo-rivas-R_BLOGXpsOg-unsplash.jpg" alt="" />
                    <div className="blog-text">
                        <div className="prod-title">
                            <h3>{this.props.title}</h3>
                            <span className="posted_by">{this.props.date}</span>
                            <span className="comment">{this.props.comments} <i className="icon-bubble2"></i></span>
                            <p>{this.props.description}</p>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Posts;