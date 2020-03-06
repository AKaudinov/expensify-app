import * as authActions from '../../actions/auth';

test('Should set up login object', () => {
   const uid = 'test123';
   const action = authActions.login(uid);
   expect(action).toEqual({
      type: 'LOGIN',
      uid: uid
   })
});

test('Should set up login object', () => {
   const action = authActions.logout();
   expect(action).toEqual({
      type: 'LOGOUT'
   })
});
