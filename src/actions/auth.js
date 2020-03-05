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
//
// export const Login = () => {
//
// };
