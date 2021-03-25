import { DefaultTheme, createGlobalStyle } from 'styled-components'

export const myTheme: DefaultTheme = {
  color: {
    primary: '#333333',
    text: '#EEEEEE',
    secondary: '#424242',
    background: '#212121',
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
