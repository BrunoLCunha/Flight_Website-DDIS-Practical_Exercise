import React, {Component} from 'react';

class FeatureSection extends Component {
    render() {
        return(
            <div id="fh5co-features">
			<div className="container">
				<div className="row">
					<div className="col-md-4 animate-box">

						<div className="feature-left">
							<span className="icon">
								<i className="icon-hotairballoon"></i>
							</span>
							<div className="feature-copy">
								<h3>Family Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>

					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-search"></i>
							</span>
							<div className="feature-copy">
								<h3>Travel Plans</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-wallet"></i>
							</span>
							<div className="feature-copy">
								<h3>Honeymoon</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 animate-box">

						<div className="feature-left">
							<span className="icon">
								<i className="icon-wine"></i>
							</span>
							<div className="feature-copy">
								<h3>Business Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>

					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-genius"></i>
							</span>
							<div className="feature-copy">
								<h3>Solo Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>
					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-chat"></i>
							</span>
							<div className="feature-copy">
								<h3>Explorer</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default FeatureSection;