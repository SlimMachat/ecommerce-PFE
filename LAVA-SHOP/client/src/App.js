import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { loadUser } from './redux/action/authAction';
import { setAuthToken } from './redux/utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AccountDashboard from './components/user-account/AccountDashboard';
import Shop from './components/products/Shop';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import Landing from './components/landing/Landing';
import Layout from './components/layout/Layout';
import './App.css';
import ScrollToTop from './components/layout/ScrollToTop';
import ThankYouPage from './components/cart/ThankYouPage'
const App = ({ loadUser }) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path='/my-account/login' component={Login} />
          <Route exact path='/my-account/register' component={Register} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/shop/:id' component={Product} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/' component={Landing} />
          <Route exact path="/ThankYou" component={ThankYouPage}/>

          <PrivateRoute exact path='/my-account' component={AccountDashboard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default connect(null, { loadUser })(App);