const { Router } = require("express");
const Blog = require("../models/blog");

const router = Router();

router.get("/add-new", (req, res) => {
  if (!req.user) {
    return res.redirect("/user/signin");
  }

  return res.render("addBlog", {
    user: req.user,
  });
});

router.post("/", async (req, res) => {
  if (!req.user) {
    return res.redirect("/user/signin");
  }

  const { title, body } = req.body;
  const blog = await Blog.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageURL: req.body.coverImageURL || "/images/default.png",
  });
  return res.redirect(`/blog/${blog._id}`);
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");

  if (!blog) {
    return res.status(404).send("Blog not found");
  }

  return res.render("blog", {
    user: req.user,
    blog,
  });
});

module.exports = router;