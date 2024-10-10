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
    'pk_test_51OaW7SA36EHsCe9dKWgajsjH1lrsZ0a07POTljAYtkgaJD4SP1u6Gxr7QeeU67kD88gdAksRjp1GJzoI1oUKAfOl00bfsoroS0'
  );
  return (
    <div className="mt-[116px]">
      <Breakpoints path="payment" />
      <Container>
        <HeadingText
          style="lg:w-1/2 mx-auto text-center"
          subheading="payments"
          heading="Stripe Payment System"
        />
        <div className="mt-12 w-full mx-auto">
          <Elements stripe={stripePromise}>
            <CheckOutForm ids={arrayOfIds as string[]} price={priceInNumnber} />
          </Elements>
        </div>
      </Container>
    </div>
  );
};

export default CheckOutPage;
