import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendorhome from "./components/Vendor/Vendorhome";
import Userhome from "./components/User/Userhome";
import Vendorreg from "./components/Vendor/Vendorreg";
import Userreg from "./components/User/Userreg";
// import Navbar from "./components/Vendor/VendorProp/Navbar";
import VendorProp from "./components/Vendor/VendorProp/VendorProp";
import Vencreateprop from "./components/Vendor/VendorCreateProp/Vencreateprop";
import Userprop from "./components/User/UserProposals/Userprop";
import Proposaldetail from "./components/User/UserProposals/Proposaldetail";
import AppContext from "./components/User/UserProposals/Context"

function App() {
      // const isVendorLoggedIn = localStorage.getItem('vendorloggedIn');
      // const isUserLoggedIn = localStorage.getItem('userloggedIn');

  return (
    <>
      <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<Vendorhome />} />
          <Route path="/User" element={<Userhome/>}/>
          <Route path="/createvendoraccount" element={<Vendorreg/>}/>
          <Route path="/createuseraccount" element={<Userreg/>}/>
          <Route path="/VendorProposal" element={<VendorProp/>}/>
          <Route path='/createproposal' element={<Vencreateprop/>}/>
          <Route path='/Userproposals' element={<Userprop/>}/>
          <Route path="/Proposaldetail/:id" element={<Proposaldetail/>}/>
        </Routes>
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
