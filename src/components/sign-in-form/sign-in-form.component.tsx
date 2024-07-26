import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';
import { FormInput } from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  SignUpContainer,
  Header,
  ButtonsContainer,
} from './sign-in-form.styles';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';

import {
  createUserDocumentFromAuth,
  getRedirectResultFromGoogle,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [justSignedIn, setJustSignedIn] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await getRedirectResultFromGoogle();
      if (result?.user) {
        await createUserDocumentFromAuth(result.user);
        navigate('/');
      }
    })();
  }, [navigate]);

  useEffect(() => {
    if (currentUser) {
      navigate('/');
      console.log('i am the current:', currentUser);
    } else {
      navigate('/auth');
    }
  }, [currentUser]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
    setJustSignedIn(true);
    resetFormFields();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <Header>Already have an account?</Header>
      <span>Sign in with your email or password</span>

      <form onSubmit={(e) => handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit" isLoading={justSignedIn}>
            sign in
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};
