import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

class ContactSection extends Component {
	constructor(props) {
        super(props)
        
        this.state = {
			animation: false
        }
	}
	componentDidMount() {
		this.setState({animation: true})
	}
	
    render(){
		let hide = {opacity: 0}
		let fadeIn = {transition: 'opacity 0.5s', opacity: 1}
		
        return(
            <div id="fh5co-contact" className="fh5co-section-gray">
			<div className="container" style={this.state.animation ? fadeIn : hide}>
					<div>
						<h3>Sobre Nós</h3>
						<p>Site de viagens construído para o trabalho da disciplina DSID, ministrada pelo Prof. Dr. Fantinato.</p>
						<h3>Sobre o projeto</h3>
						<p>APIs disponibilizadas por 
							<a href="https://rapidapi.com/"> RapidAPI</a>, 
							<a href="https://rapidapi.com/apidojo/api/hotels4/endpoints"> apidojo</a> e 
							<a href="https://rapidapi.com/skyscanner/api/skyscanner-flight-search"> Skyscanner</a>.
							Imagens obtidas pelo <a href="https://unsplash.com">Unsplash</a>.
							Template desenvolvido por <a href="https://freehtml5.co/">Free HTML5</a>.
						</p>
					</div>
				<form>
					<div >
						<div className="col-md-6">
							<h3 className="section-title">Contato</h3>
							<p>Grupo 5</p>
							<ul className="contact-info">
								<li><i class="fab fa-github"></i><a href="https://github.com/BrunoLCunha/Flight_Website-DDIS-Practical_Exercise">Projeto no Github</a></li>
								<li><i className="icon-mail"></i><a href="mailto:bruno_cunha@usp.br">Bruno Cunha</a></li>
								<li><i className="icon-mail"></i><a href="mailto:joaovicttor_a@usp.br">João Victor</a></li>
								<li><i className="icon-mail"></i><a href="mailto:lincolnams4@usp.br">Lincoln Souza</a></li>
								<li><i className="icon-mail"></i><a href="mailto:renan.ernesto@usp.br">Renan Ernesto</a></li>
							</ul>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Nome" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Email" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<textarea name="" className="form-control" id="" cols="30" rows="7" placeholder="Mensagem"></textarea>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="submit" value="Enviar Mensagem" className="btn btn-primary" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		 <div id="map"><Map google={this.props.google} zoom={15}
                    initialCenter={{
                        lat: -23.482323, 
                        lng: -46.500503
                    }}
                /> </div>
         </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAcRC6B-u1eA41zjyHKzQtT053keo7QT78')
   })(ContactSection);