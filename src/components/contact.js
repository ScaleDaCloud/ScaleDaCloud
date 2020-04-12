import React from 'react'
import PropTypes from 'prop-types'

const contact = props => {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <h2>Contact us</h2>
          <div>
            <form name="contact" method="POST" data-netlify="true">
              <div class="form-group">
                <label for="Name">Your name</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name" name="name" />
              </div>

              <div class="form-group">
                <label for="email">Your email</label>
                <input type="email" class="form-control" placeholder="Password" name="email" placeholder="Your email" />
              </div>

              <div class="form-group">
                <label for="phone">Your phone number</label>
                <input type="tel" class="form-control" placeholder="Your Phone number" name="phone" />
              </div>

              <div class="form-group">
                <label for="description">Leave us a line</label>
                <textarea class="form-control" placeholder="Leave us a line" name="description"/>
              </div>

              <div class="py-3">
                <button type="submit" class="btn btn-primary btn-block px-5">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

contact.propTypes = {

}

export default contact
