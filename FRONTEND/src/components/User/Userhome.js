import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import { useNavigate } from "react-router-dom";
import "./Userhome.css";

function Userhome() {

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
  
  async function submitted(e){
    e.preventDefault()
    // const data=new FormData(e.target)
    console.log(formData)

     
     fetch("http://localhost:9000/user/login",{
      method:"POST",
      headers:{"content-type":"application/json","accept":"application/json"},
      body:JSON.stringify(formData)
      
  })
  .then((res)=>res.json())
  .then((data)=>{
     localStorage.setItem('userToken', data.data);
     localStorage.setItem('userloggedIn',true);
     localStorage.setItem('userName', data.userName);
     if (data.status == "ok")
     {
      alert("login Successful")
      navigate('/Userproposals')
     }if (data.status == "error"){
      alert(`${data.error}`)
    }
     
    console.log(data)})
  .catch((err)=>{
    console.log(err)})
   }
  return (
    <div>
        <Home/>
        <div className="Logo">MAKE IT HAPPEN</div>
        
        <center>
      <div className="Textuh">
      "CELEBRATIONS"<br/> ARE THE WAY TO EXPRESS<br/> FEELINGS INSIDE
      </div>
      </center>
       
        
        
        <div className="form-box1uh">
          <div className="topuh">
          <Link to="/" style={{textDecoration:'none', marginTop:'15px'}}>Vendor</Link>
            <p style={{}}>User</p>
          </div>

          <div className="headinguh">
            <h2>Sign in your Account</h2>
          </div>



        <div>
            <form method="post"  onSubmit={submitted}>
              <div className="inputuh">
                {" "}
                <input type="name"  style={{width:'246px',height:"30px"}}  placeholder="Phone/Email"  name="email" onChange={e=>updateData(e,"email")} required/>{" "}
              </div>
              <div className="inputuh">
                {" "}
                <input type="password"  style={{width:'246px',height:"30px"}} placeholder="Password"   name="password"  onChange={e=>updateData(e,"password")} required/>{" "}
              </div>
              <div className="forgetuh">
                {" "}
                {/* <Link to="/forgetPassword"    style={{textDecoration:'none'}}>Forget Password</Link> */}
              </div>

              <div className="footeruh">
                <div className="createuh">
                  {" "}
                  <Link to="/createuseraccount" style={{textDecoration:'none'}}>Create Account</Link>
                </div>
                  
                   {/* style={{textDecoration:'none',color:'white'}} */}
                <button className="buttonuh" type="submit">SIGN IN
                </button>
                  
              </div>
            </form>
          </div>
        </div>
        </div>
  
  )
  }

export default Userhome





 