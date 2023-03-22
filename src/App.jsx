import Root from "./pages/Root";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { themeModeContext } from "./context/ThemeModeContetx";
import { GlobalStyles, theme } from "./GlobalStyles";

const App = () => {
  const [mode] = useContext(themeModeContext);

  return (
    <>
      <ThemeProvider theme={theme[mode]}>
        <GlobalStyles />
        <Root />
      </ThemeProvider>
    </>
  );
};

export default App;
