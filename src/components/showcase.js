import React from 'react'
import PropTypes from 'prop-types'
import ShowcaseImage from '../components/showcase_image'

const showcase = props => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div className="col-12 col-md-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="text-center">
                    <h1 className="display-4">
                      <strong>Our latest works</strong>
                    </h1>

                    <small className="text-muted lead">
                      Here to demonstrate the latest successful project we have built
                    </small>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-6 pt-5">
                  <div class="card border-0">
                    <ShowcaseImage className="img-fluid shadow" ></ShowcaseImage>

                    <div class="card-body bg-dark p-5">
                      <h5 class="card-title">Heroku-like</h5>
                      <p class="card-text">Design the application deployment flow using Docker, Helm Chart, Kubernetes and Amazon Web Services.</p>
                      <a href="#" class="btn btn-primary px-4">Case study</a>
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

showcase.propTypes = {

}

export default showcase
