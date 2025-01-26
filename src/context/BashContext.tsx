"use client";


// DONE? @mfwolffe fix types stuff
//                 ^ wow so eloquent

import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';


// TODO @mfwolffe probably want some safety
//                but I haven't decided how this will 
//                look in the end
interface Action<T = any> {
  type: string;
  payload?: T;
}

interface BashState {
  executed:       boolean;
  hostName:       string;
  userName:       string;
  ps1uColorClass: string;
  ps1hColorClass: string;
}

interface BashContextProps {
  state: BashState;
  dispatch: Dispatch<Action>;
}


const baseState: BashState = {
  executed: false,
  hostName: "crumb",
  userName: "nobody",
  ps1uColorClass: "text-red-800",
  ps1hColorClass: "text-teal-300",
}

const BashContext = createContext<BashContextProps | undefined>(undefined);

const reducer = (state: BashState, action: Action): BashState => {
  switch (action.type) {
    default:                    return state;
    case "START":               return { ...state, executed: true };
    case "UPDATE_UNAME":        return { ...state, userName: action.payload };
    case "UPDATE_HOSTNAME":     return { ...state, hostName: action.payload };
    case "UPDATE_PS1_UNAME_C":  return { ...state, ps1uColorClass: action.payload };
    case "UPDATE_PS1_HNAME_C":  return { ...state, ps1hColorClass: action.payload };
  }
}



export const BashProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, baseState);

  return (
    <BashContext.Provider value={{ state, dispatch }}>
      { children }
    </BashContext.Provider>
  )
}

export const useBashContext = (): BashContextProps => {
  const context = useContext(BashContext);
  if (!context) {
    throw new Error("useBashContext has to be used in a BashProvider");
  }
  return context;
};

