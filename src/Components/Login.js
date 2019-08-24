import React, { PureComponent } from 'react';
import Dashboard from './Dashboard';
const Alpaca = require('@alpacahq/alpaca-trade-api');
const Store = window.require('electron-store');
const store = new Store();

class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            keyID: '',
            secretKey: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        if (store.has('keyID') && store.has('secretKey')) {
            this.props.history.push('/dashboard')
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin(e) {
        e.preventDefault()
        const alpaca = new Alpaca({
            keyId: this.state.keyID,
            secretKey: this.state.secretKey,
            paper: true
        })

        alpaca.getAccount()
            .then((acc) => {
                console.log('Log in successful');
                store.set('keyID', this.state.keyID);
                store.set('secretKey', this.state.secretKey);
                store.set('accInfo', acc);
                this.props.history.push('/dashboard');
            })
            .catch((err) => {
                console.log('Log in failed');
                store.clear();
                this.setState({
                    keyID: '',
                    secretKey: ''
                });
            })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input required type='text' name='keyID' placeholder='KEY ID' onChange={this.handleInputChange} value={this.state.keyID}/>
                    <input required type='text' name='secretKey' placeholder='SECRET KEY' onChange={this.handleInputChange} value={this.state.secretKey}/>
                    <button type='submit'>Log in</button>
                </form>
            </div>
        );
    }

}

export default Login;
