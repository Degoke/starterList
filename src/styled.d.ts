import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
      text: string
      background: string
    }

    font: {
      big: string
      small: string
      family: string
    }
  }
}
