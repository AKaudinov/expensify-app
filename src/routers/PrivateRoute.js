import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {Route, Redirect} from "react-router-dom";


export const PrivateRoute = ({
                                 isAuthenticated,
                                 component: Component, //rename component to Component
                                ...rest //grab all the rest of the properties that we didn't destructure
}) => {
    return (
    <Route {...rest} component={(props) => { //react router passes the props to the component (props)
        return (
            isAuthenticated ? (
                <div>
                    <Header/>
                    <Component {...props}/>
                </div>
            ):(
                <Redirect to="/"/>
            )
        );
    }}/>
    )
};


const mapStateToProps = (state) => {
  return {
      isAuthenticated: !!state.auth.uid //flip undefined to be falsy
  }
};


///or use the following: problem with this is you'll be passing isAuthenticated to all the components down the line
//which depending on what you're doing could be useful
// export const PrivateRoute = (props) => {
//     return (
//         props.isAuthenticated
//         ? <div><Header /><Route {...props}/></div>
//         : <Redirect to="/"/>
//     )
// };

export default connect(mapStateToProps)(PrivateRoute);
