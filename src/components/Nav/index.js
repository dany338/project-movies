import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { categoriesId } from '../../utils/constants'

// categoriesNames es: ['home', 'politica', 'internacionales']
const categoriesNames = Object.keys(categoriesId)

class Nav extends Component {
  state = {
    value: 0,
    default_page: 1,
  }

  handleNavigate = index => {
    const { default_page } = this.state
    this.setState({ value: index })

    const { history } = this.props

    const category = categoriesNames[index]
    history.push(category === `home` ? '/' : `/category/${category}`)
  }

  render() {
    const { value } = this.state

    return (
      <Tabs
        value={value}
        textColor="primary"
        variant="fullWidth"
        indicatorColor="primary"
        onChange={(_event, index) => this.handleNavigate(index)}
      >
        {categoriesNames.map(category => (
          <Tab label={category} key={category} />
        ))}
      </Tabs>
    )
  }
}

export default withRouter(Nav)
