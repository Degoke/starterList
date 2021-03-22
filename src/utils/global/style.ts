import { DefaultTheme, createGlobalStyle } from 'styled-components'

export const myTheme: DefaultTheme = {
  color: {
    primary: '#FFFFFF',
    text: 'hsl(180, 8%, 52%)',
    secondary: 'hsl(180, 29%, 50%)',
    background: '#EEEEEE',
  },
  font: {
    big: '15px',
    small: '10px',
    family: '',
  },
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.color.background};
        color: ${(props) => props.theme.color.text};
    }
`
