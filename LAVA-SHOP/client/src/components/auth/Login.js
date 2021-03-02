import React, { useState } from 'react'
import { IoIosLogIn } from 'react-icons/io'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FormControl } from '../../globalStyles'
import { login } from '../../redux/action/authAction'
import { showAlert } from '../../redux/action/alertAction'
import LoginRegister from './LoginRegister'
import Button from '../layout/Button'

const Login = ({ showAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  // HANDLE INPUT CHANGE
  const onInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // HANDLE FORM SUBMIT
  const onFormSubmit = e => {
    e.preventDefault();
    login({ email, password });
  }

  // REDIRECT IF LOGGED IN
  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <LoginRegister
      title='register'
      desc='hey you are so lucky ! come on join our community'
      btnTo='register'
      btnText='register'
    >
      <h2><IoIosLogIn className='icon' />Login</h2>
      <form onSubmit={e => onFormSubmit(e)}>
        <FormControl>
          <label>Email <span>*</span></label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </FormControl>
        <FormControl>
          <label>Password <span>*</span></label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => onInputChange(e)}
            autoComplete='on'
          />
        </FormControl>
        <Button type='submit' flex>login</Button>
      </form>
    </LoginRegister>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { showAlert, login })(Login)