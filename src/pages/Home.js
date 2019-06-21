import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Skeleton from 'react-loading-skeleton'
// Components
import Card from '../components/Card'
import Pagination from '../components/Pagination'
// Apis, constants
import api from '../utils/api'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

class Home extends React.Component {
  state = {
    isLoading: false,
    movies: [],
    default_list: 1,
    default_page: 1,
    pagination: {
      current_page: 1,
      count: 0,
      total_pages: 0,
      rowsPerPage: 20,
    },
  }

  componentDidMount() {
    this.fetchMovies()
  }

  componentDidUpdate(prevProps) {
    const { default_page, pagination } = this.state
    const { current_page } = pagination
    console.log('Entro componentDidUpdate', prevProps)
    // if(prevProps.match.params.current_page !== this.props.match.params.current_page) {
    //   this.fetchMovies()
    // }
    if(default_page !== current_page) {
      this.fetchMovies()
    }
  }

  async fetchMovies() {
    const { default_list, pagination } = this.state
    const { current_page } = pagination
    /*if(this.props.match.params.current_page !== undefined) {
      const { current_page } = this.props.match.params
      default_page = current_page
    }*/

    this.setState({ isLoading: true })
    const movies = await api.lists(default_list, current_page)
    const { page, total_results, total_pages, results } = movies
    const newPagination = {
      current_page: page,
      count: total_results,
      total_pages: total_pages,
      rowsPerPage: 20,
    }
    this.setState({ movies: results, isLoading: false, pagination: newPagination  })
  }

  onChangePage = newPagination => {
    this.setState({ pagination: newPagination })
  }

  render() {
    const { isLoading, movies, pagination } = this.state
    return (
      <div style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
          {isLoading &&
            Array.from({ length: 20 }, (_, index) => (
              <Grid item xs={4} key={index}>
                <Skeleton width={282} height={337} />
              </Grid>
          ))}

          {movies.length > 0 &&
            <Grid item xs={12}>
              <Pagination pagination={pagination} onChangePage={this.onChangePage} />
            </Grid>
          }

          {movies.length > 0 &&
            movies.map(movie => (
              <Grid item xs={4} key={movie.id}>
                <Card {...movie} />
              </Grid>
          ))}

          {movies.length > 0 &&
            <Grid item xs={12}>
                <Pagination pagination={pagination} onChangePage={this.onChangePage}  />
            </Grid>
          }
        </Grid>
      </div>
    )
  }
}

export default Home
