import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

const Pagination = ({ pagination, onChangePage }) => {
  const { count, current_page, rowsPerPage } = pagination
  const classes = useStyles()
  const theme = useTheme()

  const handleFirstPageButtonClick = event => {
    const newPagination = { ...pagination, current_page: 0 }
    onChangePage(newPagination)
  }

  const handleBackButtonClick = event => {
    const newPagination = { ...pagination, current_page: current_page - 1 }
    onChangePage(newPagination)
  }

  const handleNextButtonClick = event => {
    const newPagination = { ...pagination, current_page: current_page + 1 }
    onChangePage(newPagination)
  }

  const handleLastPageButtonClick = event => {
    const newPagination = { ...pagination, current_page: Math.max(0, Math.ceil(count / rowsPerPage) - 1) }
    onChangePage(newPagination)
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={current_page === 0}
        aria-label="First Page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={current_page === 0} aria-label="Previous Page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        disabled="true"
        aria-label={current_page}
      >
        {current_page}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={current_page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={current_page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  )
}

Pagination.propTypes = {
  count: PropTypes.number,
  current_page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
}

export default Pagination
