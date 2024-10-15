import React from "react";
import { Link } from "react-router-dom";
import { FaVectorSquare } from "react-icons/fa";
import { LuLayoutList } from "react-icons/lu";
import { FaBox } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";


import Product from "../Product";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};

const intialProducts = [
  {
    id: 1,
    name: "Syltherine",
    description: "stylish cafe chair",
    price: "Rp 2.500.000",
    beforeprice: "Rp 3.500.000",
    imageurl: "Images/productone.png",
  },
  {
    id: 2,
    name: "Asgaard sofa",
    description: "royal stylish sofa",
    price: 250.0,
    imageurl: "Images/firstproducttwoclick.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7000.00",
    beforeprice: "Rp 14.000.00",
    imageurl: "Images/productthreep.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "outdoor tables and stool",
    price: 500.0,
    imageurl: "Images/productfour.jpeg",
  },
  {
    id: 5,
    name: "Syltherine",
    description: "stylish cafe chair",
    price: "Rp 2.500.000",
    beforeprice: "Rp 3.500.000",
    imageurl: "Images/productone.png",
  },
  {
    id: 6,
    name: "Leviosa",
    description: "stylish cafe chair",
    price: "Rp2.500",
    beforeprice: "Rp 3.500.000",
    imageurl: "Images/producttwo.png",
  },
  {
    id: 7,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7000.00",
    beforeprice: "Rp 14.000.00",
    imageurl: "Images/productthreep.png",
  },
  {
    id: 8,
    name: "Respira",
    description: "outdoor tables and stool",
    price: 500.0,
    imageurl: "Images/productfour.jpeg",
  },
  {
    id: 9,
    name: "Syltherine",
    description: "stylish cafe chair",
    price: "Rp 2.500.000",
    beforeprice: "Rp 3.500.000",
    imageurl: "Images/productone.png",
  },
  {
    id: 10,
    name: "Leviosa",
    description: "stylish cafe chair",
    price: "Rp2.500",
    beforeprice: "Rp 3.500.000",
    imageurl: "Images/producttwo.png",
  },

  {
    id: 11,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7000.00",
    beforeprice: "Rp 14.000.00",
  },
  {
    id: 12,
    name: "Respira",
    description: "outdoor tables and stool",
    price: 500.0,
  },
  {
    id: 13,
    name: "Syltherine",
    description: "stylish cafe chair",
    price: "Rp 2.500.000",
    beforeprice: "Rp 3.500.000",
  },
  {
    id: 14,
    name: "Leviosa",
    description: "stylish cafe chair",
    price: "Rp2.500",
    beforeprice: "Rp 3.500.000",
  },
  {
    id: 15,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7000.00",
    beforeprice: "Rp 14.000.00",
  },
  {
    id: 16,
    name: "Respira",
    description: "outdoor tables and stool",
    price: 500.0,
  },
];

const product = intialProducts.map((item) => (
  <Product
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
  />
));

export default function Shop() {
  return (
    <div className="container ">
      <header className=" col-md-8 py-4 ">
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
          Shop
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
        <div
          className="card "
          style={{
            width: "1200px",
            height: "50px",
            backgroundColor: "#F9F1E7",
            top: "-2px",
          }}
        >
          <Link>
            <svg
              style={{ marginLeft: "25px", marginTop: "12px" }}
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#000000"
            >
              <path d="M202-160v-294h-82v-60h224v60h-82v294h-60Zm0-414v-226h60v226h-60Zm166-41v-60h82v-125h60v125h82v60H368Zm82 455v-395h60v395h-60Zm248 0v-127h-82v-60h224v60h-82v127h-60Zm0-247v-393h60v393h-60Z" />
            </svg>
          </Link>
          <small
            className=""
            style={{
              marginLeft: "65px",
              position: "absolute",
              marginTop: "12px",
            }}
          >
            Filter
          </small>
          <FaVectorSquare
            className=""
            style={{
              position: "absolute",
              marginLeft: "130px",
              marginTop: "15px",
              fontSize: "15px",
            }}
          />
          <LuLayoutList
            style={{
              position: "absolute",
              marginLeft: "158px",
              marginTop: "15px",
              fontSize: "15px",
            }}
          />
          <div className="container col-">
            <svg
              style={{
                marginLeft: "120px",
                rotate: "90deg",
                position: "absolute",
                top: "-2px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="38px"
              fill="#9F9F9F"
            >
              <path d="M160-780v-60h640v60H160Z" />
            </svg>
            <small
              className="col-2 lh-1"
              style={{
                marginLeft: "175px",
                bottom: "15px",
                position: "absolute",
              }}
            >
              showing 1-16 of 32 results
            </small>
            <div className="col-3  position-absolute end-0">
              <small
                className=""
                style={{ top: "-20px", position: "absolute" }}
              >
                show
              </small>
              <button
                className="btn btn-md"
                style={{
                  top: "-25px",
                  position: "absolute",
                  marginLeft: "45px",
                  backgroundColor: "white",
                  color: "#9F9F9F",
                  fontSize: "12px",
                  border: "white",
                }}
              >
                16
              </button>
              <small
                style={{
                  top: "-20px",
                  position: "absolute",
                  marginLeft: "90px",
                }}
              >
                sort by
              </small>
              <span
                style={{
                  top: "-30px",
                  position: "absolute",
                  marginLeft: "140px",
                  backgroundColor: "white",
                  padding: "5px",
                  color: "#9F9F9F",
                }}
              >
                Default
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="container  col-md-12 py-4 px-2 col-sm-4">
        <div className="row col-md-12">
          <Slider settings={settings}>
            <Product />
          </Slider>
          <div className="row  col-med-3" style={{ marginBottom: "10px" }}>
            <button
              className="col-1  rounded text-white  "
              style={{
                backgroundColor: "#B88E2F",
                border: "none",
                marginLeft: "350px",
                marginTop: "50px",
                padding: "-50px",
              }}
            >
              1
            </button>
            <button
              className="col-1 rounded"
              style={{
                backgroundColor: "#F9F1E7",
                border: "none",
                marginRight: "130px",
                marginTop: "50px",
                marginLeft: "10px",
              }}
            >
              2
            </button>
            <button
              className="col-1 rounded"
              style={{
                backgroundColor: "#F9F1E7",
                border: "none",
                marginRight: "300px",
                marginTop: "50px",
                marginLeft: "-105px",
              }}
            >
              3
            </button>
            <button
              className="col-1 rounded "
              style={{
                backgroundColor: "#F9F1E7",
                border: "none",
                marginLeft: "710px",
                marginTop: "-25px",
              }}
            >
              Next
            </button>
          </div>
          <div
            className=" card col-med-4"
            style={{
              backgroundColor: "#F9F1E7",
              marginBottom: "30px",
              marginTop: "10px",
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
              <small className="fw-medium" style={{marginLeft:"610px" ,color:"rgba(137, 137, 137, 1)",top:"40px",position:"absolute"}}>Order over 150$</small>
            </div>
           
            <div>
            <RiCustomerServiceLine className=""  style={{fontSize:"50px",marginLeft:"820px",position:"absolute",top:"20px"}}/>
<p className="fw-medium" style={{fontSize:"15px",marginLeft:"890px",position:"absolute",top:"30px"}}> 24/7 Support</p>
<small className="fw-medium" style={{fontSize:"13px",marginLeft:"890px",position:"absolute",top:"50px",color:"rgba(137, 137, 137, 1)"}}>Dedicated support</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
