import React from 'react';

const Footer = () => {
  return (
    <div className="flex space-x-6 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-500">
      <button className="text-green-900 font-semibold border-b-2 border-green-900 pb-1">
        All Orders
      </button>
      <button className="hover:text-black">Pending</button>
      <button className="hover:text-black">Reviewed</button>
      <button className="hover:text-black">Arrived</button>
      <button className="text-xl font-normal">+</button>
    </div>
  );
};

export default Footer;
