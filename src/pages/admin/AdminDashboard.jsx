import React, { useState } from 'react'
import Sidebar from './Sidebar';
import UploadBlog from './UploadBlog';
import ViewBlogs from './ViewBlogs';

const AdminDashboard = () => {
  const [activeComp,setActiveComp]=useState('upload blog');
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const newBlog = { title, description, readme };
    //   setBlogs([...blogs, newBlog]);
    //   setTitle("");
    //   setDescription("");
    //   setReadme("");
    // };
  
   
  
    return (
      <div className="min-h-screen flex bg-gray-900 text-white">
        <Sidebar setActiveComp={setActiveComp} activeComp={activeComp}/>
        <main className="flex-1 p-6">
          {activeComp==='upload blog' ? <UploadBlog/> : <ViewBlogs/>}
        
        </main>
      </div>
    );
}

export default AdminDashboard