import { ChangeEvent, memo } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core'
import { Pagination, PaginationItem } from '@material-ui/lab'

import { color } from '@helpers/styles'

import { selectSearchQuery, setCurrentPage } from '@redux-reducers/search-query'

import { PaginationContainer } from './CustomPagination.styled'
import { toVW } from '@helpers/methods'
import { useStateScreenMobile } from '@helpers/hooks'

const useStyles = makeStyles((theme) => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: color.text.light,
      font: 'inherit',
      fontSize: 18,
    },
    "& .Mui-selected": {
      color: color.bg.secondary,
    },
  },
  ulMobile: {
    "& .MuiPaginationItem-root": {
      color: color.text.light,
      font: 'inherit',
      fontSize: 18,
      width: toVW(20, 'mobile'),
    },
    "& .Mui-selected": {
      color: color.bg.secondary,
    },
  },
  selected: {},
}));

function CustomPagination ({ pages, type }: InferProps<typeof CustomPagination.propTypes>) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectSearchQuery)

  const onChange = (event: ChangeEvent<unknown>, value: number) => {
    if (type === 'repos') dispatch(setCurrentPage(value))
  }

  return (
    <PaginationContainer>
      <Pagination
        classes={{ul: !useStateScreenMobile() ? classes.ul : classes.ulMobile}}
        count={pages}
        page={searchQuery.currentPage}
        onChange={onChange} 
        renderItem={(item)=> <PaginationItem {...item} classes={{selected:classes.selected}} />} />
    </PaginationContainer>
  )
}

CustomPagination.propTypes = {
  pages: PropTypes.number.isRequired,
  type: PropTypes.string,
}

CustomPagination.defaultProps = {
  type: 'repos',
}

export default memo(CustomPagination)
