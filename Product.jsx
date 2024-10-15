import React from "react";
import { IoEllipseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdShare } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

export function Overlay ({on,close,children}){






}







export default function Product(props) {
  return (
    <div>
        <div className="container  py-2">
      <div className="row col-med-12 py-2 "  style={{}}>
        <div
          className=" col-2 "
          style={{ width: "", margin: "15px", backgroundColor: "#F4F5F7" }}
        >
          <img
            src="Images/productone.png"
            alt="productimage"
            className=""
            style={{ width: "173px", marginLeft: "-10px", height: "160px" }}
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
          <p className=" " style={{ fontWeight: "600" ,marginTop:"25px"}}>
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
              style={{ margin: "20px", color: "#898989", marginLeft: "-10px" }}
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
          style={{ backgroundColor: "#F4F5F7", margin: "17px",opacity:"%",}}
        >
                <Link to={'/Cart'}> <button className="" style={{backgroundColor:"lightgray",position:"absolute",marginTop:"100px",marginLeft:"20px",border:"white"}}>Add to Cart</button></Link>
                <Link> <small className="text-light" style={{position:"absolute",fontSize:"xx-small",marginTop:"13%",marginLeft:"8px" }}><IoMdShare className=""  /> share</small></Link>
                <Link><small className="fw-medium  text-light" style={{position:"absolute",fontSize:"x-small",marginTop:"13%",marginLeft:"45px",marginRight:"700px"}}><IoIosGitCompare className=""  /> compare</small></Link>
                <Link><small className="fw-medium  text-light" style={{position:"absolute",fontSize:"x-small",marginTop:"13%",marginLeft:"105px",marginRight:"200px"}}> <IoMdHeart className=""  /> like</small></Link>

                
          <img

            src="Images/producttwo.png"
            alt="productimage"
            className="card-img"
            style={{ width: "172px", marginLeft: "-10px", height: "160px" }}
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
          <p className=" fw-bold" style={{marginTop:"10px"}}>Lolito</p>
          <small className="" style={{ marginTop: "px" }}>
            Luxury Big Sofa
          </small>
          <p className="" style={{ fontSize: "small", fontWeight: "500" }}>
            Rp 7.000.00{" "}
            <small
              className=""
              style={{ color: "#B0B0B0", textDecorationLine: "line-through" }}
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
            marginLeft:"20px"
          }}
        >
          <img
            src="Images/productfour.jpeg"
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
              marginLeft: "120px",fontSizeAdjust:"x-small"
             
            }}
          >
            New
          </small>
          <p className=" fw-bold" style={{marginTop:"10px"}}>Respira</p>
          <small className="col-2" style={{ marginTop: "px",fontSize:"x-small",fontWeight:"700",color:"#898989" }}>
            Outdoor tables and stables
          </small>
          <p className="" style={{ fontSize: "small", fontWeight: "500" }}>
            Rp 7.000.00
            
          </p>
        </div>
      </div>
      <div className="row col-md-12 py-4 "  style={{}}>
        <div
          className=" col-2 "
          style={{ width: "", margin: "15px", backgroundColor: "#F4F5F7" }}
        >
          <img
            src="./Images/homecardfour.png"
            alt="productimage"
            className=""
            style={{ width: "173px", marginLeft: "-10px", height: "160px" }}
          />
          
          
          <p className=" " style={{ fontWeight: "600" ,marginTop:"25px"}}>
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
              style={{ margin: "20px", color: "#898989", marginLeft: "-65px" }}
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
            style={{ width: "170px", marginTop: "px", height: "160px" ,marginLeft:"-10px"}}
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
              marginLeft: "120px",fontSizeAdjust:"x-small"
             
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
          <p className=" fw-bold" style={{marginTop:"10px"}}>Pingky</p>
          <small className="" style={{ marginTop: "px" }}>
            Cute set bed
          </small>
          <p className="" style={{ fontSize: "small", fontWeight: "500" }}>
            Rp 7.000.00{" "}
            <small
              className=""
              style={{ color: "#B0B0B0", textDecorationLine: "line-through" }}
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
            marginLeft:"20px"
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
              marginLeft: "120px",fontSizeAdjust:"x-small"
             
            }}
          >
            New
          </small>
          <p className=" fw-bold" style={{marginTop:"10px"}}>Potty</p>
          <small className="col-2" style={{ marginTop: "px",fontSize:"x-small",fontWeight:"700",color:"#898989" }}>
            Bed set leather 
          </small>
          <p className="" style={{ fontSize: "small", fontWeight: "500" }}>
            Rp 7.000.00
            
          </p>
        </div>
      
           
      </div>
      </div>
    </div>
  );
}
