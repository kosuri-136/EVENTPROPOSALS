import React, { useEffect, useState } from "react";
import "./Proposaldetail.css";
import UserNav from "./UserNav";
import { useParams } from "react-router";
import { useContext } from "react"
import { Context } from "./Context"
import { useNavigate } from "react-router-dom";


function Proposaldetail(props) {
  const [proposal, setProposal] = useState([]);
  const { handleSelect} = useContext(Context);
  const navigate = useNavigate();
  // console.log(props)
  const { id } = useParams();
  console.log(id);

  const selectProposal = () =>{
    fetch("http://localhost:9000/selectproposal",{
      method:"POST",
      crossDoamin : true,
      headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
      body:JSON.stringify({
        id:id,
      })
    })
   .then((res)=>res.json())
   .then((data) =>{
      // console.log(data.data)
      handleSelect(data.data)
      navigate('/Userproposals')
     })
     .catch((err)=>{
     console.log(err)})
  }

  const getProposaldata = () => {
    fetch(`http://localhost:9000/getproposal/${id}`, {
      method: "GET",
      crossDoamin: true,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProposal(data.proposal);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProposaldata();
    if (
      !localStorage.getItem("userToken")
    ) {
      navigate("/User");
    }
  }, []);

  console.log(proposal?.vendorName);

  return (
    <>
      <UserNav />
      <div className="line"></div>
      <div className="proposaldetailcontainer">
        <div className="proposaldetailtop">
          <div className="proposaltext">Proposals </div>
          <div className="John">
            <b>--- KOSURI </b>
          </div>
          <div className="select-btn">
            <button
              onClick={selectProposal}
              style={{
                background: "white",
                color: "#006BD9",
               marginLeft:"-200px",
                border: "2px solid #006BD9",
              }}
            >
              SELECT
            </button>
          </div>
        </div>
        <div className="prop-details">
          <div style={{ display: "flex" }}>
            <div id="one">
              <div
                className="one-img"
                style={{ width: "295px", height: "200px" }}
              >
                <img src={proposal?.image} alt="img.jpg" />
                <p
                  style={{
                    fontweight: "bold",
                    background: "rgb(211, 199, 199)",
                    padding: "0px 20px",
                    position: "relative",
                    top: "-14px",
                  }}
                >
                  ID:{proposal?._id}
                </p>
              </div>
              <div className="one-name">
                <b style={{ color: "gray", fontSize: "13px" }}>Name</b>
                &nbsp;&nbsp;
                <b>{proposal?.vendorName}</b>
              </div>
              <div className="one-email">
                <b style={{ color: "gray", fontSize: "13px" }}>Email</b>
                &nbsp;&nbsp;
                <b>{proposal?.vendorEmail}</b>
              </div>
              <div className="one-date">
                <b style={{ color: "gray", fontSize: "10px" }}>Start date</b>
                &nbsp;&nbsp;
                <b style={{ fontSize: "11px" }}>{proposal?.fromDate ? proposal?.fromDate.split("T")[0]:proposal?.fromDate}</b>
                &nbsp;&nbsp;&nbsp;
                <b style={{ color: "gray", fontSize: "10px" }}>End date</b>
                &nbsp;&nbsp;
                <b style={{ fontSize: "11px" }}>{proposal?.toDate ? proposal?.toDate.split("T")[0] : proposal?.toDate}</b>
              </div>
              <div className="event-type">
                <p style={{ color: "grey", fontSize: "13px" }}>Event Type</p>
                <p
                  style={{
                    border: "2px solid #D9ECFF",
                    display: "initial",
                    background: "#D9ECFF",
                    color: "#006BD9",
                  }}
                >
                  {proposal?.eventType}
                </p>
              </div>
              <div className="event-class">
                <p style={{ color: "grey", fontSize: "13px" }}>Event Class</p>
                <p
                  style={{
                    display: "initial",
                  }}
                >
                  Class A
                </p>
              </div>
            </div>
            <div id="two">
              <p style={{ margin: "0px 25px 24px 12px" }}>
                <b>Venue and Arrangements</b>
              </p>
              <div
                style={{
                  margin: "0px 25px 0px 12px",
                  height: "316px",
                  wordWrap: "break-word",
                }}
              >
                When organizing an event, you're confronted with many decisions, but choosing the right venue and location is the one decision that will have the largest impact on your event. Everything from the date of the event, speaker lineups, catering options, and attendees experience depend on the event venue and location you select.
               <p>The earlier the better. Once you have a good understanding of the following 3 factors, you can begin your search for a venue: budget, estimated event size, and space requirements.

.</p>
              </div>
            </div>
            <div id="three">
              <p style={{ margin: "0px 25px 24px 12px" }}>
                <b>Food Preferences</b>
              </p>
              <div
                style={{
                  margin: "0px 25px 0px 12px",
                  height: "316px",
                  wordWrap: "break-word",
                }}
              >
                {proposal?.foodPreference}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", position: "relative", top: "39px" }}>
            <div id="album">
              <div id="albumtext">My album</div>
              <div id="four">
                <img
                  src={proposal?.image}
                  alt="img.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div id="five"></div>
              <div id="six"></div>
              <div id="seven"></div>
              <div id="eight"></div>
              <div id="nine"></div>
            </div>
            <div style={{ position: "relative", top: "7px", left: "261px" }}>
              <b>Contacts | 12</b>
            </div>

            <div id="ten" className="ten-grid">
              <div style={{ margin: "55px 12px 19px 45px" }}>
                <div
                  style={{
                    background: "grey",
                    borderRadius: "25px",
                    width: "54px",
                    height: "48px",
                  }}
                ></div>
                <div>Contact1</div>
                <div>+91 0000000000</div>
              </div>
              <div style={{ margin: "55px 12px 19px 45px" }}>
                <div
                  style={{
                    background: "grey",
                    borderRadius: "25px",
                    width: "54px",
                    height: "48px",
                  }}
                ></div>
                <div>Contact1</div>
                <div>+91 0000000000</div>
              </div>
              <div style={{ margin: "55px 12px 19px 45px" }}>
                <div
                  style={{
                    background: "grey",
                    borderRadius: "25px",
                    width: "54px",
                    height: "48px",
                  }}
                ></div>
                <div>Contact1</div>
                <div>+91 0000000000</div>
              </div>
            </div>
            <div id="eleven">
              <p style={{ margin: "0px 25px 24px 12px" }}>
                <b>Events</b>
              </p>
              <div
                style={{
                  margin: "0px 25px 0px 12px",
                  height: "316px",
                  wordWrap: "break-word",
                }}
              >
                {proposal?.events}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proposaldetail;
