import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { FaSquare } from "react-icons/fa";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoEllipseSharp } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

export default function About() {
  return (
    <div className="" style={{ opacity: "%" }}>
      <div className="container  py-2  ">
        <div className="py-2" style={{ backgroundColor: "#F9F1E8" }}>
          <div className="py-5">
            <small
              style={{
                position: "absolute",
                color: "#9F9F9F",
                top: "80px",
                marginLeft: "20px",
                opacity: "unset",
                fontFeatureSettings: "inherit",
              }}
            >
              Home <span className="text-dark fw-medium m-1">></span>shop
              <span className="text-dark fw-medium m-1">></span>
              <svg
                style={{
                  marginLeft: "-28px",
                  rotate: "90deg",
                  position: "absolute",
                  top: "-8px",
                  fontWeight: "lighter",
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="42px"
                fill="#9F9F9F"
              >
                <path d="M160-780v-60h640v60H160Z" />
              </svg>
              <span
                className=" text-dark fw-medium"
                style={{ marginLeft: "25px", top: "-8px" }}
              >
                Asgarda Sofa
              </span>
            </small>
          </div>
        </div>
        <div className="container col-med-6">
          <div className="row">
            <div className="col-1">
              <img
                className="col-1"
                src="Images/out.png"
                alt=""
                style={{
                  width: "50px",
                  backgroundColor: "#F9F1E7",
                  marginTop: "20px",
                }}
              />
              <img
                className="col-1"
                src="Images/outtwo.png"
                alt=""
                style={{
                  width: "50px",
                  backgroundColor: "#F9F1E7",
                  marginTop: "20px",
                }}
              />
              <img
                className="col-1"
                src="Images/outthree.png"
                alt=""
                style={{
                  width: "50px",
                  backgroundColor: "#F9F1E7",
                  marginTop: "20px",
                  height: "40px",
                  top: "-2px",
                }}
              />
              <img
                className="col-1"
                src="Images/outfourpng.png"
                alt=""
                style={{
                  width: "50px",
                  backgroundColor: "#F9F1E7",
                  marginTop: "20px",
                }}
              />
            </div>
            <div
              className="col-med-3  py-2 mx-2"
              style={{ backgroundColor: "" }}
            >
              <img
                className="col-med-2"
                src="Images/firstproducttwoclick.png"
                style={{
                  width: "230px",
                  position: "absolute",
                  top: "150px",
                  marginLeft: "100px",
                  backgroundColor: "#F9F1E7",
                  height: "200px",
                }}
                alt=""
              />
            </div>
          </div>
          <div
            className="col-med-4 "
            style={{ position: "absolute", marginLeft: "500px", top: "150px" }}
          >
            <h5>Asgarda sofa</h5>
            <small
              className=""
              style={{
                color: "#9F9F9F",
                marginLeft: "10px",
                fontWeight: "500",
                marginTop: "-50px",
                paddingBottom: "80px",
                marginRight: "50px",
              }}
            >
              Rs 250.000.00
            </small>
          </div>
          <span
            className="d-flex"
            style={{
              marginTop: "-145px",
              position: "absolute",
              marginLeft: "510px",
              color: "gold",
            }}
          >
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </span>
          <span>
            <svg
              style={{
                marginLeft: "580px",
                rotate: "90deg",
                position: "absolute",
                top: "190px",
                fontWeight: "10px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#9F9F9F"
              className=""
            >
              <path d="M160-780v-60h640v60H160Z" />
            </svg>
            <small
              className="fw-medium"
              style={{
                color: "#9F9F9F",
                marginLeft: "610px",
                fontSize: "12px",
                marginTop: "-150px",
                position: "absolute",
              }}
            >
              5 customer reviews
            </small>
            <small
              className="col-3 fw-medium"
              style={{
                position: "absolute",
                marginLeft: "510px",
                top: "230px",
                fontSize: "11px",
              }}
            >
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </small>
            <div className="col-2">
              <small
                className="fw-medium"
                style={{
                  fontSize: "10",
                  color: "#9F9F9F",
                  marginLeft: "510px",
                  marginTop: "-4%",
                  position: "absolute",
                }}
              >
                size
              </small>
              <span
                className="d-flex"
                style={{
                  fontSize: "10",
                  color: "",
                  marginLeft: "510px",
                  marginTop: "-2.5%",
                  position: "absolute",
                }}
              >
                <FaSquare
                  className=""
                  style={{ color: "#B88E2F", fontSize: "28px" }}
                  role="button"
                />
                <small
                  className="text-light "
                  style={{
                    position: "absolute",
                    marginLeft: "12px",
                    fontSize: "16px",
                  }}
                >
                  L
                </small>

                <FaSquare
                  style={{
                    position: "absolute",
                    marginLeft: "55px",

                    color: "#F9F1E7",
                    fontSize: "28px",
                  }}
                />
                <small
                  className="text-dark "
                  style={{
                    position: "absolute",
                    marginLeft: "65px",
                    fontSize: "15px",
                  }}
                >
                  xs
                </small>
                <FaSquare
                  style={{
                    color: "#F9F1E7",
                    fontSize: "28px",
                    marginRight: "30px",
                  }}
                  role="button"
                />
                <small
                  className="text-dark "
                  style={{
                    position: "absolute",
                    marginLeft: "35px",
                    fontSize: "15px",
                  }}
                >
                  xl
                </small>
              </span>
              <span>
                <small
                  className="fw-medium"
                  style={{
                    fontSize: "10",
                    color: "#9F9F9F",
                    marginLeft: "510px",
                    marginTop: "0.5%",
                    position: "absolute",
                  }}
                >
                  Color
                </small>
                <span
                  style={{
                    marginLeft: "510px",
                    marginTop: "25px",
                    position: "absolute",
                  }}
                >
                  <VscCircleLargeFilled
                    className=""
                    style={{ color: "#816DFA", fontSize: "20px" }}
                  />
                  <VscCircleLargeFilled
                    className=""
                    style={{ color: "#000000", fontSize: "20px" }}
                  />
                  <VscCircleLargeFilled
                    style={{ color: "#B88E2F", fontSize: "20px" }}
                  />
                </span>
              </span>
            </div>
          </span>
          <span
            className="d-flex"
            style={{ marginLeft: "510px", marginTop: "30px" }}
          >
            <button
              className=" rounded "
              style={{
                marginTop: "40px",
                background: "none",
                paddingRight: "8px",
                marginRight: "20px",
              }}
            >
              -1+
            </button>
            <Link to={""}>
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                className=" rounded "
                style={{
                  marginTop: "40px",
                  background: "none",
                  paddingRight: "8px",
                  marginRight: "20px",
                }}
              >
                Add to Cart
                <div
                  className="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  tabindex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                  style={{ height: "500px" }}
                >
                  <div className="offcanvas-header">
                    <h5
                      class="offcanvas-title"
                      id="offcanvasWithBothOptionsLabel"
                    >
                    
                    </h5>
                  </div>
                  <div
                    class="offcanvas-body"
                    style={{ backgroundColor: "white" }}
                  >
                    <h6>
                      shopping cart <CiLock className="text-secondary m-2" />
                    </h6>
                    <hr />
                    <div className="col- d-flex">
                      <img
                        className="col-1"
                        src="Images/out.png"
                        alt=""
                        style={{
                          width: "80px",
                          backgroundColor: "#F9F1E7",
                          marginTop: "20px",
                          marginLeft: "1px",
                        }}
                      />

                      <div className="d-flex col-7">
                        <small
                          className="col-2 "
                          style={{
                            marginLeft: "20px",
                            fontSize: "12px",
                            marginTop: "30px",
                            position: "absolute",
                          }}
                        >
                          Asgarda sofa{" "}
                        </small>
                        <p
                          className="fw-medium col-2"
                          style={{
                            marginLeft: "90px",
                            fontSize: "12px",
                            marginTop: "30px",
                          }}
                        >
                          1x
                          <span
                            className=""
                            style={{
                              color: "#B88E2F",
                              position: "absolute",
                              marginLeft: "10px",
                            }}
                          >
                            Rp 250.000.0
                          </span>
                          <IoMdCloseCircle
                            style={{
                              position: "absolute",
                              marginLeft: "160px",
                              fontSize: "20px",
                              color: "lightgrey",
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col- d-flex">
                      <img
                        className="col-1"
                        src="Images/shoppingcart.jpeg"
                        alt=""
                        style={{
                          width: "80px",
                          backgroundColor: "#F9F1E7",
                          marginTop: "20px",
                          marginLeft: "1px",
                        }}
                      />

                      <div className="d-flex col-7">
                        <small
                          className="col-2 "
                          style={{
                            marginLeft: "20px",
                            fontSize: "12px",
                            marginTop: "30px",
                            position: "absolute",
                          }}
                        >
                          Casaliving Wood
                        </small>
                        <p
                          className="fw-medium col-2"
                          style={{
                            marginLeft: "90px",
                            fontSize: "12px",
                            marginTop: "30px",
                          }}
                        >
                          1x
                          <span
                            className=""
                            style={{
                              color: "#B88E2F",
                              position: "absolute",
                              marginLeft: "10px",
                            }}
                          >
                            Rp 250.000.0
                          </span>
                          <IoMdCloseCircle
                            style={{
                              position: "absolute",
                              marginLeft: "160px",
                              fontSize: "20px",
                              color: "lightgrey",
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    <p
                      style={{
                        top: "305px",
                        position: "absolute",
                        marginLeft: "30px",
                        fontWeight: "inherit",
                      }}
                    >
                   
                      subtotal
                      <small
                        className="fw-medium"
                        style={{
                          color: "#B88E2F",
                          position: "absolute",
                          marginLeft: "80px",
                        }}
                      >
                        Rp520.000
                      </small>
                    </p>
                   
                  </div>
                  <hr style={{marginBottom:"55px"}}/>
                  <div className="m-4" style={{}}>
                    <Link  to={'/Cart'}><button className=" btn bg-none border border-dark rounded-pill" style={{marginLeft:"-5px"}}>Cart</button></Link>
                    <button className=" btn bg-none border  border-dark m-2 rounded-pill">checkout</button>
                    <button className=" btn bg-none border   border-dark m-2 rounded-pill">comparision</button>
                  </div>
                </div>
              </button>
            </Link>
            <button
              className=" rounded "
              style={{
                marginTop: "40px",
                background: "none",
                paddingRight: "8px",
                marginRight: "20px",
              }}
            >
              + compare
            </button>
          </span>
          <hr style={{ maxWidth: "400px", marginLeft: "510px" }} />
          <span
            className=""
            style={{ marginLeft: "520px", paddingBottom: "100px" }}
          >
            <small style={{ color: "#9F9F9F" }}>SKU : SS001</small>
            <br />
            <small style={{ color: "#9F9F9F", marginLeft: "520px" }}>
              Category : sofa{" "}
            </small>
            <br />
            <small
              style={{
                color: "#9F9F9F",
                marginLeft: "520px",
                justifyContent: "space-between",
              }}
            >
              share : <FaFacebook className="text-dark m-1" />
              <FaLinkedin className="text-dark m-1" />
              <AiFillTwitterCircle className="text-dark m-1" />
            </small>
          </span>
        </div>
        <hr />
        <div className="container py-4  px-4  ">
          <div className="d-flex   col-med-4" style={{}}>
            <p className="fw-medium " style={{ marginLeft: "220px" }}>
              Description
            </p>
            <p className="mx-4" style={{ color: "#9F9F9F" }}>
              Additional information
            </p>
            <p className="mx-2" style={{ color: "#9F9F9F" }}>
              Reviw[5]
            </p>
          </div>
          <p
            className="col-6"
            style={{ color: "#9F9F9F", marginLeft: "190px", fontSize: "13px" }}
          >
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p
            style={{ color: "#9F9F9F", marginLeft: "195px", fontSize: "13px" }}
            className="col-7"
          >
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="" style={{ marginLeft: "120px" }}>
            <img
              src="Images/des1.png"
              alt=""
              className="col-med-3 m-1"
              style={{ width: "350px", backgroundColor: "#F9F1E7" }}
            />
            <img
              src="Images/des2.png"
              alt=""
              className="col-med-3 m-2"
              style={{ width: "350px", backgroundColor: "#F9F1E7" }}
            />
          </div>
          <hr />
          <div className="container py-4 col-med-7">
            <h4 className="text-center">Related products</h4>

            <div
              className="row col-md-12 py-4 "
              style={{ marginLeft: "100px" }}
            >
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
                    width: "173px",
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
                    width: "170px",
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
                    width: "172px",
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
                    width: "172px",
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
              <Link to={"/Shop"}>
                <button
                  className=" btn btn-sm bg-none col-1  "
                  style={{
                    borderColor: "rgba(184, 142, 47, 1)",
                    position: "absolute",
                    marginLeft: "25%",
                    color: "rgba(184, 142, 47, 1)",
                    marginTop: "30px",
                  }}
                >
                  show more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
