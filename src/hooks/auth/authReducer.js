import {types} from "./typesAuth";

export const authReducer = (state ={}, action) => {
    switch (action.type) {
        case types.loginUser:
            return{
                ...action.payload,
                logged: true,
                rol: "user"
            }
        case types.loginPsych:
            return {
                ...action.payload,
                logged: true,
                rol: "psychologist"
            }
        case types.logout:
            return {
                logged: false
        }
        default:
            break;
    }
}
