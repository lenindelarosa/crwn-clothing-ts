// import { createContext, useEffect, useReducer } from "react";
// import { createAction } from "../utils/reducer.utils";
// import { 
//     onAuthStateChangedListener,
//     crearUserDocumentFromAuth
// } from "../utils/firebase/firebase.utils";

// //the actual value you want to access
// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null
// });

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//     const { type, payload } = action;

//     switch(type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }
// };

// const INITIAL_STATE = {
//     currentUser: null
// }

// export const UserProvider = ({ children }) => {
//     //const [currentUser, setCurrentUser] = useState(null);
//     // currentUser is part of the state, so we can destructure it in the following statement:
//     //With the useReducer funtions we get back the current state and the dispatch function that will trigger the user reducer
//     const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);

//     //The dispatch funtion extracted from the previous statement goes in the setCurrentUser function:
//     const setCurrentUser = (user) => {
//         dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     };

//     const value = { currentUser, setCurrentUser};
    
//     useEffect(()=>{
//         const unsubscribe = onAuthStateChangedListener(( user ) => { 
//             if (user) {
//                 crearUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//         });

//         return unsubscribe;
//     }, []);

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// };



