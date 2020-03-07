import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startLogin = () => {
  return dispatch => {              //sign in with the google popup
          return firebase.auth().signInWithPopup(googleAuthProvider)
              .then(result => {
              // alert(result.credential.accessToken)
                  console.log('logged in');
          }).catch(err => {
              alert(err);
          }); //return the promise chain
  };
};

export const login =(uid) => {
  return {
      type: 'LOGIN',
      uid: uid
  }
};


export const startLogOut = () => {
  return dispatch => {
      return firebase.auth().signOut(); //sign the user out of the application
  }
};

export const logout = () => {
    console.log('loggin out');
    return {
        type: 'LOGOUT'
    }
};
