import React from "react";
import "./Userprop.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserNav() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userloggedIn");
    navigate("/User");
  };
  return (
    <div className="nav">
      <div className="venlogo">
        <b>MAKE IT HAPPEN</b>
      </div>
      <div className="name">
        <b>{localStorage.getItem("userName")}</b>
      </div>
      <div >
      
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

export default UserNav;