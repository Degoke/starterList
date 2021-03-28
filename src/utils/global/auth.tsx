/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Redirect } from 'react-router-dom'

export const withAuth = (Component: React.FC) => {
  const authRoute = () => {
    const auth = sessionStorage.getItem('user')
    if (auth) {
      return <Component />
    } else {
      return <Redirect to="/login" />
    }
  }

  return authRoute
}
