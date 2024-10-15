import React from "react";
import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";
import { IoEllipseOutline } from "react-icons/io5";

import { RiCustomerServiceLine } from "react-icons/ri";
export default function Checkout() {
  return (
    <div>
      <div className="container ">
        <header className=" col-md-8 py-4 ">
          <Link>
            <img
              src="Images/logo.png"
              alt="logo"
              className=""
              style={{
                width: "65px",
                marginLeft: "510px",
                position: "absolute",
                marginTop: "40px",
              }}
            />
          </Link>

          <Link
            className="nav-link active  fw-medium fs-4"
            to={"Shop"}
            style={{
              position: "absolute",
              margin: "30px",
              top: "80px",
              left: "43%",
              opacity: "unset",
              fontFeatureSettings: "inherit",
            }}
          >
            Ceckout
          </Link>
          <small
            style={{
              position: "absolute",

              top: "150px",
              left: "45.5%",
              opacity: "unset",
              fontFeatureSettings: "inherit",
            }}
          >
            Home >shop
          </small>
          <img
            className=""
            style={{
              width: "1200px",
              height: "315px",
              opacity: "45%",
            }}
            src="Images/otherheader.jpeg"
            alt="hedtwo"
          />
        </header>
      </div>
      <div className="container  py-4 px-2">
        <div className="col-6" style={{}}>
          <h5 style={{ marginLeft: "30px" }}>Billing Details</h5>
          <fieldset className="col-4" style={{ margin: "" }}>
            <form className="col-4 m-4">
              <div className="d-flex">
                <label
                  htmlFor="firstname"
                  className=""
                  style={{ fontSize: "13px", margin: "20px" }}
                >
                  first Name
                </label>

                <input className="m-4" />

                <label
                  htmlFor="firstname"
                  style={{ fontSize: "14px", marginTop: "20px" }}
                >
                  last Name
                </label>
                <input
                  className="m-4"
                  style={{ fontSize: "14px", marginLeft: "30px" }}
                />
              </div>

              <label
                htmlFor="companyname"
                style={{
                  fontSize: "16px",
                  marginRight: "px",
                  marginLeft: "15px",
                }}
              >
                Company name(optional)
              </label>
              <br />
              <input className="m-3" />

              <label
                htmlFor="country"
                style={{
                  fontSize: "16px",
                  marginRight: "",
                  marginLeft: "20px",
                  marginTop: "30px",
                }}
              >
                Country/region
              </label>
              <input className="m-3" placeholder="Egypto" />

              <label
                htmlFor="Adress"
                style={{
                  fontSize: "14px",
                  marginRight: "20px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                Street/adress
              </label>
              <input className="m-3" />

              <label
                htmlFor="pro"
                style={{
                  fontSize: "14px",
                  marginRight: "20px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                province
              </label>
              <input className="m-3" placeholder="westren " />
              <label
                htmlFor="code"
                style={{
                  fontSize: "14px",
                  marginRight: "20px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                ZIP code
              </label>
              <input className="m-3" />
              <label
                htmlFor="tel"
                style={{
                  fontSize: "14px",
                  marginRight: "20px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                phone
              </label>
              <input className="m-3" />
              <label
                htmlFor="email"
                style={{
                  fontSize: "14px",
                  marginRight: "20px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                email
              </label>
              <input className="m-3" />
            </form>
          </fieldset>
          <div
            className="col-4"
            style={{ position: "absolute", marginLeft: "900px", top: "400px" }}
          >
            <div className="d-flex col-4" style={{ marginTop: "60px" }}>
              <p className="fw-medium" style={{ marginRight: "50px" }}>
                Product
              </p>
              <p className=" fw-medium" style={{ marginLeft: "60px" }}>
                subTotal
              </p>
              <p
                className="fw-medium"
                style={{
                  marginRight: "120px",
                  fontSize: "13px",
                  position: "absolute",
                  marginTop: "50px",
                  color: "lightgrey",
                }}
              >
                Asganda x1
              </p>
              <p
                className=" fw-medium"
                style={{
                  marginLeft: "160px",
                  position: "absolute",
                  fontSize: "13px",
                  marginTop: "50px",
                }}
              >
                Rp250.000
              </p>

              <p
                style={{
                  fontSize: "13px",
                  marginLeft: "10px",
                  position: "absolute",

                  marginTop: "80px",
                  fontWeight: "500",
                }}
              >
                subtotal
              </p>
              <p
                className=""
                style={{
                  fontSize: "14px",
                  marginLeft: "160px",
                  position: "absolute",

                  marginTop: "80px",
                }}
              >
                Rp 250.000
              </p>
              <p
                style={{
                  fontSize: "13px",
                  marginLeft: "10px",
                  position: "absolute",
                  marginTop: "120px",
                  fontWeight: "500",
                }}
              >
                total
              </p>
              <p
                className="fw-medium"
                style={{
                  fontSize: "14px",
                  marginLeft: "160px",
                  position: "absolute",

                  marginTop: "120px",
                  color: "#B88E2F",
                }}
              >
                Rp 250.000
              </p>
            </div>
          </div>
          <hr
            style={{
              marginLeft: "850px",
              position: "absolute",
              width: "350px",
              marginTop: "-680px",
            }}
          />
        </div>
      </div>
      <div className=" col-2" style={{ position: "absolute",marginLeft:"900px",marginTop:"-652px" }}>
        <IoEllipse className="" style={{marginLeft:"20px"}}/>
        <p  className="fw-medium" style={{top:"1px",marginLeft:"50px",position:"absolute"}}>Direct bank transfer</p>
        <p style={{marginLeft:"20px",fontSize:"12px",color:"lightgray",width:"300px"}} className="">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <IoEllipseOutline className="text-secondary" />
        <small className="text-secondary">Direct Bank Transfer</small>
        <br/>
        <IoEllipseOutline className="text-secondary" />
        <small className="text-secondary">Cash On Delivery</small>
        <p className="" style={{width:"300px",fontSize:"13px",marginTop:"30px"}}>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our  privacy policy .
        </p>
        <  button className="rounded" style={{background:"none",padding:"5px"}}>Place order</button>
      </div>

      <div className="container py-4 px-2">
        <div
          className=" card col-med-6 "
          style={{
            backgroundColor: "#F9F1E7",
            marginBottom: "",
            marginTop: "380px",
          }}
        >
          <div className="container">
            <svg
              style={{ margin: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              height="58px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#000000"
            >
              <path d="M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm196 141q57 0 96.5-40t39.5-97v-258H344v258q0 57 39.5 97t96.5 40Zm196-141q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z" />
            </svg>

            <p
              className="fw-medium"
              style={{
                position: "absolute",
                top: "30px",
                marginLeft: "70px",
              }}
            >
              High quality
            </p>
            <small
              className="fw-medium"
              style={{
                color: "#898989",
                fontSize: "12px",
                marginTop: "55px",
                position: "absolute",
                marginLeft: "-20px",
              }}
            >
              Crafted from top materials
            </small>
          </div>
          <div className="m-2">
            <svg
              style={{
                position: "absolute",
                marginLeft: "260px",
                top: "18px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="58px"
              fill="#000000"
            >
              <path d="m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z" />
            </svg>
            <p
              className="fw-medium"
              style={{
                position: "absolute",
                top: "22px",
                marginLeft: "320px",
              }}
            >
              Warranty protection
            </p>
            <small
              className="fw-medium"
              style={{
                color: "#898989",
                fontSize: "12px",
                marginTop: "-50px",
                position: "absolute",
                marginLeft: "319px",
              }}
            >
              Over two years
            </small>
          </div>
          <div>
            <FaBox
              className=""
              style={{
                fontSize: "40px",
                marginLeft: "550px",
                top: "25px",
                position: "absolute",
              }}
            />
            <p
              className="fw-medium"
              style={{
                marginLeft: "610px",
                top: "20px",
                position: "absolute",
              }}
            >
              Free shipping
            </p>
            <small
              className="fw-medium"
              style={{
                marginLeft: "610px",
                color: "rgba(137, 137, 137, 1)",
                top: "40px",
                position: "absolute",
              }}
            >
              Order over 150$
            </small>
          </div>

          <div>
            <RiCustomerServiceLine
              className=""
              style={{
                fontSize: "50px",
                marginLeft: "820px",
                position: "absolute",
                top: "20px",
              }}
            />
            <p
              className="fw-medium"
              style={{
                fontSize: "15px",
                marginLeft: "890px",
                position: "absolute",
                top: "30px",
              }}
            >
              {" "}
              24/7 Support
            </p>
            <small
              className="fw-medium"
              style={{
                fontSize: "13px",
                marginLeft: "890px",
                position: "absolute",
                top: "50px",
                color: "rgba(137, 137, 137, 1)",
              }}
            >
              Dedicated support
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
