"use client";


// TODO @mfwolffe fix types stuff
//

import React, { createContext, useReducer, useContext } from 'react';


const baseState = {
  executed: false,
  hostName: "crumb",
  userName: "nobody",
  ps1uColorClass: "text-red-800",
  ps1hColorClass: "text-teal-300",
}


const reducer = (state, action) => {
  switch (action.type) {
    default:                    return state;
    case "START":               return { ...state, executed: true };
    case "UPDATE_UNAME":        return { ...state, userName: action.payload };
    case "UPDATE_HOSTNAME":     return { ...state, hostName: action.payload };
    case "UPDATE_PS1_UNAME_C":  return { ...state, ps1uColorClass: action.payload };
    case "UPDATE_PS1_HNAME_C":  return { ...state, ps1hColorClass: action.payload };
  }
}

const BashContext = createContext();


export const BashProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, baseState);

  return (
    <BashContext.Provider value={{ state, dispatch }}>
      { children }
    </BashContext.Provider>
  )
}

export const useBashContext = () => useContext(BashContext);
