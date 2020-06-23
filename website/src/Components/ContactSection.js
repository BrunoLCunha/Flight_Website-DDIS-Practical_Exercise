import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class ContactSection extends Component {
    render(){
        return(
            <div id="fh5co-contact" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Informação de Contato</h3>
						<p>Site construído pelo grupo 5 da turma 2020104 da matéria DSID.</p>
					</div>
				</div>
				<form action="#">
					<div className="row animate-box">
						<div className="col-md-6">
							<h3 className="section-title">Endereço</h3>
							<p>Escola de Artes, Ciências e Humanidades da Universidade de São Paulo.</p>
							<ul className="contact-info">
								<li><i className="icon-location-pin"></i>Rua Arlindo Béttio, 1000 - Ermelino Matarazzo, São Paulo - SP, 03828-000</li>
								<li><i className="icon-phone2"></i>+55 11 91234-5678</li>
								<li><i className="icon-mail"></i><a href="#">DSID5@usp.br</a></li>
								<li><i className="icon-globe2"></i><a href="#">each.usp.br</a></li>
							</ul>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Name" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Email" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<textarea name="" className="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="submit" value="Send Message" className="btn btn-primary" />
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