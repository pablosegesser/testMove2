import './App.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/globalStyle'


const App = () => (
  <ThemeProvider theme={lightTheme}>
      <title>GRANDEST APP WEB</title>
  </ThemeProvider>
)

export default App
