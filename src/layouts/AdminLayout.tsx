import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button className="text-sm bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Logout
        </button>
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link
                to="/admin/dashboard"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/create-user"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Create user
              </Link>
            </li>
            <li>
              <Link
                to="/admin/All-user"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                All user
              </Link>
            </li>
            <li>
              <Link
                to="/admin/Add-services"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Add Services
              </Link>
            </li>
            <li>
              <Link
                to="/admin/updateServices"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Update Services
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Settings
              </Link>
            </li>
          </ul>
          <div className="mt-auto p-4 text-sm text-gray-400">
            Admin Panel © 2025
          </div>
          <div className="mt-auto p-4 text-sm text-gray-400">
            Admin Panel © 2025
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
