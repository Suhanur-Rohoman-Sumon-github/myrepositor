/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AdminHome = () => {
  // Dummy data for statistics
  const stats = [
    { title: "Users Signed Up Today", value: 25 },
    { title: "Purchases Made Today", value: 45 },
    { title: "Total Purchases", value: 1200 },
    { title: "Total Services", value: 18 },
  ];

  // Dummy data for charts
  const barData = [
    { name: "Monday", users: 12, purchases: 20 },
    { name: "Tuesday", users: 20, purchases: 35 },
    { name: "Wednesday", users: 18, purchases: 30 },
    { name: "Thursday", users: 30, purchases: 50 },
    { name: "Friday", users: 25, purchases: 40 },
  ];

  const pieData = [
    { name: "Product A", value: 40 },
    { name: "Product B", value: 25 },
    { name: "Product C", value: 35 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              {stat.title}
            </h2>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Weekly User & Purchase Activity
          </h2>
          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#8884d8" name="Users" />
            <Bar dataKey="purchases" fill="#82ca9d" name="Purchases" />
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Service Distribution
          </h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
