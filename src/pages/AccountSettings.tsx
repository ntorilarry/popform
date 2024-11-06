import React from "react";
import { accountTabs } from "../components/Data";
import { NavLink, Outlet } from "react-router-dom";

const AccountSettings = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col ">
          <main>
            <div className="py-6">
              <div className="px-4 mx-auto sm:px-6 md:px-8">
                <h1 className="text-2xl font-bold text-gray-900">
                  Account & Settings
                </h1>
              </div>

              <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                <div className="w-full pb-1 overflow-x-auto">
                  <div className="border-b border-gray-200">
                    <nav className="flex -mb-px space-x-10">
                      {accountTabs.map((item) => (
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            `py-4 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                              isActive
                                ? "text-indigo-600 border-indigo-600"
                                : "text-gray-500 border-transparent"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                </div>
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
