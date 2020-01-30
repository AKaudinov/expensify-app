import React from 'react'
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="active-link">Home</NavLink>
        <NavLink to="/create" activeClassName="active-link">Create Expense</NavLink>
        {/*<NavLink to="/edit" activeClassName="active-link">Edit Expense</NavLink>*/}
        {/*<NavLink to="/help" activeClassName="active-link">Help</NavLink>*/}
    </header>
);

export default Header;
