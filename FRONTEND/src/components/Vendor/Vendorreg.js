import React, { useState } from "react";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Vendorreg.css"




function Vendorreg() {
  const navigate = useNavigate();

  const [regForm,setRegForm]=useState({
    name:"",
    email:"",
    contact:"",
    password:"",
    conformpassword:"",
   
  })
  const {name, email, contact,password} = regForm;
  function updateData(e,propName){
    let temp=e.target.value
    setRegForm(data =>({
     ...data,[propName]:temp
    }))
    
     }

     async function submitform(e){
     
      // const data=new FormData(e.target)
      console.log(regForm)
      e.preventDefault();
      if (regForm.password !== regForm.conformpassword)
      { alert("password and conform password not match")}

     else
       {
      
        fetch("http://localhost:9000/register",{
        method:"POST",
        crossDoamin : true,
        headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
        body:JSON.stringify(regForm)
        
    })
    .then((res)=>res.json())
    .then((data)=>{
      if (data.status == "ok")
      {
       alert("registration Successful")
       navigate("/")
      }
      if (data.status == "error"){
        alert(`${data.error}`)
      }
      console.log(data ,"VendorRegisterd")})
    
    .catch((err)=>{
      console.log(err)})
     }}
  

  return (
    <div>
      <Home />
      <div className="Logo">MAKE IT HAPPEN</div>
      <center>
      <div className="Textvr">
      "CELEBRATIONS"<br/> ARE THE WAY TO EXPRESS<br/> FEELINGS INSIDE
      </div>
      </center>
      <div className="form-box3vr">
        <div className="topvr">
          <p className="vendorvr">Vendor</p>
          <Link
            to="/User"
            style={{ textDecoration: "none", marginTop: "15px" }}
          >
            User
          </Link>
        </div>
        <div className="headingvr">
            <h2>Register in your account</h2>
          </div>



          
          <div>
            <form method="post" style={{margin:'0px 0px 0px 0px'}} onSubmit={submitform}>
                <div className="inputvr">
                    {" "}
                    <input type="text" placeholder="Name" style={{width:'236px',height:"30px"}}  onChange={e=>updateData(e,"name")} required/>
                </div>
                <div className="inputvr">
                    {" "}
                    <input type="email" placeholder="Email" style={{width:'236px',height:"30px"}} onChange={e=>updateData(e,"email")} required/>
                </div>
                <div className="inputvr">
                    {" "}
                    <input type="number" placeholder="Contact" style={{width:'236px',height:"30px"}} onChange={e=>updateData(e,"contact")} required/>
                </div>
                <div className="inputvr">
                    {" "}
                    <input type="password" placeholder="Password" style={{width:'236px',height:"30px"}} onChange={e=>updateData(e,"password")} required/>
                </div>
                <div className="inputvr">
                    {" "}
                    <input type="password" placeholder="Confirm Password" style={{width:'236px',height:"30px"}} onChange={e=>updateData(e,"conformpassword")} required/>
                </div>

                <div className="regfootervr">
                <div className="signinvr">
                  {" "}
                  <Link to="/" style={{textDecoration:'none'}}>Sign In</Link>{" "}
                </div>
                <button className="regbuttonvr" type="submit">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
      </div>
      </div>
  );
}

export default Vendorreg;
