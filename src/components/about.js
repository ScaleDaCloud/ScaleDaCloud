import React from 'react'
import PropTypes from 'prop-types'

import Image from '../components/image'

const about = props => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-4">
          <Image></Image>
        </div>
        <div class="col-12 col-md-8">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div>
                  <h1>About</h1>
                  <p>lorem isump blah lorem isuma aistt</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <div>
                  <h3>Who we are</h3>
                  <p>We are a group of technologists around the world</p>
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
