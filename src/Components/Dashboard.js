import React, { Component } from 'react';
const Store = window.require('electron-store');
const store = new Store();

class Dashboard extends Component {

    componentDidMount() {
        if (!store.has('keyID') && store.has('secretKey')) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                dashboard
            </div>
        );
    }

}

export default Dashboard;
