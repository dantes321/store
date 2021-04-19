import React, { createContext, useReducer, useState } from 'react';
import originalBoxReducer from './originalBox-reducer';

export const OriginalBoxContext = createContext();

const initialState = {
  boxes: [
    {
      id: 1,
      price: 400,
      title: 'MiniBox',
      img: 'https://29.img.avito.st/640x480/8116282729.jpg',
      aos: 'fade-right',
    },
    {
      id: 2,
      price: 600,
      title: 'MiddleBox',
      img: 'https://29.img.avito.st/640x480/8116282729.jpg',
      aos: 'fade-right',
    },
    {
      id: 3,
      price: 800,
      title: 'BigBox',
      img: 'https://29.img.avito.st/640x480/8116282729.jpg',
      aos: 'fade-left',
    },
    {
      id: 4,
      price: 1000,
      title: 'MegaBox',
      img: 'https://29.img.avito.st/640x480/8116282729.jpg',
      aos: 'fade-left',
    },
  ],
};

export const OriginalBoxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(originalBoxReducer, initialState);
  const [active, isActive] = useState(false);

  return (
    <OriginalBoxContext.Provider value={{ state, dispatch, active, isActive }}>
      {children}
    </OriginalBoxContext.Provider>
  );
};
