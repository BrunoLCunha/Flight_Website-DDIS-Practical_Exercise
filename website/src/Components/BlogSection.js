import React, {Component} from 'react';

class BlogSection extends Component {
    render() {
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
                                <a href="#"><img className="img-responsive" src="images/place-1.jpg" alt="" /></a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3><a href="#">30% de desconto para viajar por todo o Mundo</a></h3>
                                        <span className="posted_by">15 de Mar.</span>
                                        <span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
                                        <p>São tantas as definições dadas ao ato de viajar, que por muitas vezes nos propomos a criar nossas próprias versões desta paixão que é se aventurar por todo este Planeta. Mas talvez uma das mais lindas definições que já me deparei foi: "Viajar primeiro te deixa sem palavras. Depois te transforma num contador de histórias. - Frantine Makist" Aqui você terá a chance de coletar histórias por todo o mundo com até 30% de desconto nos seus pacotes!</p>
                                        <p><a href="#">Saiba mais...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <a href="#"><img className="img-responsive" src="images/place-2.jpg" alt="" /></a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3><a href="#">Planejando férias!</a></h3>
                                        <span className="posted_by">22 de Jan.</span>
                                        <span className="comment"><a href="">19<i className="icon-bubble2"></i></a></span>
                                        <p>Dizem que quanto mais se viaja, mais se quer viajar. Faz sentido quando lembramos que o ser humano vive atrás de novas experiências. Desta forma, o fim de uma boa viagem na verdade não existe, pois ao retornarmos ao nosso lar, estamos na verdade apenas regenerando forças enquanto planejamos uma nova aventura. Confira por todo nosso website oportunidades de transformar sua vida numa viagem ainda mais incrível!</p>
                                        <p><a href="#">Saiba mais...</a></p>
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
                                        <h3><a href="#">Visite Tóquio (Japão)</a></h3>
                                        <span className="posted_by">06 de Abr.</span>
                                        <span className="comment"><a href="">44<i className="icon-bubble2"></i></a></span>
                                        <p>O Japão é um país de história, arte e cultura. Tem bom desenvolvimento sócio-econômico, Locais que atendem bem ao gosto dos turistas, Tóquio com os seus encantos abraça o mundo! Os seus museus, parques e monumentos históricos, Galerias de artes, naturezas e arquiteturas antigas, Faz dessa cidade uma temática rica em variedades. Vá curti-lo, com certeza você não se arrependerá! - Djalma CMF. Não perca a chance de conhecer este incrível país banhado de cultura, além de inúmeros outros presentes aqui no nosso website!</p>
                                        <p><a href="#">Saiba mais...</a></p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="clearfix visible-md-block"></div>
                    </div>

                    <div className="col-md-12 text-center animate-box">
                        <p><a className="btn btn-primary btn-outline btn-lg" href="#">Veja todos os Posts <i className="icon-arrow-right22"></i></a></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default BlogSection;