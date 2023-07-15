import React from "react";
import "./VendorProp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  // console.log(props)
  const navigate = useNavigate();
  const logout=()=> {
    localStorage.removeItem('vendorToken');
    localStorage.removeItem('vendorloggedIn');
    navigate('/')
  
   }
  return (
    <div className="nav">
      <div className="venlogo">
        <b>MAKE IT HAPPEN</b>
      </div>
      <div className="name">
        <b>{localStorage.getItem("vendorName")}</b>
      </div>
      <div >
        <div ></div>
      
        <div >
        <Link onClick={logout} to="/User">  <button   style={{
                      width: "93px",
                      height: "32px",
                      background: "red",
                      borderradius: "8px",
                      opacity: "1",
                      color: "#ffffff",
                      border: "none",
                      marginLeft:"750px" ,
                      marginTop:"17px",
                      textDecoration:"none", 
                       }}> Log Out</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
