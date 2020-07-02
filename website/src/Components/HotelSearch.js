import React, {Component} from 'react';

class HotelSearch extends Component{
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            in: '',
            out: '',
            rooms: '',
            adults: '',
            children: '',
            data: [],
            redirect: 'false'
        }
    }

    search = (e) => {
        e.preventDefault();
        let url = 'https://hotels4.p.rapidapi.com/locations/search?locale=pt_BR&query=' + this.props.city;
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hotels4.p.rapidapi.com",
                "x-rapidapi-key": "b3ddd45209mshfc5865161902981p1e37e8jsncb32cbffe0b0"
            }
        })
            .then(response => response.json())
            .then(data => this.setState({data: data}))
            .catch(err => {
                console.log(err);
            });
        this.setState({ redirect: true })
    }
    
    render() {
        return(
            <div role="tabpanel" className="tab-pane" id="hotels">
                <form onSubmit={this.search}>
                    <div className="row">
                        <div className="col-xxs-12 col-xs-12 mt">
                            <div className="input-field">
                                <label htmlFor="from">Cidade:</label>
                                <input type="text"
                                    className="form-control"
                                    id="to-place_0"
                                    placeholder="Los Angeles, USA"
                                    required="required"
                                    onInput={(e) => this.setState({ city: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                                <label htmlFor="date-start">Check In:</label>
                                <input type="date"
                                    id="date-start"
                                    required='required'
                                    onInput={(e) => this.setState({ in: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                                <label htmlFor="date-end">Check Out:</label>
                                <input type="date"
                                    id="date-end"
                                    required='required'
                                    onInput={(e) => this.setState({ out: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-sm-12 mt">
                            <section>
                                <label htmlFor="className">Quartos:</label>
                                <select className="cs-select cs-skin-border"
                                    required='required'
                                    onInput={(e) => this.setState({ rooms: e.target.value })}>
                                    <option value="economy">1</option>
                                    <option value="first">2</option>
                                    <option value="business">3</option>
                                </select>
                            </section>
                        </div>
                        <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                                <label htmlFor="className">Adultos:</label>
                                <select className="cs-select cs-skin-border"
                                    required='required'
                                    onInput={(e) => this.setState({ adults: e.target.value })}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </section>
                        </div>
                        <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                                <label htmlFor="className">Crianças:</label>
                                <select className="cs-select cs-skin-border"
                                    onInput={(e) => this.setState({ children: e.target.value })}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </section>
                        </div>
                        <div className="col-xs-12">
                            <input type="submit" className="btn btn-primary btn-block" value="Buscar hotéis" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default HotelSearch;