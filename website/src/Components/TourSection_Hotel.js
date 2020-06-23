import React, {Component} from 'react';
import DestinationsRow from './DestinationsRow';

class TourSection_Hotel extends Component {
    render() {
        return(
            <div id="fh5co-tours" class="fh5co-section-gray">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Popular hotel & hostel destinations</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<DestinationsRow />
				<DestinationsRow />
				<div class="row">
					<div class="col-md-12 animate-box">
						<h2 class="heading-title">Travel Booking guide to book a perfect hotel</h2>
					</div>
					<div class="col-md-6 animate-box">
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue </p>
						<p>Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue </p>
						<a href="#">Read More <i class="icon-arrow-right22"></i></a>
					</div>
					<div class="col-md-6 animate-box">
						<img class="img-responsive" src="images/cover_bg_2.jpg" alt="travel" /> 
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default TourSection_Hotel;