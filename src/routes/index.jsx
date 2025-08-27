import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ROUTE_PATHS from "./routePaths";
import Wrapper from "../components/layout/Wrapper";
import Home from "../pages/Home";
import BankProductDetails from "../pages/BankProductDetails";
import BankDetails from "../pages/BankDetails";
import Registration from "../pages/Registration";
import PageNotFound from "../pages/PageNotFound";
// Lazy imports

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
          <Route path={"*"} element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesPath;
