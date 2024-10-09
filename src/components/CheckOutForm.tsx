import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDeleteManyCartMutation } from '../Redux/features/cart/cartApis';

const CheckOutForm = ({ price, ids }: { price: number; ids: string[] }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [secretKey, setSecretKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [deleteManyCart, { data: deltedResponse }] =
    useDeleteManyCartMutation();

  // get the payment secret
  useEffect(() => {
    fetch('https://techtuend-service-server.vercel.app/api/payments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          console.log(data);
          setSecretKey(data.data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event: FormEvent) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      console.log('stripe or elements not found');
      console.log('stripe not found');
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      console.log('card not fuound');
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretKey, {
        payment_method: {
          card: card,
          billing_details: {
            name: 'unknown',
            email: 'islammdfoisal54@gmail.com',
          },
        },
      });
    if (confirmError) {
      toast.error(confirmError?.message as string);
    }
    if (paymentIntent?.status === 'succeeded') {
      toast.success('Payment success');
      setIsLoading(false);
      deleteManyCart(ids);
    } else {
      toast.error('Payment unsuccessfull');
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (deltedResponse?.success) {
      navigate('/services');
    }
  }, [deltedResponse, navigate]);
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        disabled={isLoading || (!stripe && !elements)}
        className="btn btn-primary w-full mt-5"
        type="submit"
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          `Pay ($${price})`
        )}
      </button>
    </form>
  );
};

export default CheckOutForm;
