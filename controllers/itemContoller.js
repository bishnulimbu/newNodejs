const { items } = require("../model");

exports.createItem = async (req, res) => {
  console.log(req);
  let data = {
    name: req.body.name,
    desc: req.body.desc,
  };
  let createdItem = await items.create(data);
  if (createdItem) {
    res.status(200).json({
      data: createdItem,
      message: "Created Successfully"
    });
  }

  console.log(createdItem);
};

exports.getItems = async (req, res) => {
  let result = await items.findAll();
  res.status(200).send(result);
};

exports.getItemById = async (req, res) => {
  let result = await items.findByPk(req.params.id);
  res.status(200).send(result);
};

exports.deleteItemById = async (req, res) => {
  let result = await items.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
};

exports.updateItem = async (req, res) => {
  await items.update({ ...req.body }, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    success: true,
    message: "Updated successfully.",
  });
};
// const { blogs } = require("../model");
//
// exports.createBlog = async (req, res) => {
//   console.log(req)
//   let data = {
//     name: req.body.name,
//     desc: req.body.desc,
//   };
//   let createdBlog = await blogs.create(data);
//   if (createdBlog) {
//     res.status(200).json({
//       data: createdBlog,
//       message: "Created Successfully"
//     })
//   }
//
//   console.log(createdBlog);
// };
//
// exports.getBlogs = async (req, res) => {
//   let result = await blogs.findAll();
//   res.status(200).send(result);
// };
//
// exports.getBlogsById = async (req, res) => {
//   let result = await blogs.findByPk(req.params.id);
//   res.status(200).send(result);
// };
// exports.deleteBlogsById = async (req, res) => {
//   let result = await blogs.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.status(200).json({
//     success: true,
//     message: "deleted Successfully",
//   });
// }
// exports.updateBlog = async (req, res) => {
//   await blogs.update({ ...req.body }, {
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.status(200).json({
//     success: true,
//     message: "Updated successfully.",
//   });
// };

