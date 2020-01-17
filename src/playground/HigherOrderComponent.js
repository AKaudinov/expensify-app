//Higher Order Component(HOC) - A component(HOC) that renders another component(regular)
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({info}) => {
  return (
      <dov>
          <h1>Info</h1>
          <p>The info is: {info}</p>
      </dov>
  );
};


const withAdminWarning = (WrappedComponent) => { //components start with upper case first letter
    return (props) => { //return a new component that renders additional info before rendering another component
        return (
            <div>
                {props.isAdmin && <p>This is private info. Please don't share!</p>}
                <WrappedComponent {...props} />
                {/*spread out the props passed in, and pass them in as key value pairs*/}
            {/*    render the wrapped component */}
            </div>
        );
    }; //higher order component
};

const AdminInfo = withAdminWarning(Info); //this function wraps the component


//requireAuthentication


const requireAuthentication = (WrappedComponent) => {
  return (props) => {
      return (
        <div>
            {props.isAuthenticated
                ? (<WrappedComponent {...props}/>)
                : (<p>Please log in to see the info</p>)}
                {/*if authenticated show the wrapped component, otherwise show log in message*/}
        </div>
      );
  }
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info={"These are the details"}/>, document.getElementById('app'));

// ReactDOM.render(<AdminInfo isAdmin={true} info={"These are the details"}/>, document.getElementById('app'));
