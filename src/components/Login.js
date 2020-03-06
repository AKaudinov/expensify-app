import React from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/auth';

export class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    onLogin = (e) =>{
        e.preventDefault(); //I'm an idiot because I didn't prevent default here and the page was refreshing before firebase had a chance to log in!
        this.props.login();
    };

    render(){
        return (
            <div>
            <form onSubmit={this.onLogin}>
                <input type="text"/>
                <input type="text"/>
                <button>Login</button>
            </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(loginActions.startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(Login);

