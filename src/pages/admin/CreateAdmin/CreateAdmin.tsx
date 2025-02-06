/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FieldValues, useForm } from 'react-hook-form';
import { useSignupMutation } from '../../../Redux/features/user/userApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const CreateAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [signup, { data: createUserRes, error }] = useSignupMutation();
  const onSubmit = (data: FieldValues) => {
    const userInfo = {
      ...data,
      isDeleted: false,
    };
    signup(userInfo);
  };

  useEffect(() => {
    if (createUserRes?.success === true) {
      toast.success('user created successfull');
    }

    console.log(createUserRes, error);
    // @ts-ignore
    if (error?.data?.success === false) {
      // @ts-ignore
      toast.error(error?.data?.message);
    }
  }, [createUserRes, error]);
  return (
    <div className="lg:w-1/2 mx-auto  p-6  rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            placeholder="Enter name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            placeholder="Enter Email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            placeholder="Enter Phone number"
            type="text"
            {...register('phone', { required: 'Phone is required' })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            {...register('role', { required: 'Role is required' })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            placeholder="Enter Your password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="w-full btn-primary transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
