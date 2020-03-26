import React from 'react'
import PropTypes from 'prop-types'
import { sizes, theme, colors } from '../constants/theme'

const start = props => {
  const titleStyle = {
    color: theme.colors.danger,
    fontWeight: "bold",
    background: `linear-gradient(145deg, #f81f01 0%, ${theme.colors.danger} 100%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textFillColor: "transparent"
  }
  const serviceStyle = {
    title: {
      fontSize: sizes.font.h1,
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
    <div class="container-fluid py-lg-10 py-md-2 py-sm-0">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="py-1 py-sm-5 px-2 px-md-5">
            <h1 style={titleStyle} className="responsive-font-size">
              Behind your successful business there is our software.
            </h1>
          </div>
        </div>
      </div>

      <div class="row py-4">
        <div class="col">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="px-2 px-md-5">
                <h1 style={serviceStyle.title}>
                  Software development
                </h1>
                <p style={serviceStyle.description} class="py-2">
                  Transform your visionary product and platform using a real digital software, help you to build your dream digital business successfully.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="px-2 px-md-5">
                <h1 style={serviceStyle.title}>
                  Delivery mindset
                </h1>
                <p style={serviceStyle.description} class="py-2">
                  Apply the most modern delivery approach with frequent and high quality value delivery.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="px-2 px-md-5">
                <h1 style={serviceStyle.title}>
                  Think in the scale
                </h1>
                <p style={serviceStyle.description} class="py-2">
                  We are experty in building system that works well in the future while doing perfectly with the current needs.
                </p>
              </div>
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
