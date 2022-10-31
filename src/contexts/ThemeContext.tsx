import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/defualt'
import { lightTheme } from '../styles/themes/light'

interface ThemeContextType {
  themeDefault: boolean
  alterTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [themeDefault, setThemeDefault] = useState(true)

  function alterTheme() {
    setThemeDefault(!themeDefault)
  }

  return (
    <ThemeContext.Provider
      value={{
        themeDefault,
        alterTheme,
      }}
    >
      <ThemeProvider theme={themeDefault ? defaultTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
