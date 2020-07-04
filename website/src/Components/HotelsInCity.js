import React, {Component} from 'react';
import Hotel from './Common/Hotel';

class HotelsInCity extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            data: null,
            photo: null,
            loading: 0,
            error: null
        }
    }

    async componentDidMount() {
        if (this.props.hotel && !this.state.data) {

            let url = 'https://hotels4.p.rapidapi.com/properties/get-details?id=' + this.props.hotel.destinationId
            fetch( url, {headers: this.props.rapidCredentials})  
                .then(response => response.json())
                .then(data => {
                    this.setState({ data: data.data.body.propertyDescription, loading: this.state.loading+1 });
                    return data;
                })
                .catch(error =>  this.setState({ error: error, loading: false }));

            url = "https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=" + this.props.hotel.destinationId
            fetch( url, {headers: this.props.rapidCredentials})  
                .then(response => response.json())
                .then(data => {
                    this.setState({ photo: data.hotelImages[0].baseUrl.replace('{size}','y'), loading: this.state.loading+1 });
                    return data;
                })
                .catch(error =>  this.setState({ error: error, loading: false }));
        }
    }

    render() {
        if (this.state.loading < 2) {
            //return <div>Loading...</div>;
        }
    
        if (this.state.error) {
            // console.log(this.state.error)
            // return <div>{this.state.error}</div>;
        }
        if(!this.state.data) {
            return null
        }
        return (
            <Hotel
                city={this.props.city}
                name={this.state.data.name}
                stars={this.state.data.starRating}
                price={this.state.data.featuredPrice.currentPrice.formatted}
                description={this.state.data.tagline[0].replace('<b>', '').replace('</b>','')}
                photoUrl={this.state.photo}
            />
        )
    }
}

export default HotelsInCity;