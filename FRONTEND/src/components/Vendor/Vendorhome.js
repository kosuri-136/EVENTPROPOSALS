import React from "react";
import  { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";
import "./Vendorhome.css"


function VendorHome() {

  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });
 
  const {email,password} = formData
  function updateData(e,propName){
    let temp=e.target.value
    setFormData(data =>({
     ...data,[propName]:temp
    }))
    
     }
  // function updateData(e,[propName]){
  //   let temp=e.target.value
  //   setFormData(data => ({
  //     ...data,[propName]: temp
  //   }))
  // }

  async function submitted(e){
    e.preventDefault()
    // const data=new FormData(e.target)
    console.log(formData)

     
     fetch("http://localhost:9000/login",{
      method:"POST",
      headers:{"content-type":"application/json","accept":"application/json"},
      body:JSON.stringify(formData)
      
  })
  .then((res)=>res.json())
  .then((data)=>{
     localStorage.setItem('vendorToken', data.data);
     localStorage.setItem('vendorloggedIn',true);
     localStorage.setItem('vendorName', data.vendorName);
     if (data.status == "ok")
     {
      alert("login Successful")
      navigate("/VendorProposal")
     }if (data.status === "error"){
      alert(`${data.error}`)
    }
     
    console.log(data)})
  .catch((err)=>{
    console.log(err)})
   }

    return (<>
        <Home/>
        <div className="Logo">MAKE IT HAPPEN</div>
        <center>
        <div className="Textvh">"CELEBRATIONS"<br/> ARE THE WAY TO EXPRESS<br/> FEELINGS INSIDE</div>
        </center>
       
       
        <div className="form-box4vh">
          <div className="topvh">
            <p className="vendorvh">Vendor</p>
            <Link to="/User" style={{textDecoration:'none', marginTop:'15px'}}>User</Link>
          </div>

          <div className="headingvh">
            <h2>Sign in your Account</h2>
          </div>



         <div>
            <form method="post"  onSubmit={submitted}>
              <div className="inputvh">
                {" "}
                <input type="email" placeholder="Phone/Email" style={{width:'236px',height:"30px"}}   name="email" onChange={e=>updateData(e,"email")} required/>{" "}
              </div>
              <div className="inputvh">
                {" "}
                <input type="password" placeholder="Password" style={{width:'236px',height:"30px"}}  name="password"  onChange={e=>updateData(e,"password")} required />{" "}
              </div>
              <div className="forgetvh">
                {" "}
                {/* <Link to="/forgetPassword" style={{textDecoration:'none'}}>Forget Password</Link>{" "} */}
              </div>

              <div className="footervh">
                <div className="createvh">
                  {" "}
                  <Link to="/createvendoraccount" style={{textDecoration:'none'}}>Create Account</Link>{" "}
                </div>
                {/* <Link to='/VendorProposal'> */}
                <button className="buttonvh" type="submit">
                  SIGN IN
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
          </div>
    </>
  );
}

export default VendorHome;
