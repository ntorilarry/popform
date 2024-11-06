import React from "react";
import { useGlobalState } from "../../utils/GlobalStateContext";
import { Link } from "react-router-dom";

const Billing = () => {
  const { firstName, lastName, plan, setPlan } = useGlobalState();
  const hasName = firstName && lastName;

  const handleUpgrade = () => {
    setPlan("Business");
  };

  const handleDowngrade = () => {
    setPlan("Base");
  };

  return (
    <div>
      <div className="mt-6">
        <p className="text-base font-bold text-gray-900">Billing Plan</p>
        <p className="mt-1 text-sm font-medium text-gray-500">Choose a plan</p>
      </div>

      {!hasName ? (
        <p className="mt-4 text-sm font-normal text-red-500">
          Please save your details at the{" "}
          <span className="underline font-semibold">
            <Link to="/account-&-settings/profile">profile page</Link>{" "}
          </span>
          to access this page.
        </p>
      ) : (
        <div className="max-w-sm mt-8">
          <div className="space-y-3">
            {/* Base Plan */}
            <div
              onClick={handleDowngrade}
              className={`overflow-hidden transition-all duration-200 bg-white border-2 rounded-md ${
                plan === "Base" ? "border-blue-600" : "border-gray-200"
              } hover:bg-gray-50 cursor-pointer`}
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div>
                    <input
                      type="radio"
                      name="plan"
                      id="basePlan"
                      className="w-5 h-5 text-blue-600 border-gray-500 rounded-full"
                      checked={plan === "Base"}
                      onChange={handleDowngrade}
                    />
                  </div>
                  <label htmlFor="basePlan" className="ml-5 mr-auto">
                    <p className="text-lg font-semibold text-black">
                      $19/month
                    </p>
                    <p className="text-sm text-gray-600">Base Plan</p>
                  </label>
                  {plan === "Base" && (
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 border border-gray-600 rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div
              onClick={handleUpgrade}
              className={`overflow-hidden transition-all duration-200 bg-white border-2 rounded-md ${
                plan === "Business" ? "border-blue-600" : "border-gray-200"
              } hover:bg-gray-50 cursor-pointer`}
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div>
                    <input
                      type="radio"
                      name="plan"
                      id="businessPlan"
                      className="w-5 h-5 text-blue-600 border-gray-500 rounded-full"
                      checked={plan === "Business"}
                      onChange={handleUpgrade}
                    />
                  </div>
                  <label htmlFor="businessPlan" className="ml-5 mr-auto">
                    <p className="text-lg font-semibold text-black">
                      $29/month
                    </p>
                    <p className="text-sm text-gray-600">Business Plan</p>
                  </label>
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 border border-green-600 rounded-full">
                    {plan === "Business" ? "Current" : "Upgrade"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
