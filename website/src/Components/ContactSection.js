import React, {Component} from 'react';

class ContactSection extends Component {
    render(){
        return(
            <div id="fh5co-contact" class="fh5co-section-gray">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Informação de Contato</h3>
						<p>Site construído pelo grupo 5 da turma 2020104 da matéria DSID.</p>
					</div>
				</div>
				<form action="#">
					<div class="row animate-box">
						<div class="col-md-6">
							<h3 class="section-title">Endereço</h3>
							<p>Escola de Artes, Ciências e Humanidades da Universidade de São Paulo.</p>
							<ul class="contact-info">
								<li><i class="icon-location-pin"></i>Rua Arlindo Béttio, 1000 - Ermelino Matarazzo, São Paulo - SP, 03828-000</li>
								<li><i class="icon-phone2"></i>+55 11 91234-5678</li>
								<li><i class="icon-mail"></i><a href="#">DSID5@usp.br</a></li>
								<li><i class="icon-globe2"></i><a href="#">each.usp.br</a></li>
							</ul>
						</div>
						<div class="col-md-6">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Name" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Email" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<textarea name="" class="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<input type="submit" value="Send Message" class="btn btn-primary" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
        )
    }
}