import { BrowserRouter } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
// import { Header } from "./components/Header"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        {/* <Header /> */}
        {/* <DefaultLayout /> */}
      </BrowserRouter>
    </ThemeProvider>
  )

}


