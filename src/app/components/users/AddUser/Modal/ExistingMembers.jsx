import React from "react";

const ExistingMembers = () => {
  return (
    <div className="mb-4 flex flex-col">
      {/* <h2 className="font-semibold">Choose From Existing Members</h2> */}
      <div className="py-2 flex justify-between">
        <label htmlFor="existing" className="text-base font-medium">User Name</label>
        <label htmlFor="apply" className="text-base font-medium">Choose your role</label>
      </div>
      <div className="flex justify-between gap-2">
        <select className="border rounded-lg p-2 w-1/2 text-gray-80" id="existing">
          <option>Select Existing User</option>
        </select>
        <select className="border rounded-lg p-2 w-1/2" id="apply">
          <option>Select all which apply</option>
        </select>
      </div>
    </div>
  );
};

export default ExistingMembers;