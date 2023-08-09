'use client'

import React, { useState } from 'react';
import LinkForm from '../Links/LinkInput';

const Profile = () => {
  // const [linkForms, setLinkForms] = useState([]);

  // const handleAddNewLink = () => {
  //   const newLinkForm = {
  //     id: Date.now(), // or use a unique identifier
  //     // other properties related to the form state
  //   };
  //   setLinkForms([...linkForms, newLinkForm]);
  // };

  // const handleFormSubmit = (formData, formId) => {
  //   // Handle form submission and data here
  //   // Remove the form from linkForms array to hide it
  //   setLinkForms(linkForms.filter((linkForm) => linkForm.id !== formId));
  // };

  // return (
  //   <div>
  //     <button onClick={handleAddNewLink}>Add New Link</button>
  //     {linkForms.map((linkForm) => (
  //       <div key={linkForm.id}>
  //         <LinkForm
  //           linkForm={linkForm}
  //           onSubmit={(formData) => handleFormSubmit(formData, linkForm.id)}
  //         />
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Profile;
