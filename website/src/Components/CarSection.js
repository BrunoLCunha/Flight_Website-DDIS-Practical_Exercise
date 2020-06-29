import React, {Component} from 'react';

class CarSection extends Component {
    render() {
        return(
            <div id="fh5co-car" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Aluguel de carros</h3>
						<p>Descubra aqui onde alugar um carro para sua viagem com o melhor preço.</p>
					</div>
				</div>
				<div className="row row-bottom-padded-md">
					<div className="col-md-6 animate-box">
						<div className="car">
							<div className="one-4">
								<h3>Economy</h3>
								<span className="price">$100<small> / day</small></span>
								<span className="price">$200<small> / week</small></span>
								<span className="price">$250<small> / mos.</small></span>
								<span className="price">$350<small> Total (Tax incl.)</small></span>
							</div>
							<div className="one-1" style={{backgroundImage: "%PUBLIC_URL%/images/car-1.jpg"}}>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="car">
							<div className="one-4">
								<h3>Economy</h3>
								<span className="price">$100<small> / day</small></span>
								<span className="price">$200<small> / week</small></span>
								<span className="price">$250<small> / mos.</small></span>
								<span className="price">$350<small> Total (Tax incl.)</small></span>
							</div>
							<div className="one-1" style={{backgroundImage: "%PUBLIC_URL%/images/car-2.jpg"}}>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="car">
							<div className="one-4">
								<h3>Luxury</h3>
								<span className="price">$100<small> / day</small></span>
								<span className="price">$200<small> / week</small></span>
								<span className="price">$250<small> / mos.</small></span>
								<span className="price">$350<small> Total (Tax incl.)</small></span>
							</div>
							<div className="one-1" style={{backgroundImage: "%PUBLIC_URL%/images/car-3.jpg"}}>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="car">
							<div className="one-4">
								<h3>Economy</h3>
								<span className="price">$100<small> / day</small></span>
								<span className="price">$200<small> / week</small></span>
								<span className="price">$250<small> / mos.</small></span>
								<span className="price">$350<small> Total (Tax incl.)</small></span>
							</div>
							<div className="one-1" style={{backgroundImage: "%PUBLIC_URL%/images/car-4.jpg"}}>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="car">
							<div className="one-4">
								<h3>Economy</h3>
								<span className="price">$100<small> / day</small></span>
								<span className="price">$200<small> / week</small></span>
								<span className="price">$250<small> / mos.</small></span>
								<span className="price">$350<small> Total (Tax incl.)</small></span>
							</div>
							<div className="one-1" style={{backgroundImage: "%PUBLIC_URL%/images/car-5.jpg"}}>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="car">
							<div className="one-4">
								<h3>Economy</h3>
								<span className="price">$100<small> / day</small></span>
								<span className="price">$200<small> / week</small></span>
								<span className="price">$250<small> / mos.</small></span>
								<span className="price">$350<small> Total (Tax incl.)</small></span>
							</div>
							<div className="one-1" style={{backgroundImage: "%PUBLIC_URL%/images/car-6.jpg"}}>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default CarSection;