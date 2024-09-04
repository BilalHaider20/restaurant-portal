import React, { useState } from 'react';

const RoleDropdown = ({ currentRole, onRoleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const roles = ['Restaurant Manager', 'Chef', 'Waitstaff', 'Admin'];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleRoleChange = (role) => {
    onRoleChange(role);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="py-2 px-4 border rounded bg-white text-gray-700 flex flex-row items-center gap-2"
      >
        {currentRole} <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 6L8.5 10L4.5 6" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleChange(role)}
              className="block w-full text-left py-2 px-4 hover:bg-gray-100"
            >
              {role}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleDropdown;