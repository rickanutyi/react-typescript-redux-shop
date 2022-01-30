import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { GetUserActionType, INIT_STATE_TYPE } from "./authTypes";
import { GET_USER } from "./consts";

type AuthContextType = any;
export const authContext = createContext<AuthContextType>({});

const INIT_STATE = {
  user: {
    displayName: "null",
    email: "erachynybaev@gmail.com",
    phoneNumber: "null",
    photoURL: "null",
    providerId: "password",
    uid: "erachynybaev@gmail.com",
  },
};
function reducer(
  state: INIT_STATE_TYPE,
  action: GetUserActionType
): INIT_STATE_TYPE {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
const AuthContextProvider = ({ children }: any) => {
  //   const [user, setUser] = useState();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>("");
  const [passwordError, setPasswordError] = useState<string>("");

  //state
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignUp = () => {
    clearInputs();
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      switch (error.code) {
        // case "auth/email-already-in-use":
        //   setEmailError(error.message);
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
      }
    });
  };

  function forgotPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }
  const handleLogIn = () => {
    clearErrors();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            clearInputs();
            console.log(user);
            dispatch({
              type: GET_USER,
              payload: user.providerData[0],
            });
          } else {
            dispatch({
              type: GET_USER,
              payload: null,
            });
          }
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            console.log(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            console.log(error.message);
            break;
        }
      });
    clearInputs();
  };

  const handleLogOut = () => {
    try {
      signOut(auth);
      dispatch({
        type: GET_USER,
        payload: null,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // handleLogOut();
  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs();
        dispatch({
          type: GET_USER,
          payload: user.providerData[0],
        });
      } else {
        dispatch({
          type: GET_USER,
          payload: null,
        });
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    email,
    password,
    setEmail,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    handleSignUp,
    forgotPassword,
    handleLogIn,
    handleLogOut,
    user: state.user,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
