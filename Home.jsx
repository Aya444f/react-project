import React from "react";
import style from "./Home.module.css";
import { IoEllipseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdShare } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";





export default function Home() {
  return (
    <div>
      <header>
        <img
          src="Images/pheader.jpeg"
          alt="headerphoto"
          className={`${style.size}`}
        />

        <div
          className=" card "
          style={{
            backgroundColor: "#FFF3E3",
            position: "absolute",
            top: "500px ",
            left: "739px",
            width: "443px",
            height: "270px",
          }}
        >
          <small className=" m-2 fw-medium">New Arrival </small>
          <h1
            className=""
            style={{
              fontWeight: "1050px",
              color: "#B88E2F",
              width: "500px",
              height: "120px",
              top: "340px",
              paddingLeft: "10px",
              marginRight: "60px",
            }}
          >
            Discover Our New Collection
          </h1>
          <p
            className=""
            style={{
              width: "400px",
              height: "52px",
              top: " 150px",
              marginLeft: "10px",

              lineHeight: "24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button
            className="rounded"
            style={{
              backgroundColor: "#B88E2F",
              width: "100px",
              height: "",
              top: "500px",
              left: "778px",
              padding: "8px",
              marginLeft: "30px",
              marginBottom: "50px",
              gap: "10px",
              opacity: "0px",
              border: "#B88E2F",
              color: "white",
            }}
          >
            Buy Now
          </button>
        </div>
      </header>
      <div className="container  py-4">
        <div className="row col-md-12 ">
          <div style={{ marginLeft: "295px" }}>
            <h2 className="" style={{ marginLeft: "40px" }}>
              Brows The Range
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-2">
            <img
              className="rounded"
              src="Images/fcardh.png"
              alt="first"
              style={{
                width: "280px",
                height: "330px",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            />
            <p
              className="fw-medium   "
              style={{
                width: "79px",
                height: " 30px",
                top: "1500px",
                marginTop: "20px",
                marginLeft: " 150px",
                gap: "0px",
                opacity: "0px",
              }}
            >
              Dining
            </p>
          </div>
          <div className="col-2">
            <img
              src="Images/living.png"
              alt="living"
              style={{
                width: "270px",
                height: "330px",
                marginLeft: "140px",
                marginTop: "20px",
              }}
              className="rounded"
            />
            <p
              className="fw-medium"
              style={{
                width: "71px",
                height: "40px",
                top: "1520px",
                marginLeft: "270px",
                marginTop: "20px",
                gap: "0px",
                opacity: "0px",
              }}
            >
              Living
            </p>
          </div>
          <div className="col-2 " style={{}}>
            <img
              className="rounded"
              src="Images/bedroom.png"
              alt="bedroom"
              style={{
                width: "290px",
                height: "330px",
                marginLeft: "250px",
                marginTop: "20px",
              }}
            />
            <p
              className="fw-medium"
              style={{
                width: "71px",
                height: "40px",
                top: "1520px",
                marginLeft: "350px",
                marginTop: "20px",
                gap: "0px",
                opacity: "0px",
              }}
            >
              Bedroom
            </p>
          </div>
          <div className="container py-4 ">
            <div className="row py-6 col-med-12">
              <h3 className=" text-center fw-bold" style={{}}>
                Our Products{" "}
              </h3>
              <div
                className=" col-2 "
                style={{
                  width: "",
                  margin: "15px",
                  backgroundColor: "#F4F5F7",
                }}
              >
                <img
                  src="Images/productone.png"
                  alt="productimage"
                  className=""
                  style={{
                    width: "173px",
                    marginLeft: "-10px",
                    height: "160px",
                  }}
                />
                <IoEllipseSharp
                  className=""
                  style={{
                    color: "#E97171",
                    fontSize: "50px",
                    position: "absolute",
                    marginTop: "-150px",
                    marginLeft: "110px",
                  }}
                />
                <small
                  style={{
                    color: "white",
                    fontSize: "17px",
                    position: "absolute",
                    marginTop: "-140px",
                    marginLeft: "120px",
                  }}
                >
                  30%
                </small>
                <p
                  className=" "
                  style={{ fontWeight: "600", marginTop: "25px" }}
                >
                  Syltherine
                </p>
                <small
                  className=" col-2 "
                  style={{ lineHeight: "1px", marginRight: "30px" }}
                >
                  Stylish cafe chaiar
                </small>
                <br />
                <div
                  className=""
                  style={{ marginBottom: "15px", textAlign: "center" }}
                >
                  <small
                    className="col-2"
                    style={{
                      margin: "20px",
                      color: "#898989",
                      marginLeft: "-10px",
                    }}
                  >
                    Rp2.500.00
                    <small
                      className=""
                      style={{
                        color: "#898989",
                        marginLeft: "8px",
                        fontWeight: "500",
                        textDecorationLine: "line-through",
                      }}
                    >
                      Rp 3.500.00
                    </small>
                  </small>
                </div>
              </div>
              <div
                className=" col-2"
                style={{
                  backgroundColor: "#F4F5F7",
                  margin: "17px",
                  opacity: "%",
                }}
              >
                <Link to={"/About"}>
                  <button
                    className="btn "
                    style={{
                      backgroundColor: "biege",
                      position: "absolute",
                      marginTop: "100px",
                      marginLeft: "20px",
                      border: "white",
                    }}
                  >
                    Add to Cart
                  </button>
                </Link>
                <Link>
                  {" "}
                  <small
                    className="text-dark"
                    style={{
                      position: "absolute",
                      fontSize: "xx-small",
                      marginTop: "10.95%",
                      marginLeft: "8px",
                    }}
                  >
                    <IoMdShare className=" text-dark m-" /> share
                  </small>
                </Link>
                <Link>
                  <small
                    className="fw-medium  text-dark"
                    style={{
                      position: "absolute",
                      fontSize: "x-small",
                      marginTop: "11%",
                      marginLeft: "45px",
                      marginRight: "700px",
                    }}
                  >
                    <IoIosGitCompare className="text-dark" /> compare
                  </small>
                </Link>
                <Link>
                  <small
                    className="fw-medium  text-dark"
                    style={{
                      position: "absolute",
                      fontSize: "x-small",
                      marginTop: "11%",
                      marginLeft: "105px",
                      marginRight: "200px",
                    }}
                  >
                    {" "}
                    <IoMdHeart className="text-dark" /> like
                  </small>
                </Link>

                <img
                  src="Images/firstproducttwoclick.png"
                  alt="productimage"
                  className="card-img"
                  style={{
                    width: "182px",
                    marginLeft: "-10px",
                    height: "160px",
                  }}
                />

                <div className="" style={{ marginTop: "25px" }}>
                  <p className="" style={{ fontWeight: "600" }}>
                    Leviosa
                  </p>
                  <small className="col-2 fw-medium">Luxury sofa group</small>
                  <br />
                  <small className="col-2 fw-medium">Rs 25.000.00</small>
                </div>
              </div>
              <div
                className=" col-2 "
                style={{
                  backgroundColor: "#F4F5F7",
                  marginTop: "20px",
                  marginBottom: "15px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <img
                  src="Images/productfour.jpeg"
                  alt="productimage"
                  className=""
                  style={{
                    width: "182px",
                    height: "170px",
                    flexShrink: "5",
                    marginLeft: "-10px",
                    marginTop: "px",
                  }}
                />

                <IoEllipseSharp
                  className=""
                  style={{
                    color: "#2EC1AC",
                    fontSize: "50px",
                    position: "absolute",
                    marginTop: "-170px",
                    marginLeft: "-105px",
                  }}
                />
                <small
                  style={{
                    color: "white",
                    fontSize: "17px",
                    position: "absolute",
                    marginTop: "-160px",
                    marginLeft: "-95px",
                    fontSizeAdjust: "x-small",
                  }}
                >
                  New
                </small>
                <p className=" fw-bold" style={{ marginTop: "10px" }}>
                  Respira
                </p>
                <small
                  className="col-2"
                  style={{
                    marginTop: "px",
                    fontSize: "x-small",
                    fontWeight: "700",
                    color: "#898989",
                  }}
                >
                  Outdoor tables and stables
                </small>
                <p
                  className=""
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Rp 7.000.00
                </p>
              </div>
              <div
                className=" col-2"
                style={{
                  backgroundColor: "#F4F5F7",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                <img
                  src="Images/productthreep.png"
                  alt="productimage"
                  className=""
                  style={{
                    width: "182px",
                    height: "170px",
                    flexShrink: "5",
                    marginLeft: "-10px",
                    marginTop: "px",
                  }}
                />
                <IoEllipseSharp
                  className=""
                  style={{
                    color: "#E97171",
                    fontSize: "50px",
                    position: "absolute",
                    marginTop: "-170px",
                    marginLeft: "110px",
                  }}
                />
                <small
                  style={{
                    color: "white",
                    fontSize: "17px",
                    position: "absolute",
                    marginTop: "-160px",
                    marginLeft: "120px",
                  }}
                >
                  50%
                </small>
                <p className=" fw-bold" style={{ marginTop: "10px" }}>
                  Lolito
                </p>
                <small className="" style={{ marginTop: "px" }}>
                  Luxury Big Sofa
                </small>
                <p
                  className=""
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Rp 7.000.00{" "}
                  <small
                    className=""
                    style={{
                      color: "#B0B0B0",
                      textDecorationLine: "line-through",
                    }}
                  >
                    Rp 14.000.00
                  </small>
                </p>
              </div>
            </div>

            <div className="row col-md-12 py-4 " style={{}}>
              <div
                className=" col-2 "
                style={{
                  width: "",
                  margin: "15px",
                  backgroundColor: "#F4F5F7",
                }}
              >
                <img
                  src="./Images/homecardfour.png"
                  alt="productimage"
                  className=""
                  style={{
                    width: "178px",
                    marginLeft: "-10px",
                    height: "160px",
                  }}
                />

                <p
                  className=" "
                  style={{ fontWeight: "600", marginTop: "25px" }}
                >
                  Grifo
                </p>
                <small
                  className=" col-2 "
                  style={{ lineHeight: "1px", marginRight: "30px" }}
                >
                  Night lamp
                </small>
                <br />
                <div
                  className=""
                  style={{ marginBottom: "15px", textAlign: "center" }}
                >
                  <small
                    className="col-2"
                    style={{
                      margin: "20px",
                      color: "#898989",
                      marginLeft: "-65px",
                    }}
                  >
                    Rp1.500.00
                  </small>
                </div>
              </div>
              <div
                className=" col-2"
                style={{ backgroundColor: "#F4F5F7", margin: "17px" }}
              >
                <img
                  src="Images/homecardthree.png"
                  alt="productimage"
                  className="card-img"
                  style={{
                    width: "180px",
                    marginTop: "px",
                    height: "160px",
                    marginLeft: "-10px",
                  }}
                />

                <IoEllipseSharp
                  className=""
                  style={{
                    color: "#2EC1AC",
                    fontSize: "50px",
                    position: "absolute",
                    marginTop: "-150px",
                    marginLeft: "110px",
                  }}
                />
                <small
                  style={{
                    color: "white",
                    fontSize: "17px",
                    position: "absolute",
                    marginTop: "-140px",
                    marginLeft: "120px",
                    fontSizeAdjust: "x-small",
                  }}
                >
                  New
                </small>
                <div className="" style={{ marginTop: "25px" }}>
                  <p className="" style={{ fontWeight: "600" }}>
                    Muggo
                  </p>
                  <small className="col-2 fw-medium">L-Sofa living</small>
                  <br />
                  <small className="col-2 fw-medium">Rs 25.000.00</small>
                </div>
              </div>
              <div
                className=" col-2"
                style={{
                  backgroundColor: "#F4F5F7",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                <img
                  src="Images/homecardtwo.jpeg"
                  alt="productimage"
                  className=""
                  style={{
                    width: "177px",
                    height: "170px",
                    flexShrink: "5",
                    marginLeft: "-10px",
                    marginTop: "px",
                  }}
                />
                <IoEllipseSharp
                  className=""
                  style={{
                    color: "#E97171",
                    fontSize: "50px",
                    position: "absolute",
                    marginTop: "-170px",
                    marginLeft: "110px",
                  }}
                />
                <small
                  style={{
                    color: "white",
                    fontSize: "17px",
                    position: "absolute",
                    marginTop: "-160px",
                    marginLeft: "120px",
                  }}
                >
                  50%
                </small>
                <p className=" fw-bold" style={{ marginTop: "10px" }}>
                  Pingky
                </p>
                <small className="" style={{ marginTop: "px" }}>
                  Cute set bed
                </small>
                <p
                  className=""
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Rp 7.000.00{" "}
                  <small
                    className=""
                    style={{
                      color: "#B0B0B0",
                      textDecorationLine: "line-through",
                    }}
                  >
                    Rp 14.000.00
                  </small>
                </p>
              </div>
              <div
                className=" col-2"
                style={{
                  backgroundColor: "#F4F5F7",
                  marginTop: "20px",

                  marginBottom: "15px",
                  marginLeft: "20px",
                }}
              >
                <img
                  src="Images/homecardone.jpeg"
                  alt="productimage"
                  className=""
                  style={{
                    width: "178px",
                    height: "170px",
                    flexShrink: "5",
                    marginLeft: "-10px",
                    marginTop: "px",
                  }}
                />

                <IoEllipseSharp
                  className=""
                  style={{
                    color: "#2EC1AC",
                    fontSize: "50px",
                    position: "absolute",
                    marginTop: "-170px",
                    marginLeft: "110px",
                  }}
                />
                <small
                  style={{
                    color: "white",
                    fontSize: "17px",
                    position: "absolute",
                    marginTop: "-160px",
                    marginLeft: "120px",
                    fontSizeAdjust: "x-small",
                  }}
                >
                  New
                </small>
                <p className=" fw-bold" style={{ marginTop: "10px" }}>
                  Potty
                </p>
                <small
                  className="col-2"
                  style={{
                    marginTop: "px",
                    fontSize: "x-small",
                    fontWeight: "700",
                    color: "#898989",
                  }}
                >
                  Bed set leather
                </small>
                <p
                  className=""
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Rp 7.000.00
                </p>
              </div>
            </div>
            <Link to={"/Shop"}>
              <button
                className=" btn btn-sm bg-none col-1  "
                style={{
                  borderColor: "rgba(184, 142, 47, 1)",
                  position: "absolute",
                  marginLeft: "40%",
                  color: "rgba(184, 142, 47, 1)",
                }}
              >
                show more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container  py-6 col-med-6">
        <div
          className="card"
          style={{ backgroundColor: "rgba(252, 248, 243, 1)" }}
        >
          <div
            className="col-1"
            style={{
              fontWeight: "800",
              marginLeft: "50px",
              width: "120px",
              height: "106px",
              padding: "",
            }}
          >
            <h5 style={{ height: "46px" }}>50+ Beautiful rooms inspiration</h5>
          </div>
          <small
            className="col-3 fw-medium"
            style={{
              marginLeft: "50px",
              marginRight: "380px",
              fontSize: "12px",
              color: "rgba(97, 97, 96, 1)",
              marginTop: "100px",
            }}
          >
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </small>
          <button
            className="col-1  text-light"
            style={{
              fontSize: "13px",
              backgroundColor: "rgba(184, 142, 47, 1)",
              border: "none",
              marginLeft: "55px",
              padding: "5px",
              marginBottom: "30px",
              marginTop: "20px",
            }}
          >
            Explore more
          </button>
          <div className="col-med-6 " style={{ marginBottom: "100px" }}>
            <div>
              <img
                className="col-2"
                style={{
                  position: "absolute",
                  marginLeft: "320px",
                  top: "10px",
                  width: "250px",
                  marginBottom: "120px",
                }}
                src="Images/homethree.png"
                alt="phothome"
              />
              <div
                className="col-med-2"
                style={{
                  backgroundColor: "white",
                  position: "absolute",
                  marginLeft: "340px",
                  top: "290px",
                }}
              >
                <small className="m-1">01-Bedroom</small>
                <p className=" fw-medium m-2" style={{}}>
                  Inner Peace
                </p>
              </div>
              <button
                className="text-light "
                style={{
                  backgroundColor: "rgba(184, 142, 47, 1)",
                  border: "none",
                  marginLeft: "440px",
                  position: "absolute",
                  marginTop: "9px",
                  fontSize: "smaller",
                }}
              >
                <FaLongArrowAltRight />
              </button>
              <img
                src="Images/hometwo.png"
                alt="homtwo"
                className="col-2"
                style={{
                  position: "absolute",
                  marginLeft: "590px",
                  top: "10px",
                  width: "290px",
                  height: "250px",
                  marginRight: "60px",
                }}
              />
              <button
                className="border "
                style={{
                  position: "absolute",
                  marginLeft: "600px",
                  backgroundColor: "rgba(252, 248, 243, 1)",
                  borderColor: "rgba(252, 248, 243, 1)",
                  fontSize: "10px",
                  fontWeight: "x-small",
                }}
              >
                <IoEllipse
                  className="border "
                  style={{
                    color: "rgba(184, 142, 47, 1)",
                    borderColor: "rgba(184, 142, 47, 1)",
                    borderRadius: "20px",
                    fontWeight: "x-small",
                  }}
                />
                <IoEllipse
                  style={{
                    color: "lightgrey",
                    borderColor: "rgba(184, 142, 47, 1)",
                    borderCollapse: "collapse",
                    fontWeight: "x-small",
                  }}
                />
                <IoEllipse
                  style={{
                    color: "lightgrey",
                    borderColor: "rgba(184, 142, 47, 1)",
                    borderCollapse: "collapse",
                    fontWeight: "x-small",
                  }}
                />
                <IoEllipse
                  style={{
                    color: "lightgrey",
                    borderColor: "rgba(184, 142, 47, 1)",
                    borderCollapse: "collapse",
                    fontWeight: "x-small",
                  }}
                />
              </button>

              <img
                src="Images/homeone.png"
                alt="hoone"
                className="col-1"
                style={{
                  position: "absolute",
                  marginLeft: "800px",
                  top: "10px",
                  width: "60px",
                  height: "412PX",
                  flexShrink: "4",
                  right: "-1px",
                  justifyItems: "end",
                }}
              />
            </div>
          </div>
        </div>
        <div className="container  py-2 px- m-4 col col-med-8">
          <div className="text-center m-2">
            <small className="text-secondary fw-medium">
              share your setup with
            </small>
            <h4 className="fw-bold">#Furniro furniture</h4>
          </div>
          <img
            src="Images/endhomeone.png"
            alt="enhoone"
            className=""
            style={{ width: "50px", height: "220px", left: "-1500px" }}
          />
          <img
            className="col-2 m-2"
            src="Images/endhometwo.png"
            alt="endtwo"
            style={{ postition: "", width: "260px", height: "170px" }}
          />
          <img
            className="col-2"
            style={{ height: "210px", width: "180px", marginTop: "80px" }}
            src="Images/homeendthree.png"
            alt="endthree"
          />
          <img
            className="col-2 m-2"
            style={{ height: "180px", width: "170px", top: "-350px" }}
            src="Images/endhomefour.png"
            alt="endfour"
          />
          <img
            src="Images/homeendfivepng.png"
            alt=""
            className="col-1 "
            style={{
              width: "150px",
              height: "220px",
              marginLeft: "20px",
              marginTop: "-60px",
            }}
          />
          <div className="" style={{}}>
            <img
              src="Images/homeendsix.png"
              alt="endsix"
              className="col-1"
              style={{ marginTop: "-40px", width: "100px", height: "180px" }}
            />
            <img
              src="Images/homeendseven.png"
              alt="homeseven"
              className="col-2"
              style={{
                marginLeft: "10px",
                marginTop: "-120px",
                width: "200px",
              }}
            />
            <img
              className="col-1"
              src="Images/homeendnine.png"
              alt=""
              style={{ marginLeft: "210px", marginTop: "-100px" }}
            />
            <img
              className="col-1"
              src="Images/endhometen.png"
              alt=""
              style={{
                marginLeft: "620px",
                marginTop: "-280px",
                width: "150px",
                height: "120px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
