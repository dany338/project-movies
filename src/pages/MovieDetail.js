import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Skeleton from 'react-loading-skeleton'

import Card from '../components/CardDetail'

import api from '../utils/api'

class MovieDetail extends Component {
  state = {
    isLoading: false,
    movieDetail: null,
    movieId: 0,
  }

  componentDidMount() {
    this.fetchMovieDetail()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchMovieDetail()
    }
  }

  async fetchMovieDetail() {
    this.setState({ isLoading: true })
    const { id } = this.props.match.params
    const movieDetail = await api.detail(id)
    const { movieId } = movieDetail
    this.setState({ movieDetail: movieDetail, movieId: movieId, isLoading: false})
  }

  render() {
    const { movieDetail, movieId, isLoading } = this.state

    return (
      <div style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
          {isLoading &&
              <Grid item xs={4}>
                <Skeleton width={282} height={337} />
              </Grid>
          }
          {movieId !== 0 &&
            <Grid item xs={4} >
              <Card {...movieDetail} />
            </Grid>
          }
        </Grid>
      </div>
    )
  }
}
export default MovieDetail
