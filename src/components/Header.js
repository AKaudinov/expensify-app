import React from 'react'
import {NavLink, Link} from "react-router-dom";
import {connect} from 'react-redux';
import {startLogOut} from "../actions/auth";

export const Header = ({logout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/" exact={true}>
                    <h1>Expensify</h1>
                </Link>
                {/*<NavLink to="/create" activeClassName="active-link">Create Expense</NavLink>*/}
                {/*<NavLink to="/edit" activeClassName="active-link">Edit Expense</NavLink>*/}
                {/*<NavLink to="/help" activeClassName="active-link">Help</NavLink>*/}
                <button className="standard-button button--link" onClick={logout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(startLogOut())
        }
    }
};


export default connect(undefined, mapDispatchToProps)(Header);
