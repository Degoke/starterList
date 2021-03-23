import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './utils/routes'
import { ThemeProvider } from 'styled-components'
import { myTheme, GlobalStyle } from './utils/global/style'
import { MainContextProvider } from './utils/global/context'

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <MainContextProvider>
        <ThemeProvider theme={myTheme}>
          <GlobalStyle />
          <Router>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                )
              })}
            </Switch>
          </Router>
        </ThemeProvider>
      </MainContextProvider>
    </>
  )
}

export default App
