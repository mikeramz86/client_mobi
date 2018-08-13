import {
    SET_AUTH_TOKEN,
    setAuthToken,
    CLEAR_AUTH,
    clearAuth,
    AUTH_REQUEST,
    authRequest,
    AUTH_SUCCESS,
    authSuccess,
    AUTH_ERROR,
    authError
} from './auth';

describe('setAuthToken', () => {
    it('Should return the action', ()=>{
       const token = 'Token';
       const action = setAuthToken(token);
       expect(action.type).toEqual(SET_AUTH_TOKEN);
       expect(action.authToken).toEqual(token);
    })
})

describe('clearAuth', () => {
    it('Should return the action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    })
})

describe('authRequest', () => {
    it('Should return the action', () => {
        const action = authRequest(); 
        expect(action.type).toEqual(AUTH_REQUEST);
    })
})

describe('authSuccess', () => {
    it('Should return the action', () => {
        const user = 'Current User'
        const action = authSuccess(user);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(user);
    })
})

describe('authError', () => {
    it('Should return the action', () => {
        const error = 'Error'
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    })
})