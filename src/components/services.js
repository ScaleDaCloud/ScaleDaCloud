import React from 'react'
import PropTypes from 'prop-types'
import { sizes, theme, colors } from '../constants/theme'


const services = props => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4">
          <h2 style={{ color: theme.colors.primary }}>Service 1</h2>
          <p style={{ color: theme.colors.primary }}>Choosing the right technology will change the game forever</p>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <h2 style={{ color: theme.colors.primary }}>Service 1</h2>
          <p style={{ color: theme.colors.primary }}>Choosing the right technology will change the game forever</p>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <h2 style={{ color: theme.colors.primary }}>Service 1</h2>
          <p style={{ color: theme.colors.primary }}>Choosing the right technology will change the game forever</p>
        </div>
      </div>
    </div>
  )
}

services.propTypes = {

}

export default services
