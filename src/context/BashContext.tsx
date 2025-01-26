"use client";

import React, { createContext, useReducer, useContext } from 'react';


const baseState = {
  executed: false,
  hostName: "crumb",
  userName: "nobody",
  ps1uColorClass: "text-red-800",
  ps1hColorClass: "text-teal-300",
}

