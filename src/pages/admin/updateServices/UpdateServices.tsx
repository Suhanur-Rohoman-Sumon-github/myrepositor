import { Link } from 'react-router-dom';
import { useGetAllServiceQuery } from '../../../Redux/features/service/serviceApis';
import { TService } from '../../Home/OurService/OurService';

const UpdateServices = () => {
  const { data: serviceRes } = useGetAllServiceQuery(undefined);
  const services = serviceRes?.data;
  console.log(services);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {services &&
            services.map((service: TService) => (
              <tr key={service?._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={service?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{service?.name}</td>
                <td>{service?.category}</td>
                <td className="text-red-500">${service?.price}</td>
                <th>
                  <Link to={`/admin/updateServices/${service?._id}`}>
                    <button className="btn-primary ">Update</button>
                  </Link>
                </th>
              </tr>
            ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default UpdateServices;
