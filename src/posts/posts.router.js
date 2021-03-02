const express = require("express");
const Joi = require("joi");

const PostsController = require("./posts.controller");
const { validate } = require("../helpers/validate");
const { errCatch } = require("../helpers/errCatch");

const postsRouter = express.Router();

const createPostSchema = Joi.object({
  name: Joi.string().required(),
  text: Joi.string().required(),
});

//Get

postsRouter.get("/", errCatch(PostsController.getPosts));

//Add

postsRouter.post(
  "/",
  validate(createPostSchema),
  errCatch(PostsController.addPosts)
);

module.exports = postsRouter;
