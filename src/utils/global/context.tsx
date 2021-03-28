import { createContext, useState, useMemo, useEffect } from 'react'

export type CurrentUserType = string

export type SetCurrentUserType = (
  state: Partial<CurrentUserType>,
  opts?: unknown
) => void

export interface MainContextProviderInterface {
  children: React.ReactNode
}

export interface MainContextInterface {
  currentUser?: CurrentUserType
  setCurrentUser?: SetCurrentUserType
}

export const MainContext = createContext<MainContextInterface>({
  currentUser: 'none',
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const MainContextProvider = ({
  children,
}: MainContextProviderInterface) => {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user === null) {
      setCurrentUser('none')
    } else {
      setCurrentUser(user)
    }
  }, [])

  const value: MainContextInterface = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser]
  )

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
