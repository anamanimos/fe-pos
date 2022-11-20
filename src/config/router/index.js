import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Customer,
  Dashboard,
  Order,
  Product,
  Report,
  Sales,
  Setting,
} from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customer" element={<Customer />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />} />
        <Route path="/report" element={<Report />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
