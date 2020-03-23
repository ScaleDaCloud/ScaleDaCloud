import React from 'react'
import PropTypes from 'prop-types'

const footer = props => {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

footer.propTypes = {

}

export default footer
