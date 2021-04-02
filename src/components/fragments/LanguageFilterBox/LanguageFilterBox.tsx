import { ChangeEvent, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LANGUGAE_FILTER_OPTIONS } from '@constants'

import { color } from '@helpers/styles'
import { toVW } from '@helpers/methods'
import { useStateScreenMobile } from '@helpers/hooks'
import { INTERFACE_FILTER_OPTIONS } from '@helpers/types'

import CheckIcon from '@material-ui/icons/Check'
import { ListSubheader, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core'

import { selectSearchQuery, setCurrentPage, setFilterOptions } from '@redux-reducers/search-query'

import { LanguageFilterBoxContainer, CustomSelectRender, CustomSelectRenderPrefix } from './LanguageFilterBox.styled'

const useStyles = makeStyles((theme) => ({
  select: {
    height: toVW(50, 'desktop'),
    color: color.bg.light,
  },
  selectMobile: {
    width: '100%',
    height: toVW(50, 'mobile'),
    color: color.bg.light,
  },
  icon: {
    fill: color.bg.light,
  },
  checkIconNormal: {
    fill: color.text.light,
  },
  checkIconChecked: {
    fill: color.text.black,
  },
}));

const useInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      borderColor: color.bg.light2,
    },
    "&:hover $notchedOutline": {
      borderColor: color.bg.light3,
    },
    "&$focused $notchedOutline": {
      borderColor: color.bg.secondary,
    }
  },
  focused: {},
  notchedOutline: {},
}))

const LanguageFilterBox = () => {
  const classes = useStyles()
  const searchQuery = useSelector(selectSearchQuery)
  const inputClasses = useInputStyles()
  const [filterOptionsIndex, setFilterOptionsIndex] = useState(searchQuery.filterOptions.index)
  const dispatch = useDispatch()

  const onChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newIndex = event.target.value as number
    if(newIndex === -1) return
    setFilterOptionsIndex(newIndex)
    dispatch(setFilterOptions(LANGUGAE_FILTER_OPTIONS[newIndex]))
    dispatch(setCurrentPage(1))
  }

  return (
    <LanguageFilterBoxContainer>
      <Select
        value={filterOptionsIndex}
        onChange={onChange}
        className={!useStateScreenMobile() ? classes.select : classes.selectMobile}
        variant="outlined"
        input={
          <OutlinedInput
            name="language-options"
            id="language-options"
            classes={inputClasses}
          />
        }
        inputProps={{
          classes: {
              icon: classes.icon,
          },
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null
        }}
        renderValue={(value: unknown) => {
          const index = value as number
          return (
            <CustomSelectRender>
              <CustomSelectRenderPrefix>Language:</CustomSelectRenderPrefix>
              {LANGUGAE_FILTER_OPTIONS[index].key}
            </CustomSelectRender>
          )
        }}
      >
        <ListSubheader value={-1}>Languages</ListSubheader>
        {LANGUGAE_FILTER_OPTIONS.map((option: INTERFACE_FILTER_OPTIONS, index: number) => (
          <MenuItem key={index} value={index}>
            <CheckIcon className={ filterOptionsIndex === index ? classes.checkIconChecked : classes.checkIconNormal } />
            {option.key}
          </MenuItem>
        ))}
      </Select>
    </LanguageFilterBoxContainer>
  )
}

export default memo(LanguageFilterBox)
