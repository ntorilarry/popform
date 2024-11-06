import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import AccountSettings from "../pages/AccountSettings";
import Profile from "../pages/components/Profile";
import Billing from "../pages/components/Billing";
import Workspace from "../pages/components/Workspace";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="account-&-settings" />} />
        <Route path="account-&-settings" element={<AccountSettings />}>
          <Route index element={<Navigate replace to="profile" />} />
          <Route path="profile" element={<Profile />} />
          <Route path="billing" element={<Billing />} />
          <Route path="workspace" element={<Workspace />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouting;
