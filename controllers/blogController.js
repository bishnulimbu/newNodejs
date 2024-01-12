exports.createBlog = async (req, res) => {
  console.log(req);
  let data = {
    title: req.body.name,
    desc: req.body.desc,
  }
  let createdBlog = await blogs.create(data);
  if (createdBlog) {
    res.status(200).json({
      data: createdBlog,
      message: "created successfully",
    })
  }
  console.log(createdBlog);
}
