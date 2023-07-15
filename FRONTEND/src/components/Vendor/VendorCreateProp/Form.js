import React from "react";
import "./Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Form() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [cloudImage,setCloudImage] = useState("");
  const [regForm,setRegForm]=useState({
    eventName : "", placeOfEvent : "",proposalType : "",eventType : "", budget : "",fromDate :"", toDate : "",foodPreference : "",description : "" ,events : "",token: localStorage.getItem("vendorToken")
  })
  function updateData(e,propName){
    let temp=e.target.value
    setRegForm(data =>({
     ...data,[propName]:temp
    }))
     }
     async function submitform(e){
      e.preventDefault();
      try{
        const formData = new FormData();
      console.log(regForm)
      formData.append("image", cloudImage);
            formData.append("eventName", regForm.eventName);
            formData.append("placeOfEvent", regForm.placeOfEvent);
            formData.append("proposalType", regForm.proposalType);
            formData.append("eventType", regForm.eventType);
            formData.append("budget", regForm.budget);
            formData.append("fromDate", regForm.fromDate);
            formData.append("toDate", regForm.toDate);
            formData.append("foodPreference", regForm.foodPreference);
            formData.append("description", regForm.description);
            formData.append("events", regForm.events);
            formData.append("token", regForm.token);
       const res = await axios.post("http://localhost:9000/createproposal", formData);
       if (res.data.status == "ok")
      {
       alert("Proposal Created")
       navigate("/VendorProposal")
      }
      if (res.data.status == "error"){
        alert(`${res.data.error}`)
      }
      console.log(res.data ,"VendorRegisterd")
      }  catch (error){
         console.log(error)
      }
    }
    //  const handleImageChange = (e) => {
    //   setImage(e.target.files[0]);
    // };
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData();
      data.append('file',files[0])
      data.append('upload_preset','events')
      setLoading(true)
      const res = await fetch("https://api.cloudinary.com/v1_1/dhryrs3lr/image/upload",
      {
        method :'POST',
        body:data
      })
      const file = await res.json();
      console.log(file);
      setCloudImage(file.secure_url);
      setLoading(false);
    }
  return (
    <div className="form1">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>CREATE PROPOSAL</h2>
      </div>
      <form method="post" onSubmit={submitform}>
        <div className="container1form">
          <div>
            <p>Event Name</p>
            <input type="text" style={{ width: "467px" }} onChange={e=>updateData(e,"eventName")} required  />
          </div>
          <div className="placeofeventdropdown">
          <div style={{ marginRight: "153px" }}>
              <p>Place of Event</p>
              <select
                onChange={e=>updateData(e,"placeOfEvent")}
                name="place of event"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Banglore</option>
                <option value="birthday">Delhi</option>
              </select>
            </div>
            <div style={{ marginRight: "153px" }}>
              <p>Proposal Type</p>
              <select
                onChange={e=>updateData(e,"proposalType")}
                name="proposal type"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Marriage</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex" }}>
          <div style={{ marginRight: "153px" }}>
              <p>Event Type</p>
              <select
                onChange={e=>updateData(e,"eventType")}
                name="event type"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Marriage</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
            <div>
              <p>Budget</p>
              <input
                onChange={e=>updateData(e,"budget")}
                type="text"
                placeholder="0000"
                style={{ width: "149px", height: "15px" }}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "153px" }}>
              <p>From</p>
              <input type="date" style={{ width: "146px", height: "28px" }} onChange={e=>updateData(e,"fromDate")} />
            </div>
            <div>
              <p>To</p>
              <input type="date" style={{ width: "146px", height: "28px" }} onChange={e=>updateData(e,"toDate")}  />
            </div>
          </div>
          <div>
            <p>Description</p>
            <input type="text" style={{ width: "468px", height: "122px" }} onChange={e=>updateData(e,"description")} />
          </div>
        </div>
        <div className="containerform2">
          <div style={{ height: "275px" }}>
          <p className="zupp">Images <button>Add Image</button><input type="file" name="file" multiple onChange={uploadImage} /></p>
            <div className="containerform2grid">
              <div style={{ border: "2px solid black" }}>
            <img  width={100} height={100} src={cloudImage} alt="img.jpg"/>
              </div>
            </div>
          </div>
          <div>
            <p>Food Preferences</p>
            <input type="text" style={{ width: "525px", height: "57px" }} onChange={e=>updateData(e,"foodPreference")} />
          </div>
          <div>
            <p>Events</p>
            <input type="text" style={{ width: "525px", height: "116px" }} onChange={e=>updateData(e,"events")} />
          </div>
        </div>
        <button style={{margin: '20px 3px 0px 482px'}}>Add</button>
      </form>
    </div>
  );
  }
export default Form;