import React, {Component} from 'react';

class DestinationSection extends Component {
    render() {
        return(
            <div id="fh5co-destination">
			<div className="tour-fluid">
				<div className="row">
					<div className="col-md-12">
						<ul id="fh5co-destination-list" className="animate-box">
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-1.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Los Angeles</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-2.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Hongkong</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-3.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Italy</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-4.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Philippines</h2>
									</div>
								</a>
							</li>

							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-5.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Japan</h2>
									</div>
								</a>
							</li>
							<li className="one-half text-center">
								<div className="title-bg">
									<div className="case-studies-summary">
										<h2>Most Popular Destinations</h2>
										<span><a href="#">View All Destinations</a></span>
									</div>
								</div>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-6.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Paris</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-7.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Singapore</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-8.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Madagascar</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-9.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Egypt</h2>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" style={{backgroundImage: "%PUBLIC_URL%/images/place-10.jpg"}}>
								<a href="#">
									<div className="case-studies-summary">
										<h2>Indonesia</h2>
									</div>
								</a>
							</li>
						</ul>		
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default DestinationSection;