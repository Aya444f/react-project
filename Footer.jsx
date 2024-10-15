import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="container py-4  ">
      <div className=" footer relative-bottom bg-white   ">
        <div className="row ">
          <div className="col-2 ">
            <Link className="navbar-brand fw-bold fs-4  " to={""}>
              Furnio .
            </Link>
            <p className={`${style.adres}`}>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div className="col-1 text-center p-2 mx-auto">
            <p className="text-secondary m-2 fw-medium">links</p>
            <Link
              to={"Home"}
              className="text-dark text-decoration-none fw-medium fs-6 lh-1"
            >
              <p>Home</p>
            </Link>
            <Link
              to={"Shop"}
              className="text-dark text-decoration-none fw-medium fs-6 lh-1"
            >
              <p>Shop</p>
            </Link>
            <Link
              to={"About"}
              className="text-dark text-decoration-none fw-medium fs-6 lh-1"
            >
              <p>About</p>
            </Link>
            <Link
              to={"Contact"}
              className="text-dark text-decoration-none fw-medium fs-6 lh-1"
            >
              <p>Contact</p>
            </Link>
          </div>
          <div className="col-2  p-2 mx-5 ">
            <p className="text-secondary m-2 fw-medium ">Help</p>

            <Link
              to={""}
              className="text-dark text-decoration-none fw-medium fs-6 lh-1 "
            >
              <p>payment options</p>
            </Link>
            <Link
              to={""}
              className="text-dark text-decoration-none fw-medium fs-6 lh-1"
            >
              <p>Returns</p>
            </Link>
            <Link
              to={""}
              className="text-dark text-decoration-none fw-medium fs-6 lh-1"
            >
              <p>privacy policy</p>
            </Link>
          </div>
          <div className="col-3 mx-5 p-4">
<p className="text-secondary fw-medium mx-4">Newsletter</p>
<div className="d-flex justify-content-space-around">
<small className="text-secondary mx-auto border-bottom border-dark fs-6 fw-lighter lh-1 " > Enter your email </small>
<Link className=" text-decoration-none text-dark border-bottom border-dark">Subscribe</Link>

</div>


          </div>
          <hr/>
          <p className="fw-normal  fs-5 lh-1">2023 Furniro. All rights reserved </p>
        </div>
      </div>
    </div>
  );
}
