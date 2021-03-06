import React, {Component} from 'react';
import Posts from './Posts';

class BlogSection extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [],
            loading: true,
            error: null,
            animation: false
        }
    }
    
    componentDidMount() {
        // REST
        // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        // const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/blog/';
        
        // fetch(proxyUrl + url) 
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({ posts: data, loading: false });
        //         return data;
        //     })
        //     .catch(error =>  this.setState({ error: error, loading: false }));

        // SOAP
        const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/stockquote?wsdl';
		
		var soap = require('soap-everywhere');

        var requestArgs = { a: 8, b: 3};
		soap.createClient(url, function(err, client) {
			if (err) {
				console.error("An error has occurred creating SOAP client: " , err);  
			} else {
				// var description = client.describe();
				// console.log("Client description:" , description);
				client.multiplicar(requestArgs, function(err, result) {
					if (err) {
                        console.log("error on usage client's method");
                        this.setState({ error: err, loading: false, animation: true });
                    }
                    this.setState({posts: JSON.parse(result.mulres), loading: false, animation: true});
				}.bind(this))
			}
		}.bind(this))

    }

    render() {
        let hide = {opacity: 0}
        let fadeIn = {transition: 'opacity 0.5s', opacity: 1}
        if (this.state.loading) {
            return <div style={{textAlign:'center'}}>Loading...</div>
        }
        return(
            <div id="fh5co-blog-section" className="fh5co-section-gray" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section" style={this.state.animation ? fadeIn : hide}>
                            <h3>Notícias recentes</h3>
                            <p>O propósito da vida é vivê-la, experienciá-la ao máximo, agarrar avidamente e sem medo experiências mais ricas e novas. - Eleanor Roosevelt</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-bottom-padded-md" style={this.state.animation ? fadeIn : hide}>
                        {
                            this.state.posts.length === 0 ?
                                <div>Nenhum dado foi pego da API</div>
                            :
                            this.state.posts.map((post, index) => {
                                return  <Posts key={index}
                                            title={post.title}
                                            date={post.date}
                                            comments={post.comments}
                                            description={post.description}
                                            img={post.img}  
                                        />
                                    
                        })}
                    </div>
                    <div className="col-md-12 text-center"  style={this.state.animation ? fadeIn : hide}>
                        <p><a className="btn btn-primary btn-outline btn-lg" href="/blog">Veja todos os Posts <i className="icon-arrow-right22"></i></a></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default BlogSection;