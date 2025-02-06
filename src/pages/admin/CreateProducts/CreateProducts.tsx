/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FieldValues, useForm } from 'react-hook-form';
import { useCreateServiceMutation } from '../../../Redux/features/service/serviceApis';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export interface TService {
  name: string;
  image: string;
  price: string;
  currency: string;
  description: string;
  category: string;
}

const CreateProducts = () => {
  const { register, handleSubmit } = useForm();
  const [createService, { data: serviceRes, error }] =
    useCreateServiceMutation();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    createService({ ...data });
  };
  useEffect(() => {
    if (serviceRes?.success) {
      toast.success('service created successfull');
    }

    // @ts-ignore
    if (error?.data?.success === false) {
      // @ts-ignore
      toast.error(error?.data?.message);
    }
  }, [serviceRes, error]);
  return (
    <div className="lg:w-1/2 mx-auto  p-6  rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Service</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            placeholder="Enter the service name"
            type="text"
            {...register('name')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            placeholder="Enter the service image url"
            type="text"
            {...register('image')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            placeholder="Enter the service price"
            type="text"
            {...register('price')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Currency
          </label>
          <input
            placeholder="Enter the service price currency"
            type="text"
            {...register('currency')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Enter the service description"
            {...register('description')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter the service category"
            {...register('category')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="w-full btn-primary">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default CreateProducts;
