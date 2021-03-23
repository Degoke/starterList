import { createContext, useState, useMemo } from 'react'

export type CurrentTagType = string

export type SetCurrentTagType = (
  state: Partial<CurrentTagType>,
  opts?: unknown
) => void

export type CurrentUserType = string

export type SetCurrentUserType = (
  state: Partial<CurrentTagType>,
  opts?: unknown
) => void

export interface MainContextProviderInterface {
  children: React.ReactNode
}

export interface MainContextInterface {
  currentTag?: CurrentTagType
  setCurrentTag?: SetCurrentTagType
  currentUser?: CurrentUserType
  setCurrentUser?: SetCurrentUserType
}

export const MainContext = createContext<MainContextInterface>({
  currentTag: 'All',
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const MainContextProvider = ({
  children,
}: MainContextProviderInterface) => {
  const [currentTag, setCurrentTag] = useState('All')

  const [currentUser, setCurrentUser] = useState('')

  const value: MainContextInterface = useMemo(
    () => ({
      currentTag,
      currentUser,
      setCurrentTag,
      setCurrentUser,
    }),
    [currentTag, currentUser]
  )

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
