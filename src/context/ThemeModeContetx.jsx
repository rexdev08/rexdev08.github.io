import { createContext } from "react";
import useThemeToggler from "../hooks/useThemeToggler";

const themeModeContext = createContext();

const ThemeModeContextProvider = ({ children }) => {
  const [mode, setMode] = useThemeToggler();
  

  return (
    <themeModeContext.Provider value={[mode, setMode]}>
      {children}
    </themeModeContext.Provider>
  );
};

export { ThemeModeContextProvider, themeModeContext };
