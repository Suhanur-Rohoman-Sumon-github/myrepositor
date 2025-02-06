/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLoaderData, useNavigate } from 'react-router-dom';
import { TService } from '../../Home/OurService/OurService';
import { useForm } from 'react-hook-form';
import { useUpdateservicesMutation } from '../../../Redux/features/service/serviceApis';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const UpdateForm = () => {
  const serviceRes = useLoaderData();
  // @ts-ignore
  const service = serviceRes?.data;
  const [updateServices, { data: updateRes, error }] =
    useUpdateservicesMutation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<TService>({
    defaultValues: service, // Prefill form
  });

  const onSubmit = (data: TService) => {
    console.log('Updated Service:', data);

    updateServices({ id: data?._id, serviceInfo: { ...data } });
  };

  useEffect(() => {
    if (updateRes?.success) {
      toast.success('services updated created successfull');
      navigate('/admin/updateServices');
    }

    // @ts-ignore
    if (error?.data?.success === false) {
      // @ts-ignore
      toast.error(error?.data?.message);
    }
  }, [updateRes, error, navigate]);
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Update Service
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register('name')}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            {...register('image')}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            {...register('price')}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register('description')}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            {...register('category')}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Update Service
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
