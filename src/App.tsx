import { DefaultLayout } from "./layouts/DefaultLayout"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
    </ThemeProvider>
  )

}


