import React from "react";

const Profile = (props) => {
  const { name, Address, Role, children, contact } = props;
  return (
    <>
      <h1>Profile</h1>
      <h3>name:{name}</h3>
      <h3>Address:{Address}</h3>
      <h3>Role:{Role}</h3>
      <h3>{children}</h3>
      {contact}
    </>
  );
};

export default Profile;
