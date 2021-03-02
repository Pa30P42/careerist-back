const PostModel = require("./posts.model");

exports.getPosts = async (req, res, next) => {
  const {
    query: { page = 1, postsPerPage = 6 },
  } = req;

  let paginate = true;

  const allPostsList = await PostModel.find();

  const selectedPostsList = await PostModel.find()
    .sort({ date: -1 })
    .skip(postsPerPage * page - postsPerPage)
    .limit(postsPerPage);

  if (allPostsList.length <= postsPerPage) {
    paginate = false;
  }

  let totalPages = Math.ceil(allPostsList.length / postsPerPage);

  res.status(200).json({
    status: "success",
    data: { selectedPostsList },
    paginate,
    totalPages,
  });
};

exports.addPosts = async (req, res, next) => {
  const { name, text } = req.body;
  const date = new Date();
  const newPost = await PostModel.create({ name, text, date });

  res.status(201).json({
    status: "success",
    post: newPost,
  });
};
