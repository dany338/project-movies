import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { createGlobalStyle } from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import Header from '../Header'
import Nav from '../Nav'

import Home from '../../pages/Home'
import Category from '../../pages/Category'
import MovieDetail from '../../pages/MovieDetail'

dayjs.locale('es')


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Container maxWidth="md">
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category/:category" exact component={Category} />
            <Route path="/movie/:id" exact component={MovieDetail} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
