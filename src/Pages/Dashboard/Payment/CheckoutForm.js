/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
  const [cardError, setCardError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      setCardError(error.message);
      console.log('[error]', error);
    } else {
      setCardError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        />
        <button
          className="mt-5 btn btn-sm text-white bg-orange-400  hover:bg-orange-400 "
          type="submit"
          disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
