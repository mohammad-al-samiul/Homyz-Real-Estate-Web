/* eslint-disable no-undef */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useCart from '../../Hooks/useCart';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

const Payment = () => {
  const [cart] = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <SectionTitle heading={`Payment`} subHeading={`Please Process`}></SectionTitle>
      <h1 className="text-2xl font-bold text-center">Total : ${total.toFixed(2)}</h1>
      <div className="payment-component mx-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cart={cart} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
