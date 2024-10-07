import { useForm } from 'react-hook-form';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../Redux/features/user/userApi';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  phone: string;
}
type TErrorMessage = {
  success: boolean;
  message: string;
  errorSources: { path: string; message: string }[];
};
export type TError = { status: number; data: TErrorMessage };
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // for password toggle
  const [signup, { data: userResponse, isError, error }] = useSignupMutation();

  const onSubmit = (data: SignupFormInputs) => {
    const userInfo = {
      ...data,
      role: 'user',
      isDeleted: false,
    };
    signup(userInfo);
  };
  console.log(error);

  useEffect(() => {
    if (isError) {
      toast.error((error as TError)?.data?.errorSources[0].message);
    }
    if (userResponse) {
      if (userResponse?.success) {
        toast.success(userResponse?.message);
        navigate('/login');
      }
    }
  }, [error, isError, userResponse, navigate]);
  return (
    <Container>
      <div className="mt-[116px] lg:w-1/2 mx-auto">
        <HeadingText
          style="text-center my-12"
          heading="Please Signup you account"
          subheading="Register"
        />

        <div className="shadow-md p-5 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Enter name"
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="Enter email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: 'Enter a valid email',
                  },
                })}
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <input
                id="phone"
                placeholder="Enter phone number"
                {...register('phone', {
                  required: 'phone number is required',
                })}
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="Enter password"
                  id="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                  type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                {/* Toggle Button */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2"
                  onClick={() => setShowPassword(prev => !prev)} // Toggle the state
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" /> // Show eye slash icon when password is visible
                  ) : (
                    <FaEye className="text-gray-500" /> // Show eye icon when password is hidden
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
          </form>
          <p className="text-base text-center">
            Already hanve an account ?{' '}
            <Link className="text-brandPrimary underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
