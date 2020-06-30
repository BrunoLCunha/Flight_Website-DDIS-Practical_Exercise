import React, {Component} from 'react';

class BlogSection extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [],
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        let url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/blog/'; 
        
        fetch(url)  
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data, loading: false });
                return data;
            })
            .catch(error =>  this.setState({ error: error, loading: false }));

    }

    render() {

        if (this.state.loading) {
            return <div>Loading...</div>;
        }
    
        if (this.state.error) {
            // console.log(this.state.error)
            // return <div>{this.state.error}</div>;
        }

        return(
            <div id="fh5co-blog-section" className="fh5co-section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Notícias recentes</h3>
                            <p>O propósito da vida é vivê-la, experienciá-la ao máximo, agarrar avidamente e sem medo experiências mais ricas e novas. - Eleanor Roosevelt</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-bottom-padded-md">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <img className="img-responsive" src="images\brett-zeck-eyfMgGvo9PA-unsplash.jpg" alt="" />
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3>30% de desconto para viajar por todo o Mundo</h3>
                                        <span className="posted_by">15 de Mar.</span>
                                        <span className="comment">21 <i className="icon-bubble2"></i></span>
                                        <p>São tantas as definições dadas ao ato de viajar, que por muitas vezes nos propomos a criar nossas próprias versões desta paixão que é se aventurar por todo este Planeta. Mas talvez uma das mais lindas definições que já me deparei foi: "Viajar primeiro te deixa sem palavras. Depois te transforma num contador de histórias. - Frantine Makist" Aqui você terá a chance de coletar histórias por todo o mundo com até 30% de desconto nos seus pacotes!</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <img className="img-responsive" src="images\leo-rivas-R_BLOGXpsOg-unsplash.jpg" alt="" />
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3>Planejando férias!</h3>
                                        <span className="posted_by">22 de Jan.</span>
                                        <span className="comment">19 <i className="icon-bubble2"></i></span>
                                        <p>Dizem que quanto mais se viaja, mais se quer viajar. Faz sentido quando lembramos que o ser humano vive atrás de novas experiências. Desta forma, o fim de uma boa viagem na verdade não existe, pois ao retornarmos ao nosso lar, estamos na verdade apenas regenerando forças enquanto planejamos uma nova aventura. Confira por todo nosso website oportunidades de transformar sua vida numa viagem ainda mais incrível!</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="clearfix visible-sm-block"></div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <img className="img-responsive" src="images\pat-krupa-SDrzIL4gy5Y-unsplash.jpg" alt="" />
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3>Visite Tóquio (Japão)</h3>
                                        <span className="posted_by">06 de Abr.</span>
                                        <span className="comment">44 <i className="icon-bubble2"></i></span>
                                        <p>O Japão é um país de história, arte e cultura. Tem bom desenvolvimento sócio-econômico, Locais que atendem bem ao gosto dos turistas, Tóquio com os seus encantos abraça o mundo! Os seus museus, parques e monumentos históricos, Galerias de artes, naturezas e arquiteturas antigas, Faz dessa cidade uma temática rica em variedades. Vá curti-lo, com certeza você não se arrependerá! - Djalma CMF. Não perca a chance de conhecer este incrível país banhado de cultura, além de inúmeros outros presentes aqui no nosso website!</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="clearfix visible-md-block"></div>
                    </div>

                    <div className="col-md-12 text-center animate-box">
                        <p><a className="btn btn-primary btn-outline btn-lg" href="/blog">Veja todos os Posts <i className="icon-arrow-right22"></i></a></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default BlogSection;