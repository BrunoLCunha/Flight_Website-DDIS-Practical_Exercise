import React,{Component} from 'react';
import username from './username';

class UserLogin extends Component{

    constructor(props){
        super(props)

        this.state = {
            uid: null,
            user: null,
            password: null
        }
    }

    render() {

        const login = () => {}

        return(
            <div>
                <h1>Login</h1>
                <div id="firebaseui-auth-container"></div>
                <div>
                    <label>
                        Usuário: 
                        <input type="text" value={this.state.user} onChange={e => this.setState({user: e.target.value})} />
                    </label>
                </div>
                <div>
                    <label>
                        Senha: 
                        <input type="text" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
                    </label>
                </div>
                <button onClick={(e) => login()}>Sign In</button>
                <script src='login.js'></script>
            </div>
        )
    }
}

export default UserLogin;