/* eslint-disable no-undef */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PB);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading={`Payment`} subHeading={`Please Process`}></SectionTitle>
      <h1>This is Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
