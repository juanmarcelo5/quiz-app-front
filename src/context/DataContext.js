import React, { createContext, useState } from 'react'

//el DataContext se utiliza como intermediario
export const DataContext = createContext()
const dbData = {
  avatar:'Juan',
  score:22,
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dbData);
  
	return (
    <DataContext.Provider value={{
      data,
      setData,
      }}>
      {children}
    </DataContext.Provider>
  )
}
