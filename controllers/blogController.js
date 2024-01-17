const { blogs } = require("../model");

exports.createBlog = async (req, res) => {
  console.log(req)
  let data = {
    name: req.body.name,
    desc: req.body.desc,
  };
  let createdBlog = await blogs.create(data);
  if (createdBlog) {
    res.status(200).json({
      data: createdBlog,
      message: "Created Successfully"
    })
  }

  console.log(createdBlog);
};

exports.getBlogs = async (req, res) => {
  let result = await blogs.findAll();
  res.status(200).send(result);
};

exports.getBlogsById = async (req, res) => {
  let result = await blogs.findByPk(req.params.id);
  res.status(200).send(result);
};
exports.deleteBlogsById = async (req, res) => {
  let result = await blogs.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    success: true,
    message: "deleted Successfully",
  });
}
exports.updateBlog = async (req, res) => {
  await blogs.update({ ...req.body }, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    success: true,
    message: "Updated successfully.",
  });
};
