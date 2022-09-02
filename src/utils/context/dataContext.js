import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([]);
  const addData = (newUser) => {
    const updateData = [...employeeData, newUser];
    setEmployeeData(updateData);
  };
  return (
    <DataContext.Provider value={{ employeeData, addData }}>
      {children}
    </DataContext.Provider>
  );
};
