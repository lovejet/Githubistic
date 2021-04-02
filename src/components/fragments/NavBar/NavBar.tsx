import { memo } from 'react'
import SearchBox from '@components/SearchBox'
import SortOptionsBox from '@components/SortOptionsBox'
import { NavBarContainer } from './NavBar.styled'
import LanguageFilterBox from '@components/LanguageFilterBox'

const NavBar = () => {
  return (
    <NavBarContainer>
      <SearchBox />
      <LanguageFilterBox />
      <SortOptionsBox />
    </NavBarContainer>
  )
}

export default memo(NavBar)
