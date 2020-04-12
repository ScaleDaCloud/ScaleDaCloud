import React from 'react'
import PropTypes from 'prop-types'
import { sizes, theme, colors } from '../constants/theme'


const services = props => {
  return (
    <div class="container py-5">
      <div class="row">
        <div className="col-12 col-md-4">
          <h1 className="display-4 border-bottom py-4">Services</h1>
          <p class="py-2 lead">
            Technology is way to stand out and prove your position to the world. We are the experts who helps you to maximize the capacities needed.
          </p>
        </div>

        <div className="col-12 col-md-8 pl-5">
          <div className="row">
            <div class="col-12 col-sm-6 py-4 px-4">
              <h2>Platform Strategy</h2>
              <p className="py-3">Technologies are much overwhelming nowadays. Choosing the right technologies will change the game forever. Dealing with legacy software hurts badly to the business</p>
            </div>

            <div class="col-12 col-sm-6 py-4 px-4">
              <h2>Delivery mindset</h2>
              <p className="py-3">We help you to apply the most modern delivery approach with frequent and high quality value delivery.</p>
            </div>

            <div class="col-12 col-sm-6 py-4 px-4">
              <h2>Intelligence-driven</h2>
              <p className="py-3">Unlock the valuable knowledge from your data assets, help identify new opportunities, better decision making and reduce riskes.</p>
            </div>

            <div class="col-12 col-sm-6 py-4 px-4">
              <h2>Scale da cloud</h2>
              <p className="py-3">We design a system that fits well to the business while infinitely scale to future needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

services.propTypes = {

}

export default services
