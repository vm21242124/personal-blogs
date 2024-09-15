const express = require('express');
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { Auth } = require('../middleware/AuthMiddleware');
const router = express.Router();

router.post('/create', Auth, upload.single('readme'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const readmeUrl = req.file.location;

    const newBlog = new Blog({
      title,
      description,
      readmeUrl,
      author: req.user.username
    });

    await newBlog.save();
    res.json(newBlog);
  } catch (err) {
    res.status(500).json({ error: 'Error creating blog' });
  }
});


router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blogs' });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    if (blog.author !== req.user.username) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    await blog.remove();
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting blog' });
  }
});

module.exports = router;
