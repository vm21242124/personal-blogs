import React from 'react'

const Sidebar = ({setActiveComp,activeComp}) => {
  return (
    <aside className="w-64 bg-gray-800 p-4">
    <h2 className="text-2xl font-bold mb-4">Blog Dashboard</h2>
    <ul>
      <li className={`py-2 hover:bg-gray-700 ${activeComp==='upload blog'&& 'bg-gray-700'} cursor-pointer`} onClick={()=>setActiveComp("upload blog")}>Upload Blog</li>
      <li className={`py-2 hover:bg-gray-700 ${activeComp==='view blog'&& 'bg-gray-700'} cursor-pointer`} onClick={()=>setActiveComp("view blog")}>Blog List</li>
    </ul>
  </aside>
  )
}

export default Sidebar