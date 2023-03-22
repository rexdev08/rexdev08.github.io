import { useEffect, useState } from "react";

const useThemeToggler = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const localMode = localStorage.getItem("mode");

    localMode && setMode(localMode);
  }, []);

  // const toggler = () => {
  //   mode === "dark" ? setMode("light") : setMode("dark");
  // };

  const toggler = () => {
    if (mode === "dark") {
      localStorage.setItem("mode", "light");
      setMode("light");
    } else {
      localStorage.setItem("mode", "dark");
      setMode("dark");
    }
  };





  
  //   mode === "dark"
  //     ? localStorage.setItem("mode", "light")
  //     : localStorage.setItem("mode", "dark");
  // };

  return [mode, setMode];
};

export default useThemeToggler;
