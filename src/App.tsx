import { ThemeProvider } from "styled-components";
import React from "react";
import { AppRouter } from "./Routes";
import { darkTheme } from "./styles/globalStyle";

function App() {
    return (
          <ThemeProvider theme={darkTheme}>
                <AppRouter />  
          </ThemeProvider>
        
    )

}
export default App
