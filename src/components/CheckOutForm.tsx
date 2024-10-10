import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteManyCartMutation,
  useGetAllCartQuery,
} from '../Redux/features/cart/cartApis';
import { useAppSelector } from '../Redux/hooks/hooks';
import { TCartItem } from '../pages/CartPage/CartPage';
import { useOrderMutation } from '../Redux/features/Orders/ordersApis';

const CheckOutForm = ({ price, ids }: { price: number; ids: string[] }) => {
  const user = useAppSelector(state => state.authTechTuend.user);
  const [order, { data: orderRes }] = useOrderMutation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    email: user.email, // Pre-filled with user email
    orderNotes: '',
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data: cartResponse } = useGetAllCartQuery(user.email);
  const cartServices = cartResponse?.success ? cartResponse.data : [];
  // stripe vars
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
        if (data.success) {
          setSecretKey(data.data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmitFormSubmit = async (event: FormEvent) => {
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
      order(formData);
      setIsLoading(false);
      deleteManyCart(ids);
    } else {
      toast.error('Payment unsuccessfull');
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (deltedResponse?.success && orderRes?.success) {
      toast.success('Payment success');
      console.log(orderRes);
      navigate('/services');
    }
  }, [deltedResponse, navigate, orderRes]);
  return (
    <form
      className="lg:flex justify-between gap-10 w-full "
      onSubmit={handleSubmitFormSubmit}
    >
      <div className=" lg:w-1/2">
        <h3 className="font-headingFont font-semibold text-2xl mb-5">
          Billing Details
        </h3>
        <div className="flex justify-between gap-5">
          <div className="mb-4 w-1/2">
            <label className="block text-sm font-medium" htmlFor="firstName">
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="John"
              required
            />
          </div>

          <div className="mb-4 w-1/2">
            <label className="block text-sm font-medium" htmlFor="lastName">
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="companyName">
            Company name (optional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Company Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="country">
            Country / Region *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="United States"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="streetAddress">
            Street address *
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="123 Main St"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="apartment">
            Apartment, suite, unit, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Apt 4B"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="city">
            Town / City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="New York"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="state">
            State *
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="NY"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="zipCode">
            ZIP Code *
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="10001"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="phone">
            Phone *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="email">
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="you@example.com"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="orderNotes">
            Order notes (optional)
          </label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Additional information about your order..."
          />
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="w-full p-4 rounded-md ">
          <h3 className="font-semibold font-headingFont mb-5">Summary</h3>
          {cartServices &&
            cartServices.length > 0 &&
            cartServices.map((item: TCartItem) => (
              <p
                key={item._id}
                className="flex mb-3 items-center justify-between gap-10"
              >
                {item?.service?.name as string}{' '}
                <span className="text-red-500">
                  ${item?.service?.price as string}
                </span>
              </p>
            ))}
          <p className="font-semibold flex justify-between items-center gap-10">
            Subtotal: <span className="text-red-500">${price}</span>
          </p>
        </div>
        <div className="flex justify-between items-center px-4">
          <h3 className=" my-5 font-bold font-headingFont">Credit Cards</h3>
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-6 rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOsJUPXMDaZXyJA2PxFYv2gEVkGofB0fsyQ&s"
              alt=""
            />
            <img
              className="w-8 h-6 rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJHTQcSmS0EhhMlMbQhhYhhY2b8Xy-QBkkA&s"
              alt=""
            />
            <img
              className="w-8 h-6 rounded"
              src="https://static-00.iconduck.com/assets.00/discover-icon-2048x1313-4euh7fjo.png"
              alt=""
            />
            <img
              className="w-8 scale-150 h-6 rounded"
              src="https://www.svgrepo.com/show/328148/amex.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          {' '}
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
        </div>
      </div>
    </form>
  );
};

export default CheckOutForm;
