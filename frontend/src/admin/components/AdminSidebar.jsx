import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Projects",
      path: "/admin/projects",
    },
    {
      name: "Messages",
      path: "/admin/messages",
    },
    {
      name: "Profile",
      path: "/admin/profile",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Portfolio Admin
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;