import React from 'react'
import PropTypes from 'prop-types'

import Image from '../components/image'

import { sizes, theme, colors } from '../constants/theme'

const about = props => {
  const aboutStyle = {
    background: theme.colors.warning
  }

  return (
    <div class="container-fluid py-10" style={ aboutStyle }>
      <div class="row">
        <div className="col-12 p-4">
          <div className="container">
            <div className="row">
              <div class="col-12 col-md-4">
                <Image className="img-fluid shadow"></Image>
              </div>

              <div class="col-12 col-md-8">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div>
                        <h1 style={{ color: theme.colors.primary }}>About</h1>
                        <p>
                          We are polygot developers who can work on different stacks of the system, from frontend to backend, mobile application, infrastructure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div>
                        <h3>What we do</h3>

                        <p>Your successes on this digital era requires right strategies to pragmatic approaches.</p>
                        <p>We are helping you to make your own way of success.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

about.propTypes = {

}

export default about
