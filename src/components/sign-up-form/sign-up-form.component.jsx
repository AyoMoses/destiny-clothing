import React from 'react';
import { useDispatch } from 'react-redux';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { FormInput } from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './sign-up-form.styles.scss';

import { signUpStart } from '../../store/user/user.action';

// setting up our form object structure with a default value
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // when form is submitted
    // 1. confirm that the password matches
    if (password !== confirmPassword) {
      alert('your passwords do not match');
      return; // exit immediately
    }

    // if password and confirm do match then we continue to create this user
    // if we try to connect with our firebase and do get an error, we want to catch it
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('user email already in use');
      console.log(error, 'error creating your account');
    }

    // 2. check if we have authenticated the user with email and password

    // 3. then we create a userDoc() from what createAuthUserwithEmailandPassword() returns
  };

  // shorthand method of storing and setting the uniform object
  const handleChange = (event) => {
    // the name property and value of the event
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email or password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.google}>
          sign up
        </Button>
      </form>
    </div>
  );
};
