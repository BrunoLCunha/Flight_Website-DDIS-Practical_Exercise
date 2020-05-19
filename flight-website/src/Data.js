import React, {Component} from 'react';
import firebase from './firebase';

class Data extends Component{
    constructor(props){
        super(props)

        this.state = {

        }

    }

    componentDidMount(){
        // let ref = firebase
        //  .database()
        //  .ref('teste/');

        //  let path = 'teste/' + this.state.id;

        // firebase.database().ref(path).once('value').then(this.retrieve, this.messageHandler);

        // ref.once("value").then(dataSnapshot => {
        //   this.response = dataSnapshot.val();
        //   console.log(this.response);
        //   console.log(dataSnapshot);
        //   //once the data is back, set the loading to false so it can be rendered
        //   this.setState({ data: this.response});
        // });
    }

    render(){
        return(
                this.state.data ?
                    <ul>
                        {this.state.data.map(function(item, i){
                            console.log(item);
                            return  <li key={i}>ID: {item.id} Nome: {item.name} Idade: {item.age}</li>
                        })}
                    </ul>
                :
                    null
        )
    }
}

export default Data;