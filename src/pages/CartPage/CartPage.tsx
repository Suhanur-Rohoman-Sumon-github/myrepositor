import { Link } from 'react-router-dom';
import Breakpoints from '../../components/Breakpoints';
import CartTableRow from '../../components/CartTableRow';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import { useGetAllCartQuery } from '../../Redux/features/cart/cartApis';
type TCartItem = {
  _id: string;
  user: string;
  quantity: number;
  service: Record<string, unknown>;
};
const CartPage = () => {
  const { data: cartResponse } = useGetAllCartQuery(undefined);
  const cartServices = cartResponse?.success ? cartResponse.data : [];
  const ids = cartServices.map((item: TCartItem) => item._id);
  const totalCost =
    cartServices &&
    cartServices?.reduce(
      (acc: number, item: TCartItem) =>
        ((parseFloat(item.service.price as string) + acc) *
          item?.quantity) as number,
      0
    );
  return (
    <div className="mt-[116px]">
      <Breakpoints path="Cart" />
      <Container>
        <HeadingText
          style="lg:w-1/2 text-center mx-auto mt-[116px] mb-12 "
          heading="Service Cart"
          subheading="cart"
        />
        <div className="lg:flex flex-row-reverse justify-between gap-10">
          <div className="lg:w-1/4 p-4 rounded-md shadow-md">
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
              Subtotal: <span className="text-red-500">${totalCost}</span>
            </p>
            <Link to={`/payment/${totalCost}/${ids}`}>
              <button className="btn-primary mt-5">Checkout</button>
            </Link>
          </div>
          <div className="lg:w-3/4   ">
            <div className="overflow-x-auto">
              <table className="table border">
                {/* head */}
                <thead className="bg-slate-100">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartServices &&
                    cartServices.length > 0 &&
                    cartServices.map((item: TCartItem) => (
                      <CartTableRow item={item} key={item._id} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
