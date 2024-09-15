exports.createBlog = async(req,res)=>{
    return res.status(200).json("messsage");
};

exports.getAllBlogs = async(req,res)=>{
    return res.status(200).json("messsage");
};

exports.searchBlogs = async(req,res)=>{
    const { searchtext } = req.params;
    return res.status(200).json({search:searchtext});
};