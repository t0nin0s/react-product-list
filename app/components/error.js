import React, { Component } from 'react'
import { Link } from 'react-router'

class Error extends React.Component {
   render() {
      return (
        <div>
          <h1>
            404 Error...
          </h1>
          <h4>
            Oups!
            Sorry but this page couldnt be found!
            Lost? You probably want to take a look at
            our <Link to='/'>Home page</Link>
          </h4>
        </div>
      )
   }
}

export default Error;
