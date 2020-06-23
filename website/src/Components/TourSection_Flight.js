import React, {Component} from 'react';
import DestinationsRow from './DestinationsRow';

class TourSection_Flight extends Component {
    render() {
        return(
            <div id="fh5co-tours" class="fh5co-section-gray">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Hot Tours</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<div class="row row-bottom-padded-md">
					<div class="col-md-12 animate-box">
						<h2 class="heading-title">Todays Flight Deal</h2>
					</div>
					<div class="col-md-6 animate-box">
						<div class="row">
							<div class="col-md-12">
								<h4>Better Deals, More Abilities</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
							</div>
							<div class="col-md-12">
								<h4>Keep up with the news of your airline</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
							</div>
							<div class="col-md-12">
								<h4>In-Flight Experience</h4>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<img class="img-responsive" src="images/cover_bg_3.jpg" alt="travel" />
						<a href="#" class="flight-book">
							<div class="plane-name">
								<span class="p-flight">United States Airways</span>
							</div>
							<div class="desc">
								<div class="left">
									<h4>HK-MNL</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div class="right">
									<span class="price">
										<i class="icon-arrow-down22"></i>
										$1000
									</span>
								</div>
							</div>
						</a>
						<a href="#" class="flight-book">
							<div class="plane-name">
								<span class="p-flight">Qatar Airways</span>
							</div>
							<div class="desc">
								<div class="left">
									<h4>HK-MNL</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div class="right">
									<span class="price">
										<i class="icon-arrow-down22"></i>
										$790
									</span>
								</div>
							</div>
						</a>
						<a href="#" class="flight-book">
							<div class="plane-name">
								<span class="p-flight">Philippine Airline</span>
							</div>
							<div class="desc">
								<div class="left">
									<h4>MNL-HK</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div class="right">
									<span class="price">
										<i class="icon-arrow-down22"></i>
										$500
									</span>
								</div>
							</div>
						</a>
						<a href="#" class="flight-book">
							<div class="plane-name">
								<span class="p-flight">China Airways</span>
							</div>
							<div class="desc">
								<div class="left">
									<h4>HK-LAS</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div class="right">
									<span class="price">
										<i class="icon-arrow-down22"></i>
										$900
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
				<DestinationsRow />
				<DestinationsRow />
			</div>
		</div>

        )
    }
}

export default TourSection_Flight;