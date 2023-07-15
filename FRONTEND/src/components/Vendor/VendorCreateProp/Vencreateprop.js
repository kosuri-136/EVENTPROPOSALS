import React from 'react'
import Navbar from '../VendorProp/Navbar'
// import Proposal from '../../User/UserProposals/Proposal'
import Userprop from '../../User/UserProposals/Userprop'
import './Vencreateprop.css';
import Form from './Form'
import UserNav from '../../User/UserProposals/UserNav';

function Vencreateprop() {
  return (
    <>
      <div className='createpropuserprop'>
      <Navbar/>
     
      <Userprop/>
      </div>
      <Form/>
    </>
  )
}

export default Vencreateprop
