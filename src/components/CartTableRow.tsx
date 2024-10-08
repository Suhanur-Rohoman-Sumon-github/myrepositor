import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useUpdateQuantityMutation } from '../Redux/features/cart/cartApis';
import toast from 'react-hot-toast';
import { useState } from 'react';

const CartTableRow = ({
  item,
}: {
  item: {
    _id: string;
    user: string;
    service: Record<string, unknown>;
    quantity: number;
  };
}) => {
  const { name, price } = item.service;
  const [updateQuantity] = useUpdateQuantityMutation();
  const [loading, setLoading] = useState(false);

  const handlerIncreaseQuanity = async () => {
    setLoading(true);
    if (item.quantity) {
      await updateQuantity({ id: item._id, quantity: item.quantity + 1 });
      setLoading(false);
    }
  };
  const handlerDecreaseQuantity = async () => {
    setLoading(true);
    if (item.quantity <= 1) {
      toast.error('Service is should not less then 1');
      setLoading(false);
    } else {
      await updateQuantity({ id: item._id, quantity: item.quantity - 1 });
      setLoading(false);
    }
  };
  console.log(loading);
  return (
    <tr className={`${loading ? 'opacity-40' : 'opacity-100'}`}>
      <th></th>
      <td>{name as string}</td>
      <td className="text-red-500">${price as string}</td>
      <td className="flex gap-3 items-center">
        <button
          disabled={loading}
          onClick={handlerDecreaseQuantity}
          className="px-3 py-1 bg-brandPrimary rounded-md text-white"
        >
          <FaMinus />{' '}
        </button>{' '}
        <span className=" px-3">{item.quantity}</span>
        <button
          disabled={loading}
          onClick={handlerIncreaseQuanity}
          className="px-3 py-1 bg-brandPrimary rounded-md text-white"
        >
          <FaPlus />
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;
