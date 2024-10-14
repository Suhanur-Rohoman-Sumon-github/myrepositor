/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from 'react-router-dom';
import Breakpoints from '../../components/Breakpoints';
import CartTableRow from '../../components/CartTableRow';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import { useGetAllCartQuery } from '../../Redux/features/cart/cartApis';
import { useAppSelector } from '../../Redux/hooks/hooks';

export type TCartItem = {
  _id: string;
  user: string;
  quantity: number;
  service: Record<string, unknown>;
};

const CartPage = () => {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.authTechTuend.user);
  // @ts-ignore
  const { data: cartResponse } = useGetAllCartQuery(user.email);
  const cartServices = cartResponse?.success ? cartResponse.data : [];
  const ids = cartServices.map((item: TCartItem) => item._id);
  const totalCost =
    cartServices &&
    cartServices.reduce(
      (acc: number, item: TCartItem) =>
        ((parseFloat(item.service.price as string) + acc) *
          item?.quantity) as number,
      0
    );

  const handlerCheckout = () => {
    navigate(`/payment/${totalCost}/${ids}`);
  };

  const handleContinueToService = () => {
    navigate('/services');
  };

  return (
    <div className="mt-[116px]">
      <Breakpoints path="Cart" />
      <Container>
        <HeadingText
          style="lg:w-1/2 text-center mx-auto mt-[116px] mb-12"
          heading="Service Cart"
          subheading="cart"
        />

        {/* Conditional Rendering based on cart length */}
        {cartServices && cartServices.length > 0 ? (
          <div className="lg:flex flex-row-reverse justify-between gap-10">
            {/* Summary Section */}
            <div className="lg:w-1/4 p-4 rounded-md shadow-md">
              <h3 className="font-semibold font-headingFont mb-5">Summary</h3>
              {cartServices.map((item: TCartItem) => (
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
                Subtotal: <span className="text-red-500">${totalCost}</span>
              </p>

              <button
                onClick={handlerCheckout}
                disabled={!totalCost || !ids}
                className={`w-full mt-5 ${
                  !totalCost || !ids
                    ? 'bg-slate-400 px-8 py-2 rounded-full'
                    : 'btn-primary'
                }`}
              >
                Checkout
              </button>
              <div className="flex mt-5 w-fit mx-auto items-center gap-2">
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

            {/* Cart Table Section */}
            <div className="lg:w-3/4">
              <div className="overflow-x-auto">
                <table className="table border">
                  <thead className="bg-slate-100">
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartServices.map((item: TCartItem) => (
                      <CartTableRow item={item} key={item._id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold mb-6">Your cart is empty!</h2>
            <p className="text-lg mb-6">
              Looks like you haven’t added any services yet. Continue browsing
              to explore our offerings.
            </p>
            <button
              onClick={handleContinueToService}
              className="btn-primary px-6 py-3 rounded-full"
            >
              Continue to Services
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
