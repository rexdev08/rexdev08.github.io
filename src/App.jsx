import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { themeModeContext } from "./context/ThemeModeContetx";
import { GlobalStyles, theme } from "./GlobalStyles";

const router = createBrowserRouter([{ path: "/", element: <Root /> }]);

const App = () => {
  const [mode] = useContext(themeModeContext);

  return (
    <>
      <ThemeProvider theme={theme[mode]}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
