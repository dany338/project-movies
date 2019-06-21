import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Skeleton from 'react-loading-skeleton'
// Components
import Card from '../components/Card'
import Pagination from '../components/Pagination'
// Apis, constants
import api from '../utils/api'
import { categoriesId } from '../utils/constants'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

class Category extends React.Component {
  state = {
    isLoading: false,
    movies: [],
    pagination: {
      current_page: 1,
      count: 0,
      total_pages: 0,
      rowsPerPage: 20,
    },
  }

  componentDidMount() {
    console.log('monte la pagina Category')
    this.fetchCategoriesMovies()
  }

  componentDidUpdate(prevProps) {
    console.log('Entro componentDidUpdate', prevProps.match.params.category, this.props.match.params.category)
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.fetchCategoriesMovies()
    }
  }

  componentWillUnmount() {
    console.log('desmonte la pagina Category')
  }

  async fetchCategoriesMovies() {
    const { pagination } = this.state
    const { current_page } = pagination
    const { category } = this.props.match.params
    //const categoryId = categoriesId[category]

    this.setState({ isLoading: true })

    const movies = await api.category(category, current_page)
    console.log(movies)
    const { page, total_results, total_pages, results } = movies
    const newPagination = {
      current_page: page,
      count: total_results,
      total_pages: total_pages,
      rowsPerPage: 20,
    }
    this.setState({ movies: results, isLoading: false, pagination: newPagination })
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
                <Pagination pagination={pagination} onChangePage={this.onChangePage} />
            </Grid>
          }
        </Grid>
      </div>
    )
  }
}

export default Category
