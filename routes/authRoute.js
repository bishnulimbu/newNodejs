
// const { createBlog, deleteBlogsById, getBlogs, getBlogsById, updateBlog } = require("../controllers/blogController");
//
// const router = require("express").Router();
// router.patch("/update/:id", updateBlog);
//
// module.exports = router;

const { register } = require("../controllers/authController");

const router = require("express").Router();

router.post("/register", register);


module.exports = router;
