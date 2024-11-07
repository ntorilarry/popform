import React, { useState } from "react";
import { useGlobalState } from "../../utils/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { firstName, lastName, email, setEmail, setFirstName, setLastName } =
    useGlobalState();

  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [localLastName, setLocalLastName] = useState(lastName);
  const [localEmail, setLocalEmail] = useState(email);

  const handleSave = () => {
    setFirstName(localFirstName);
    setLastName(localLastName);
    setEmail(localEmail);
    alert(`Name: ${localFirstName} ${localLastName}, Email: ${localEmail}`);
    navigate("/account-&-settings/workspace");
  };
  return (
    <div>
      <div className="mt-6">
        <p className="text-base font-bold text-gray-900">Profile</p>
        <p className="mt-1 text-sm font-medium text-gray-500">
          Customize your profile
        </p>
      </div>

      <form onSubmit={handleSave} className="max-w-3xl mt-12">
        <div className="space-y-8">
          <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
            <label
              htmlFor=""
              className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
            >
              {" "}
              Name{" "}
            </label>
            <div className="mt-2 sm:mt-0 sm:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={localFirstName}
                    onChange={(e) => setLocalFirstName(e.target.value)}
                    required
                    className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={localLastName}
                    onChange={(e) => setLocalLastName(e.target.value)}
                    required
                    className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
            <label
              htmlFor=""
              className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
            >
              {" "}
              Email Address{" "}
            </label>
            <div className="mt-2 sm:mt-0 sm:col-span-2">
              <input
                type="email"
                placeholder="someone@example.com"
                value={localEmail}
                onChange={(e) => setLocalEmail(e.target.value)}
                required
                className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-12">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
