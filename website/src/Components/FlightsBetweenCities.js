import React, {Component} from 'react';
import FlightsBetweenAirports from './FlightsBetweenAirports';


class FlightsBetweenCities extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataFrom: [],
            dataTo: [],
            loading: 0,
            error: null
        }
    }

    async componentDidMount() {

        let url = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/' +
        this.props.country + '/' + this.props.currency + '/' + this.props.locale + '/' + '?query=' + this.props.from; 
        fetch( url, {headers: this.props.rapidCredentials})  
            .then(response => response.json())
            .then(data => {
                this.setState({ dataFrom: data, loading: this.state.loading+1 });
                return data;
            })
            .catch(error =>  this.setState({ error: error, loading: this.state.loading+2 }));

        url = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/' +
        this.props.country + '/' + this.props.currency + '/' + this.props.locale + '/' + '?query=' + this.props.to; 
        fetch( url, {headers: this.props.rapidCredentials})  
            .then(response => response.json())
            .then(data => {
                this.setState({ dataTo: data, loading: this.state.loading+1 });
                return data;
            })
            .catch(error =>  this.setState({ error: error, loading: this.state.loading+2 }));
        
    }

    render() {
        if (this.state.loading < 2) {
            return <div>Loading...</div>;
        }
    
        if (this.state.error) {
            return <div>{this.state.error}</div>;
        }

        return (
            <div id="fh5co-tours" className="fh5co-section-gray">
			<div className="container">
                <div className="row">
                    {this.state.dataFrom.Places.map((aptFrom, i) => {
                        return this.state.dataTo.Places.map((aptTo, j) => {
                            return <FlightsBetweenAirports 
                                        rapidCredentials={this.props.rapidCredentials}
                                        country={this.props.country} 
                                        currency={this.props.currency} 
                                        locale={this.props.locale} 
                                        from={aptFrom.PlaceId}
                                        to={aptTo.PlaceId}
                                        outboundpartialdate={this.props.outboundpartialdate}
                                        inboundpartialdate={this.props.inboundpartialdate} 
                                        key={(i,j)}
                                    />
                        })
                    })}
                </div>
            </div>
            </div>
        )
    }
}

export default FlightsBetweenCities;