import { useState } from 'react';
import MyContext from './myContext';

function MyState({children}) {
    const name = "Faizan zia"
    const [loading , setloading] =useState(false);
  return (
    <MyContext.Provider value={{
        loading,
        setloading
    }}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState