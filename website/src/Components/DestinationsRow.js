import React, {Component} from 'react';

class DestinationsRow extends Component {
    render() {
        return(
            <div class="row">
					<div class="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#"><img src="images/place-1.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
							<div class="desc">
								<span></span>
								<h3>New York</h3>
								<span>3 nights + Flight 5*Hotel</span>
								<span class="price">$1,000</span>
								<a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#"><img src="images/place-2.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
							<div class="desc">
								<span></span>
								<h3>Philippines</h3>
								<span>4 nights + Flight 5*Hotel</span>
								<span class="price">$1,000</span>
								<a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#"><img src="images/place-3.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
							<div class="desc">
								<span></span>
								<h3>Hongkong</h3>
								<span>2 nights + Flight 4*Hotel</span>
								<span class="price">$1,000</span>
								<a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div class="col-md-12 text-center animate-box">
						<p><a class="btn btn-primary btn-outline btn-lg" href="#">See All Offers <i class="icon-arrow-right22"></i></a></p>
					</div>
				</div>
        )
    }
}

export default DestinationsRow;