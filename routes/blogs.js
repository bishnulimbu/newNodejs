const { createBlog, deleteBlogsById, getBlogs, getBlogsById, updateBlog } = require("../controllers/blogController");

const router = require("express").Router();

router.post("/create", createBlog);
router.get("/get", getBlogs);
router.get("/get/:id", getBlogsById);
router.delete("/delete/:id", deleteBlogsById);
router.patch("/update/:id", updateBlog);


module.exports = router;
