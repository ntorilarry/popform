import React from "react";
import { useGlobalState } from "../../utils/GlobalStateContext";
import { Link } from "react-router-dom";

const Workspace = () => {
  const { firstName, lastName } = useGlobalState();

  const hasName = firstName && lastName;

  return (
    <div>
      <div className="mt-6">
        <p className="text-base font-bold text-gray-900">Manage Workspace</p>
        {hasName ? (
          <p className="mt-1 text-sm font-medium text-gray-500">
            Manage Workspace Settings for {firstName} {lastName}
          </p>
        ) : (
          <p className="mt-4 text-sm font-normal text-red-500">
            Please save your details at the{" "}
            <span className="underline font-semibold">
              <Link to="/account-&-settings/profile">profile page</Link>{" "}
            </span>
            to access this page.
          </p>
        )}
      </div>
    </div>
  );
};

export default Workspace;
