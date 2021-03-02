import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...restProps
}) => (
    <Route
      {...restProps}
      render={props => !isAuthenticated && !loading
        ? <Redirect to='/my-account/login' />
        : <Component {...props} />
      }
    />
  );

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute)