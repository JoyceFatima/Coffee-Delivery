import { ThemeProvider } from "styled-components";

import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes/default';

import { Router } from './Routes'

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App
