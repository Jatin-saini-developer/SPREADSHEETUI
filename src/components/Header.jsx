import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-6 py-3 border-b h-[56px] bg-white shadow-sm'>

      {/* Left: Folder Path */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-gray-400">Workspace</span>
        <span className="text-gray-300">›</span>
        <span className="text-gray-400">Folder 2</span>
        <span className="text-gray-300">›</span>
        <span className="text-black font-medium">Spreadsheet 3</span>
        <span className="text-gray-400">⋯</span>
      </div>

      {/* Right: Search, Bell, Profile */}
      <div className="flex items-center gap-4">
        
        {/* Search Input */}
        <div className="flex items-center bg-gray-100 px-2 py-1 rounded-md">
          <input
            type="text"
            placeholder="Search within sheet"
            className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 w-40"
          />
        </div>

        {/* Bell Button */}
        <div>
          <button className="text-gray-600 hover:text-black">🔔</button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/32"
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight text-xs">
            <span className="font-medium text-gray-800">John Doe</span>
            <span className="text-gray-400">john.doe@email.com</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
