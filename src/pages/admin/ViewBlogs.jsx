import React from 'react'
const blogs=[
    {
      "title": "Introduction to React",
      "description": "A comprehensive guide to getting started with React, covering its core concepts and practical examples.",
      "readme": "# React Overview\n\nReact is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). It allows developers to create reusable UI components. This blog covers how to set up a React project and build your first component.\n\n## Key Features\n- Component-based architecture\n- Virtual DOM\n- JSX"
    },
    {
      "title": "Understanding Node.js",
      "description": "Learn the basics of Node.js, its event-driven architecture, and how to build server-side applications.",
      "readme": "# Node.js Overview\n\nNode.js is a JavaScript runtime built on Chrome's V8 engine, designed to build scalable network applications. In this blog, we'll discuss the key aspects of Node.js, such as its non-blocking I/O, event loop, and package management through npm.\n\n## Key Features\n- Asynchronous programming\n- Event-driven architecture\n- npm ecosystem"
    },
    {
      "title": "Mastering Tailwind CSS",
      "description": "A step-by-step guide to using Tailwind CSS for creating modern, responsive UIs without writing custom CSS.",
      "readme": "# Tailwind CSS Overview\n\nTailwind CSS is a utility-first CSS framework that allows developers to rapidly build custom designs without leaving their HTML. In this blog, we'll explore the core concepts of Tailwind, how to set up a project, and how to customize your design system.\n\n## Key Features\n- Utility-first CSS\n- Responsive design\n- Easy theming"
    }
  ]
  
const ViewBlogs = () => {
    const handleDelete = (index) => {
        setBlogs(blogs.filter((_, i) => i !== index));
      };
  return (
    <div>
    <h3 className="text-xl font-semibold mb-4">Blog List</h3>
    <div className="space-y-4">
      {blogs.map((blog, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold">{blog.title}</h4>
          <p>{blog.description}</p>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ViewBlogs