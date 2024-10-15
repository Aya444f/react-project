import React from "react";
import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
export default function Cart() {
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
              left: "45%",
              opacity: "unset",
              fontFeatureSettings: "inherit",
            }}
          >
            Cart
          </Link>
          <small
            style={{
              position: "absolute",

              top: "150px",
              left: "47%",
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
      <div className="col-med-6  py-2">
        <div
          className="card col-5"
          style={{ backgroundColor: "#F9F1E7", marginLeft: "300px" }}
        >
          <div className="d-flex  ">
            <p className="" style={{ marginRight: "20px", marginLeft: "30px" }}>
              product
            </p>
            <p className="" style={{ marginRight: "20px", marginLeft: "80px" }}>
              price
            </p>
            <p className="" style={{ marginRight: "20px", marginLeft: "30px" }}>
              {" "}
              quantity
            </p>
            <p className="" style={{ marginRight: "100px", marginLeft: "30px" }}>
              {" "}
              Subtotal
            </p>
          </div>
          <div className="col-1  py-1 mx-1" style={{ paddingBottom: "170px" }}>
            <img
              className="col-1"
              src="Images/firstproducttwoclick.png"
              style={{
                width: "90px",
                position: "absolute",
                top: "82px",
                marginLeft: "-5px",
                backgroundColor: "#F9F1E7",
                height: "90px",
              }}
              alt=""
            />
            <div></div>
          </div>
        </div>

        <small
          className="fw-medium"
          style={{
            marginLeft: "400px",
            marginTop: "50px",
            position: "absolute",
            fontSize: "11px",
            color: "lightgray",
          }}
        >
          Asgarada sofa
        </small>
        <small
          className="fw-medium"
          style={{
            marginLeft: "480px",
            marginTop: "50px",
            position: "absolute",
            fontSize: "11px",
            color: "lightgray",
          }}
        >
          Rp250.000
        </small>
        <button
          className="border"
          style={{
            marginLeft: "600px",
            marginTop: "50PX",
            border: "none",
            background: "none",
          }}
        >
          1
        </button>
        <FaTrash  style={{marginTop:'55px',position:"absolute",marginLeft:"190px",color:"#B88E2F"}}/>

        <small className="" style={{marginLeft:"70px",color:"lightgrey"}} >Rp 250.000</small>

      </div>
      <div className=" card col-3" style={{backgroundColor:"#F9F1E7",position:"absolute",marginLeft:"900px",height:"250px"}}>
        <h5 className=" text-center m-2" style={{}}>Cart Totals</h5>
<p className="" style={{marginLeft:"60px",marginTop:"50px",fontSize:'13PX'}}>Subtotal<small className=" fw-medium" style={{color:"#9F9F9F",marginLeft:"40px"}}>Rp 250.000</small> </p>
<p className="" style={{marginLeft:"60px",fontSize:'13PX'}}> Total <small  className="fw-medium  " style={{color:"#B88E2F",marginLeft:"50px"}}>Rp 250.000</small></p>
<Link className="" to={'/Checkout'}><button className="btn   rounded  bg-none border border-dark  col-4 " style={{marginLeft:"100px"}}>Checkout</button></Link>


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
