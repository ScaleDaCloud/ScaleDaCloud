import React from 'react'
import PropTypes from 'prop-types'
import { sizes, theme, colors } from '../constants/theme'

const start = props => {
  const titleStyle = {
    color: theme.colors.danger,
    fontSize: sizes.font.title,
    fontWeight: "bold",
    background: `linear-gradient(145deg, #f81f01 0%, ${theme.colors.danger} 100%)`,
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent"
  }
  const serviceStyle = {
    title: {
      fontSize: sizes.font.h2,
      fontWeight: 300,
      color: theme.colors.primary
    },
    description: {
      fontSize: sizes.font.baseSize,
      fontWeight: 300,
      color: theme.colors.primary
    }
  }

  return (
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-md-8">
          <div class="py-5">
            <h1 style={titleStyle}>
              Behind your successful business there is our software.
            </h1>
          </div>
        </div>
      </div>

      <div class="row py-4">
        <div class="col">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <h2 style={serviceStyle.title}>
                Software development
              </h2>
              <p style={serviceStyle.description} class="py-2">
                Transform your visionary product and platform using a real digital software, help you to build your dream digital business successfully.
              </p>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <h2 style={serviceStyle.title}>
                Delivery mindset
              </h2>
              <p style={serviceStyle.description} class="py-2">
                Apply the most modern delivery approach with frequent and high quality value delivery.
              </p>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <h2 style={serviceStyle.title}>
                Think in the scale
              </h2>
              <p style={serviceStyle.description} class="py-2">
                We are experty in building system that works well in the future while doing perfectly with the current needs.
              </p>
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
