import {ThemeProvider} from "styled-components";
import React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {action_auth_startCheck} from "./Redux/actions/auth";
import {AppRouter} from "./Routes";
import {darkTheme} from "./styles/globalStyle";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action_auth_startCheck());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
