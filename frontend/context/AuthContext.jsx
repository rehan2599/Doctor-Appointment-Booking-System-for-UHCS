import {useContext, useEffect, useReducer} from "react" ; 

const initialState = {
    user:null,
    role:null,
    token:null

};

const authContext = createContext(initialState);

const authReader = (state, action) => {

    switch (action.type) {
        case 'LOGIN_START' :

        return {
            user: null,
            role: null,
            token: null,

        };

        case "LOGIN_SUCCESS":
            return {
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role,
            }

            case 'LOGOUT' :

        return {
            user: null,
            role: null,
            token: null,

        };

        default:
            return state;
            
    }

}

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer, initialState)

    return <authContext.Provider value = {{user:state.user, token:state.token, role:state.role, dispatch}}>

    </authContext.Provider>
}