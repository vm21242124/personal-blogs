import React from 'react';

const MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
  pre: (props) => <pre className="bg-gray-200 p-4 rounded-md" {...props} />,
  // Add other custom components as needed
};

export default MDXComponents;