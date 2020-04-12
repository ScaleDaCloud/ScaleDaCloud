import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../components/contact'

const footer = props => {
  return (
    <footer>
      <div class="container-fluid py-5 py-lg-10">
        <div class="row">
          <div className="col-6">
            <Contact></Contact>
          </div>

          <div className="col-6 align-self-end">
            © {new Date().getFullYear()}, Devls team.
          </div>
        </div>
      </div>
    </footer>
  )
}

footer.propTypes = {

}

export default footer
