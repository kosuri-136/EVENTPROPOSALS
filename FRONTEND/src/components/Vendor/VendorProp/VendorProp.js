import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import "./VendorProp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../../images/icons8-filter-64.png";

function VendorProp() {
  const navigate = useNavigate();
  const [proposals , setProposals] = useState([]);
//  const [vendorName , setVendorName] = useState("");
 const [isDeleted, setIsdeleted] = useState(false)
 const [query,setQuery]=useState("")
 const [filtered,setFiltered]=useState([]);
 const [activeGenre,setActiveGenre]=useState("all");

 console.log(document.cookie.split("=")[1])
//  console.log(proposals)
//  console.log(filtered)
//  console.log(activeGenre)
function filter(){
  let value=document.getElementById('filterlist').value.toLowerCase();
  setActiveGenre(value)
}


///

 const getVendorData = () =>{
  fetch("http://localhost:9000/vendordata",{
    method:"POST",
    crossDoamin : true,
    headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
    body:JSON.stringify({
      token: localStorage.getItem("vendorToken"),
    })
  })
 .then((res)=>res.json())
 .then((data) =>{
   setProposals(data)
   })
   .catch((err)=>{
   console.log(err)})
  }
 
// delete proposal

async function deleteEvent(id){
  let Id = {id};
  setIsdeleted(true);
  fetch("http://localhost:9000/deleteproposal",{
    method:"DELETE",
    crossDoamin : true,
    headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
    body:JSON.stringify(Id)
    
})
.then((res)=>res.json())
.then((data)=>{
  alert("Proposal Deleted")
  
  
  console.log(data);
  
 
 })
 

.catch((err)=>{
  console.log(err)})
 }


 const getProposals =() =>{
  fetch("http://localhost:9000/proposals",{
    method:"GET",
    crossDoamin : true,
    headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
    
})
.then((res)=>res.json())
.then((data) =>{
  setProposals(data)
  setFiltered(data)
  })
  .catch((err)=>{
  console.log(err)})
 }

  useEffect(()=>{
    // console.log(activeGenre)
        // getVendorData();
        // setIsdeleted(false);
        getProposals();
        // filter();

        
  },[isDeleted])

  useEffect(()=>{

        const filte=proposals.filter((item)=>{
          if(activeGenre == "all"){
            return proposals
          }

          return item.eventType.includes(activeGenre)
        })
        setFiltered(filte)

        if(!localStorage.getItem("vendorToken")){
          navigate('/')
        }
  },[activeGenre])


 
  return (
    <div>
      <Navbar />
      <div className="propcontainer">
        <div className="container1">
          <div className="proposal">
            <b>Proposals</b>
          </div>
          <div className="searchbar">
            <div className="searchimg"></div>
            <input
              type="text"
              placeholder="Search Projects"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="filter">
            <div className="filimg">
             
              <select
              id="filterlist"
                name="filter"
                style={{ position: "relative", top: "6px", left: "20px",width:'24px',height:'25px',opacity:'0'}} onChange={filter}
              >
                <option value="all">All</option>
                <option value="marriage">Marriage</option>
                <option value="birthday">Birthday</option>
                </select>
            </div>
            <div className="create-btn">
            <Link
                  to="/createproposal"
                  style={{ textDecoration: "none", color: "white" }}
                >
              
              <button>
              
                  CREATE
               
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container2">
          {filtered.filter((item)=>item.eventName.toLowerCase().includes(query)).map((item) => {
            return <Events proposals={proposals} setFiltered={setFiltered} key={item._id}  id={item._id} data={item} delete={deleteEvent} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VendorProp;
