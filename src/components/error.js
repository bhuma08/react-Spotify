import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Useless extends Component {
    render(){
        return <h1>This page is not found!!</h1>

    }
    
}

export default withRouter(Useless)