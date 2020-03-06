import React from 'react'
import {NavLink} from "react-router-dom";
import {connect } from 'react-redux';
import {startLogOut} from "../actions/auth";

export const Header = ({logout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="active-link">Home</NavLink>
        <NavLink to="/create" activeClassName="active-link">Create Expense</NavLink>
        {/*<NavLink to="/edit" activeClassName="active-link">Edit Expense</NavLink>*/}
        {/*<NavLink to="/help" activeClassName="active-link">Help</NavLink>*/}
        <button onClick={logout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => {dispatch(startLogOut())}
  }
};


export default connect(undefined, mapDispatchToProps)(Header);
