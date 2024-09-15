import React, { useState } from 'react'

const UploadBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [readme, setReadme] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Upload New Blog</h3>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
                <div>
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">README</label>
                    <textarea
                        value={readme}
                        onChange={(e) => setReadme(e.target.value)}
                        className="w-full p-2 rounded bg-gray-700"
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
                    Upload Blog
                </button>
            </form>
        </div>

    )
}

export default UploadBlog