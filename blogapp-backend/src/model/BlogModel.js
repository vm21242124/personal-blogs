const mongoose =require('mongoose')

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    readmeUrl: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  

module.exports = mongoose.model('blogs',blogSchema);