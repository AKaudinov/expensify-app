import authReducer from "../../reducers/auth";

test('should set default state to empty object', () => {
   const state = authReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual({});
});

test('should set user id upon login', () => {
    const uid = 'test123';
   const loginAction = {
       type: 'LOGIN',
       uid: uid
   };

   const state = authReducer({}, loginAction);
   expect(state).toEqual({
       uid: uid
   })
});

test('should remove user id upon logging out', () => {
    const logOutAction = {
      type: 'LOGOUT'
    };
   const state = authReducer({uid: 'test123'}, logOutAction);
   expect(state).toEqual({});
});
