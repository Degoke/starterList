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
    medium: '13px',
    small: '11px',
    family: '',
  },
}

export const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
        background-color: ${(props) => props.theme.color.background};
        color: ${(props) => props.theme.color.text};
        font-size: ${(props) => props.theme.font.big};
        @media all and (max-width: 900px) {
          font-size: ${(props) => props.theme.font.medium};
        }
        @media all and (max-width: 650px) {
          font-size: ${(props) => props.theme.font.small};
        }
    }
`
