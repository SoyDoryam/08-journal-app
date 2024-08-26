import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPages, RegisterPages } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="Login" element={<LoginPages />} />
      <Route path="register" element={<RegisterPages />} />

      <Route path="/*" element={<Navigate yo="/auth/login" />} />
    </Routes>
  );
};
