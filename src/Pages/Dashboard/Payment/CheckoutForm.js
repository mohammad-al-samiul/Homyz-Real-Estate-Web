/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import './CheckoutForm.css';

const CheckoutForm = ({ price, cart }) => {
  //console.log(cart);
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (price > 0) {
      fetch(`https://regal-dragon-restaurant-server.vercel.app/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${localStorage.getItem('access-token')}`
        },
        body: JSON.stringify({ price })
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [price]);

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
      //console.log('[PaymentMethod]', paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'Anonymous',
          email: user?.email || 'Anonymous User'
        }
      }
    });
    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    //console.log(paymentIntent);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      //console.log(transactionId);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: price,
        quantity: cart?.length,
        cartItems: cart?.map((item) => item._id),
        menuItems: cart?.map((item) => item.menuItemId),
        paymentStatus: 'pending',
        itemsName: cart?.map((item) => item.name)
      };

      fetch(`https://regal-dragon-restaurant-server.vercel.app/payments`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('access-token')}`
        },
        body: JSON.stringify(payment)
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedResult.insertedId) {
            Swal.fire('Payment Successfull!', ``, 'success');
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div className="w-full checkout-component">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '20px',
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
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
        <br />
        {cardError && <p className="mt-2 text-red-600">{cardError}</p>}
        {transactionId && (
          <p className="mt-2 text-green-500">
            Success Payment with Transaction Id :{' '}
            <span className="font-bold"> {transactionId}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
