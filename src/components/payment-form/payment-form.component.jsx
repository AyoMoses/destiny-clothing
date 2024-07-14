import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentFormContainer, FormContainer } from './payment-form.styles';

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
  };

  // do not continue if the stripe hooks do not return. Hence, a guard clause.
  if (!stripe || !elements) return;

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
