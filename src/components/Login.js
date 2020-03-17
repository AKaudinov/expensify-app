import React from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/auth';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onLogin = (e) => {
        e.preventDefault(); //I'm an idiot because I didn't prevent default here and the page was refreshing before firebase had a chance to log in!
        this.props.login();
    };

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>It's time to get your expenses under control.</p>
                    <form onSubmit={this.onLogin}>
                        <button className="standard-button">Login with Google</button>
                    </form>
                </div>
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

