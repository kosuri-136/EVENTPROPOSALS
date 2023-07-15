import { useEffect, useState, navigate } from "react";
import React from "react";
import "./Proposal.css";
import { Link } from "react-router-dom";
import Proposaldetail from "./Proposaldetail";

function Proposal(props) {
  // function nextpage(props){
  //   <Proposaldetail data={props}/>
  // }

  // console.log("props : ",props);
  // const [vendor,setVendor]=useState([]);

  // const getVendordata= () =>{
  //   fetch("/vendordata",{
  //       method:"GET",
  //       crossDoamin:true,
  //       headers:{
  //           "content-type":"application/json",
  //           accept: "application/json",
  //           "Access-Control-Allow-Origin":"*",
  //       },
  //   })
  //   .then((res) => res.json())
  //     .then((data) => {
  //       setVendor(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //   useEffect(()=>{
  //     getVendordata();
  //     // if( !localStorage.getItem("vendorToken") && !localStorage.getItem("userToken")){
  //     //     navigate('/User')
  //     //   }
  // },[])
  console.log(props.data._id)

  // <div className="userproposal">
  return (
    <>
      <div className="userproposal">
        <div className="prop-img">
          <img
            src={props.data.image}
            alt="img.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Link to={`/Proposaldetail/${props.data._id}`} style={{ textDecoration: "none" }} >
          <div
            className="venname"
            style={{ margin: "0px 0px 0px 10px", fontSize: "18px" }}
          >
            {props.data.eventName}
          </div>
          <div
            className="budge"
            style={{ fontSize: "13px", margin: "0px 0px 0px 10px" }}
          >
            {props.data.budget}
          </div>
          <div
            className="locatin"
            style={{ marginLeft: "10px", fontSize: "14px" }}
          >
            {props.data.placeOfEvent}
          </div>
        </Link>
      </div>
    </>
  );
}

export default Proposal;
