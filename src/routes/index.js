import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ROUTE_PATHS from "./RoutesPath";
import Wrapper from "../layouts/Wrapper"; // adjust path if needed

// Lazy imports
const Home = lazy(() => import("../../pages/Home"));
const BankProductDetails = lazy(() => import("../../pages/BankProductDetails"));
const BankDetails = lazy(() => import("../../pages/BankDetails"));
const Registration = lazy(() => import("../../pages/Registration"));

const RoutesPath = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <Routes>
        {/* All routes wrapped with Header + Footer */}
        <Route element={<Wrapper />}>
          <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          <Route path={ROUTE_PATHS.BANKPRODUCT} element={<BankProductDetails />} />
          <Route path={ROUTE_PATHS.BANKPRODUCTDETAILS} element={<BankDetails />} />
          <Route path={ROUTE_PATHS.REGISTERUSER} element={<Registration />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesPath;
