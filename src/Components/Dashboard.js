import React, { Component } from 'react';

class Dashboard extends Component {

    componentDidMount() {
        if (!localStorage.keyID && localStorage.secretKey) {
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
