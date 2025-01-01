import { useParams } from 'react-router-dom';
import Breakpoints from '../../components/Breakpoints';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import CheckOutForm from '../../components/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './CheckoutPage.css';
const CheckOutPage = () => {
  const { price, ids } = useParams();

  const arrayOfIds = ids?.split(',');
  const priceInNumnber = parseFloat(price as string);
  const stripePromise = loadStripe(
    'pk_live_51QBsidFo4VhrdkqeFTz8DIC1NrpUqMeTEz101umguCMr0xNC72Io0zSil8B0P4othONL6YxaCkmEjjevP5mE5ppy00Mn2kn4nS'
  );
  return (
    <div className="mt-[116px]">
      <Breakpoints path="payment" />
      <Container>
        <HeadingText
          style="lg:w-1/2 mt-12 mx-auto text-center"
          subheading="payments"
          heading=""
        />
        <div className="w-full mx-auto ">
          <Elements stripe={stripePromise}>
            <CheckOutForm ids={arrayOfIds as string[]} price={priceInNumnber} />
          </Elements>
        </div>
      </Container>
    </div>
  );
};

export default CheckOutPage;
