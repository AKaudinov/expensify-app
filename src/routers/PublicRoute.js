import React from 'react';
import {connect} from 'react-redux';
import {Header} from '../components/Header';
import {Route, Redirect} from "react-router-dom";


export const PublicRoute = ({
 isAuthenticated,
 component: Component,
 ...rest
}) => {
  return (
    <Route {...rest} component={props => {
        return (
            isAuthenticated
                ? (<Redirect to="/dashboard"/>)
                : (<Component {...props}/>)
        )
    }}/>
      )
};

const mapStateToProps = (state) => {
  return {
      isAuthenticated: !!state.auth.uid
      //            !! - flip undefined to be falsy - double negation convert an object or value to a boolean
//             convert a non-zero/non-null value to boolean true and zero/null value to false
  }
};

export default connect(mapStateToProps)(PublicRoute);



// export const PrivateRoute = ({
//                                  isAuthenticated,
//                                  component: Component, //rename component to Component
//                                  ...rest //grab all the rest of the properties that we didn't destructure
//                              }) => {
//     return (
//         <Route {...rest} component={(props) => { //react router passes the props to the component (props)
//             return (
//                 isAuthenticated ? (
//                     <div>
//                         <Header/>
//                         <Component {...props}/>
//                     </div>
//                 ):(
//                     <Redirect to="/"/>
//                 )
//             );
//         }}/>
//     )
// };
//
//
// const mapStateToProps = (state) => {
//     return {
//         isAuthenticated: !!state.auth.uid
//            !! - flip undefined to be falsy - double negation convert an object or value to a boolean
//             convert a non-zero/non-null value to boolean true and zero/null value to false
//     }
// };
//
// export default connect(mapStateToProps)(PrivateRoute);
