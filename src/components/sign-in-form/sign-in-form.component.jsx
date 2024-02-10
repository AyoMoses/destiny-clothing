import React from 'react';

import './sign-in-form.styles.scss';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import { FormInput } from '../form-input/form-input.component';

import { Button } from '../button/button.component';

// setting up our form object structure with a default value
const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // whenever a user signs, we want to take this user object and we store it inside the context
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-login-credentials':
          alert('incorrect email or password');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
      //   if (error.code === 'auth/invalid-login-credentials')
      //     alert('please check that your email or password is correct');
      //   console.log(error, 'error creating your account');
    }
  };

  // shorthand method of storing and setting the uniform object
  const handleChange = (event) => {
    // the name property and value of the event
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // any call made to a database is asynchronous
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email or password</span>

      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">sign in</Button>

          {/* only add a type of button to it to make it behave like a button since its inside of a form so it does not act defauly as a submit button */}
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};
