import React, {Component} from 'react';
import HotelsInCity from './HotelsInCity';
import rapidCredentials from './rapidCredentials2';
import {Link} from 'react-router-dom';

class HotelsResult extends Component {
     
    constructor(props) {
		super(props)

		this.state = {
            city: '',
			checkIn: '',
			checkOut: '',
            loading: true,
            error: null,
            data: null
        }
	}

    async componentDidMount() {
        console.log(this.state,this.props.location.state)
        if(this.state.city && !this.state.data) {
            let url = 'https://hotels4.p.rapidapi.com/locations/search?locale=pt_br&query=' + this.state.city.replace(' ', '%20')
            fetch( url, {headers: rapidCredentials})  
                .then(response => response.json())
                .then(data => {
                    this.setState({ data: data, loading: false, animation: true });
                    return data;
                })
                .catch(error =>  this.setState({ error: error, loading: false, animation: true }));
        }
        
    }

    search = (e) => {
        window.location.reload();
    }
    
    componentWillMount() {
        console.log(this.state,this.props.location.state)
        if (!this.state.city)
            this.setState({
                city: this.props.location.state.city,
                checkIn: this.props.location.state.checkIn,
                checkOut: this.props.location.state.checkOut,
                loading: true,
                error: null,
                data: null
            })
    }

    render() {
        let hide = {opacity: 0}
        let fadeIn = {transition: 'opacity 0.5s', opacity: 1}
		
        return(          
            <div id='hotel'>
                <div id = 'search-panel'>
                    <div className="explain-row">
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
                            <Link onClick={this.search} to={{pathname:"/hotels-result", state:this.state}} className="btn btn-primary btn-block">Buscar hotéis</Link>
                        </div>
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
                                    <div className="container" style={this.state.animation ? fadeIn : hide}>
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