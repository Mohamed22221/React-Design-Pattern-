import React from "react";

const ViewUsers = ({ users }) => {
  return (
    <div>
      <h3>
        Name : {users.firstName} , Age : {users.age}
      </h3>
    </div>
  );
};

export default ViewUsers;
