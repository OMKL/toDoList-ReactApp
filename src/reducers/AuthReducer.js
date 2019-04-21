import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,USER_SUCCESSFULLY_SIGNEDUP, USER_SINGUP_FAIL } from '../actions/type';


const INITIAL_STATE = {email:'',
                       password:'',
                       loading:false,
                       user: null,
                       error:'',
                        };

export default (state = INITIAL_STATE, action) => {

    console.log(action);
    switch (action.type){

        case EMAIL_CHANGED:
            console.log(action.payload);
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            console.log(action.payload);
            return {...state, password: action.payload};

        case LOGIN_USER_SUCCESS:

            return{...state, user: action.payload, email:'', password:'', error: ''};

        case LOGIN_USER_FAIL:

        return{...state, error: action.payload.message};

        case USER_SUCCESSFULLY_SIGNEDUP:
        
        return {...state, error: ''};

        case USER_SINGUP_FAIL:

        return {...state, error: action.payload.message};

        default:
            return state;
    }
};