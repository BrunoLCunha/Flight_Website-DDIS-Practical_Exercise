import React, {Component} from 'react';
import ShoppingStuff from './ShoppingStuff';

const admin = require("firebase-admin");
admin.initializeApp();
const dbCart = admin.firestore().collection("cart");

class ShoppingCart extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            shopping: [],
        }
    }

    componentDidMount() {

        dbCart.get()
        .then(function (docs) {
          let posts = [];
          console.log(docs)
          docs.forEach(function (doc) {
            posts.push(doc.data())
          })
        });

    }
    
    render() {
        return (
        <div id="fh5co-tours" className="fh5co-section-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                    <h3>Seu Carrinho</h3>
                    <p>Nesta seção você encontrará todos os produtos que demonstrou interesse até então. Que tal finalizar estas compras?</p>
                </div>
            </div>
            {this.state.shopping.map((shopping, index) => {
                return  <ShoppingStuff key={index}
                            name={shopping.name}
                            price={shopping.price}
                            description={shopping.description}
                            img={shopping.img}  
                        />
                        
            })}
            <ShoppingStuff name='Vôo' img='generic_airplane.jpg' description='BR-SP -> BR-RJ' price='R$ 1,000'/>
            <ShoppingStuff name='Hotél' img='generic_hotel.jpg' description='Transoceânico Palace - BA' price='R$ 2,500'/>
            </div>
        </div>
        )
    }
}

export default ShoppingCart;