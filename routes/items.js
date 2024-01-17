const { createItem, deleteItemById, getItems, getItemById, updateItem } = require("../controllers/itemContoller.js");

const router = require("express").Router();

router.post("/create", createItem);
router.get("/get", getItems);
router.get("/get/:id", getItemById);
router.delete("/delete/:id", deleteItemById);
router.patch("/update/:id", updateItem);

module.exports = router;
// const { createBlog, deleteBlogsById, getBlogs, getBlogsById, updateBlog } = require("../controllers/blogController");
//
// const router = require("express").Router();
//
// router.post("/create", createBlog);
// router.get("/get", getBlogs);
// router.get("/get/:id", getBlogsById);
// router.delete("/delete/:id", deleteBlogsById);
// router.patch("/update/:id", updateBlog);
//
//
// module.exports = router;
