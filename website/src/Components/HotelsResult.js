import React, {Component} from 'react';
import HotelsInCity from './HotelsInCity';
import rapidCredentials from './rapidCredentials2';
import { Redirect } from 'react-router';

class HotelsResult extends Component {
     
    constructor(props) {
		super(props)

		this.state = {
            city: this.props.location.state ? this.props.location.state.city : null,
            data: null,
			checkIn: this.props.location.state ? this.props.location.state.checkIn : null,
			checkOut: this.props.location.state ? this.props.location.state.checkOut : null,
            thisRedirect: false,
            loading: true,
            error: null
        }
	}

    async componentDidMount() {
        if(this.state.city && !this.state.data) {
            let url = 'https://hotels4.p.rapidapi.com/locations/search?locale=pt_br&query=' + this.state.city.replace(' ', '%20')
            fetch( url, {headers: rapidCredentials})  
                .then(response => response.json())
                .then(data => {
                    this.setState({ data: data, loading: false });
                    return data;
                })
                .catch(error =>  this.setState({ error: error, loading: false }));
        }
        
    }

    search = (e) => {
        //e.preventDefault();
        document.body.appendChild(document.getElementById('form'));
		this.setState({thisRedirect: true})
	}

    render() {

        if (this.state.thisRedirect) {
			return	<Redirect to={{pathname: '/hotels-result', state: {city: this.state.city, 
                checkIn: this.state.checkIn, 
                checkOut: this.state.checkOut
                }}} />
		}
		

        function GetBeforeComma(e) {
            if(e != null){
            if(e.includes(",")){
                    return e.substr(0, e.indexOf(','));
                }
            }
            return e;
        }
        return(          
            <div id='teste'>
                <div id = 'explain'>
                
                <div className="explain-row">
                <h1>{this.props.location.state ? this.props.location.state.thisFrom : null}<br></br>
                {this.props.location.state ? this.props.location.state.thisTo : null}</h1> 
                <form id="form"  onSubmit={this.search}>

                <label>Destino:</label><input placeholder="Cidade" 
                                            required="required"
                                            data-validation-required-message="Please enter the city for search"
                                            onChange={(e) => this.setState({ city: e.target.value })} 
                                            onBlur={(e) => this.setState({ city: e.target.value })}></input>
                <label>CheckIn:</label><input type="date"
                                            value={this.state.checkIn}
                                            onChange={(e) => this.setState({ checkIn: e.target.value })}></input>
                <label>Checkout:</label><input type="date"
                                            value={this.state.checkOut}
                                            onChange={(e) => this.setState({ checkOut: e.target.value })}></input>
                <div className="button-fly-search">
                    <input type="submit" className="btn btn-primary btn-block" value="Buscar hotéis" />
                         </div>
                         </form>
                    </div> 
                </div>
                {
                    this.state.loading ?
                        <div>Loading...</div>
                    :
                        this.state.error ?
                            <div>Erro ao usar API</div>
                        :
                            !this.state.data ?
                                <div>Limite de requests à API atingido</div>
                            :
                                <div id="fh5co-tours" className="fh5co-section-gray">
                                <div className="container">
                                    <div className="row">
                                        {this.state.data.suggestions[3].entities.map((hotelObject, i) => {
                                            return <HotelsInCity 
                                                        rapidCredentials={rapidCredentials}
                                                        hotel={hotelObject} 
                                                        city={this.state.city}
                                                        key={i}
                                                    />
                                        })}
                                    </div>
                                </div>
                                </div>

                }
            </div>
        )
    }
}

export default HotelsResult;