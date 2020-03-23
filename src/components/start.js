import React from 'react'
import PropTypes from 'prop-types'
import { sizes, theme, colors } from '../constants/theme'

const start = props => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div class="py-4">
            <h1 style={{ color: theme.colors.danger, textTransform: "uppercase" }}>scale da cloud</h1>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
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
      </div>
    </div>
  )
}

start.propTypes = {

}

export default start
