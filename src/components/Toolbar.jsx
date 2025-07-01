import React from 'react'

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b shadow-sm">
      {/* Left group: “Tool bar ›” */}
      <div className="flex items-center space-x-1 text-sm text-gray-600">
        <button className="hover:text-gray-800">Tool bar</button>
        <span className="text-gray-300">›</span>
      </div>

      {/* Middle group: Hide fields, Sort, Filter, Cell view */}
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <button className="hover:text-gray-800">Hide fields</button>
        <button className="hover:text-gray-800">Sort</button>
        <button className="hover:text-gray-800">Filter</button>
        <button className="hover:text-gray-800">Cell view</button>
      </div>

      {/* Right group: Import, Export, Share, New Action */}
      <div className="flex items-center space-x-2 text-sm">
        <button className="px-2 py-1 hover:text-gray-800 text-gray-600">Import</button>
        <button className="px-2 py-1 hover:text-gray-800 text-gray-600">Export</button>
        <button className="px-2 py-1 hover:text-gray-800 text-gray-600">Share</button>
        <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
          New Action
        </button>
      </div>
    </div>
  )
}

export default Toolbar
