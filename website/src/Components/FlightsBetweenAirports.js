import React, {Component} from 'react';
import Flight from './Common/Flight';

class FlightsBetweenAirports extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            dataAPI: [],
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        let url = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/' +
        this.props.country + '/' + this.props.currency + '/' + this.props.locale + '/' + this.props.from + '/' +
        this.props.to + '/' + this.props.outboundpartialdate + '?inboundpartialdate=' + this.props.inboundpartialdate; 
        
        fetch( url, {headers: this.props.rapidCredentials})  
            .then(response => response.json())
            .then(data => {
                this.setState({ dataAPI: data, loading: false });
                return data;
            })
            .catch(error =>  this.setState({ error: error, loading: false }));
        
    }

    render() {
        if (this.state.loading) {
            //return <div>Loading...</div>;
        }
    
        if (this.state.error) {
            // console.log(this.state.error)
            // return <div>{this.state.error}</div>;
        }

        if(!this.state.dataAPI.Quotes) {
            return null
        }
        return (
            this.state.dataAPI.Quotes.map((quote, i) => {
                return <Flight
                            from = {this.state.dataAPI.Places.find(elem => elem.PlaceId == quote.OutboundLeg.OriginId).IataCode}
                            to = {this.state.dataAPI.Places.find(elem => elem.PlaceId == quote.OutboundLeg.DestinationId).IataCode}
                            dateGo = {new Date((quote.OutboundLeg.DepartureDate+'Z')).toUTCString().replace(' 00:00:00 GMT','')}
                            carryGo = {this.state.dataAPI.Carriers.find(elem => elem.CarrierId == quote.OutboundLeg.CarrierIds[0]).Name}
                            dateBack = {quote.InboundLeg ? new Date((quote.InboundLeg.DepartureDate+'Z')).toUTCString().replace(' 00:00:00 GMT','') : null}
                            carryBack = {quote.InboundLeg ? this.state.dataAPI.Carriers.find(elem => elem.CarrierId == quote.InboundLeg.CarrierIds[0]).Name : null}
                            price = {this.state.dataAPI.Currencies[0].Symbol + ' ' + parseFloat(quote.MinPrice).toFixed(2)}
                            key={i}
                        />
            })
        )
    }
}

export default FlightsBetweenAirports;