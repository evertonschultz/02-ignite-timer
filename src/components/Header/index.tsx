import { HeaderContainer } from './styles'
import { Timer, Scroll, SunDim } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export function Header() {
  const { themeDefault, alterTheme } = useContext(ThemeContext)

  function handleAlterTheme() {
    alterTheme()
  }

  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />
        <button onClick={handleAlterTheme}>
          <SunDim size={24} weight={themeDefault ? 'regular' : 'fill'} />
        </button>
      </div>

      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
