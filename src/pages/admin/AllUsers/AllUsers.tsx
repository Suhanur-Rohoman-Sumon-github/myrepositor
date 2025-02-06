import { FaTrash, FaUser } from 'react-icons/fa6';
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from '../../../Redux/features/user/userApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
export type TUser = {
  name: string;
  email: string;
  phone: string;
  role: string;
  isDeleted: boolean;
  password: string;
};

const AllUsers = () => {
  const { data: userRes } = useGetAllUserQuery(undefined);
  const users = userRes?.data;
  const [deleteUser, { data: deleteRes }] = useDeleteUserMutation();
  const handlerDeleteUser = (email: string) => {
    deleteUser(email);
  };

  useEffect(() => {
    if (deleteRes?.success) {
      toast.success('user deleted successfull');
    }
  }, [deleteRes]);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user: TUser) => (
              <tr key={user.email}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
                <td>{user?.role}</td>
                <td className="flex items-center gap-2">
                  <button>
                    <FaUser />
                  </button>{' '}
                  <button
                    onClick={() => handlerDeleteUser(user.email)}
                    className="text-red-500"
                  >
                    {' '}
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
