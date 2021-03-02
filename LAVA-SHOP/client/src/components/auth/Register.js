import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormControl } from '../../globalStyles'
import { registerUser } from '../../redux/action/authAction';
import { showAlert } from '../../redux/action/alertAction';
import LoginRegister from './LoginRegister'
import Button from '../layout/Button'

const Register = ({ registerUser, showAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  // HANDLE INPUT CHANGE
  const onInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // HANDLE FORM SUBMIT
  const onFormSubmit = e => {
    e.preventDefault();
    registerUser({ name, email, password, password2 });
  }

  // REDIRECT IF LOGGED IN
  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <LoginRegister
      title='login'
      desc='hey you are so lucky ! come on join our community'
      btnTo='login'
      btnText='login'
    >
      <h2><BsPerson className='icon' />Register</h2>
      <form onSubmit={onFormSubmit}>
        <FormControl>
          <label>Username <span>*</span></label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </FormControl>
        <FormControl>
          <label>Email address <span>*</span></label>
          <input
            type='text'
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
        <FormControl>
          <label>Confirm Password <span>*</span></label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={(e) => onInputChange(e)}
            autoComplete='on'
          />
        </FormControl>
        <Button type='submit' flex>Register</Button>
      </form>
    </LoginRegister>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { registerUser, showAlert })(Register)