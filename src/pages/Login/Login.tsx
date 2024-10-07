import { useForm } from 'react-hook-form';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../../Redux/features/user/userApi';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../Redux/hooks/hooks';
import { setUser } from '../../Redux/features/auth/authSlice';
interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  phone: string;
}
const Login = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false); // for password toggle
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const [login, { data: userResponse }] = useLoginMutation();
  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    // Handle form submission logic here
    login(data);
  };

  useEffect(() => {
    if (userResponse?.success) {
      toast.success(userResponse.message);
      dispatch(
        setUser({
          user: userResponse.data.user,
          token: userResponse.data.token,
        })
      );
    }
  }, [userResponse, dispatch]);
  return (
    <Container>
      <div className="mt-[116px] lg:w-1/2 mx-auto">
        <HeadingText
          style="text-center my-12"
          heading="Please Login your account"
          subheading="Login"
        />

        <div className="shadow-md rounded-md p-5">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              Login
            </button>
          </form>
          <p className="text-base text-center">
            Already hanve an account ?{' '}
            <Link className="text-brandPrimary underline" to="/signup">
              signup
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
