import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
}

h1 {
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
}

h2, h3 {
  font-family: "Baloo2", sans-serif;
  font-weight: 700;
}
`