import React, { Component } from 'react';
const Store = window.require('electron-store');
const store = new Store();

class Dashboard extends Component {

    constructor(props) {
        super(props);

        // cwm
        if (!(store.has('keyID') && store.has('secretKey'))) {
            this.props.history.push('/login');
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        console.log('Logged out successfully');
        store.clear();
        this.props.history.push('/login');
    }

    render() {
        const acc = store.get('accInfo')
        return (
            <div>
                dashboard
                <button onClick={this.handleLogout}>Log Out</button>
                equity: {acc.equity}
                buying power: {acc.buying_power}
                cash: {acc.cash}
            </div>
        );
    }

}

export default Dashboard;
