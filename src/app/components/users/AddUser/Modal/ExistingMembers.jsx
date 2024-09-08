import React from "react";
import Dropdown from "./Dropdown";

const ExistingMembers = () => {
  const options = [
    'User 1',
    'User 2',
    'User 3',
    'User 4',
  ];
  return (
    <div className="mb-4 flex flex-row gap-2 w-full ">
      {/* <h2 className="font-semibold">Choose From Existing Members</h2> */}
      <div className="flex flex-col gap-1 w-1/2">
        <Dropdown
        options={options}
        placeholder="Select Existing User"
        label="User Name"
        id="existing"
      />
      </div>
      <div className="flex flex-col gap-1 w-1/2">
      <Dropdown
        options={options}
        placeholder="Select all which apply"
        label="Choose your role"
        id="existing"
      />
      </div>
    </div>
  );
};

export default ExistingMembers;