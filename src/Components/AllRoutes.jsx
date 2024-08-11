import React from "react";
import { Route, Routes } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import MensPage from "../Admin/MensPage";
import WomensPage from "../Admin/WomensPage";
import KidsPage from "../Admin/KidsPage";
import Product from "../Pages/Product";
import WomensProduct from "../Pages/WomensProduct";
import KidsProduct from "../Pages/KidsProduct";
import SingleProductPage from "../Pages/SingleProductPage";
import Address from "../Pages/Address";
import { LoginOrSignUp } from "../Pages/LoginOrSignUp";
import { FullDetails } from "../Pages/FullDetails";
import { SeeFullDetails } from "../Pages/SeeFullDetails";
import { getData } from "../Pages/storage";

// import { useNavigate } from "react-router-dom";

const AllRoutes = () => {
  
  const [fulldetails, setFullDetails] = useState("");
  const [buttonLogging, setButtonLogging] = useState(false);
  // const navigate = useNavigate();
  console.log(fulldetails);

  useEffect(() => {
    const getDetails = getData("details");
    setFullDetails(getDetails);
    //
  }, []);


  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Product />}></Route>
        <Route path="/women" element={<WomensProduct />}></Route>
        <Route path="/kids" element={<KidsProduct />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/login" element={<LoginOrSignUp />} />
        <Route path="/fulldetails" element={<FullDetails />} />
        <Route path="/seeFullDetails" element={<SeeFullDetails />} />
        <Route path="/address" element={<Address />} ></Route>
        <Route path="/admin-men" element={<MensPage />}></Route>
        <Route path="/admin-women" element={<WomensPage />}></Route>
        <Route path="/admin-kids" element={<KidsPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
