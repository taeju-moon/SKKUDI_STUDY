const router = require("express").Router();
const Todo = require("../models/todo");

router.get("/", (req, res) => {
  Todo.find()
    .then((todos) =>
      res.status(200).json({
        status: "success",
        data: {
          todos,
        },
      })
    )
    .catch((error) =>
      res.status(400).json({
        status: "fail",
        error,
      })
    );
});

router.get("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) =>
      res.status(200).json({
        status: "success",
        data: {
          todo,
        },
      })
    )
    .catch((error) =>
      res.status(400).json({
        status: "fail",
        error,
      })
    );
});

router.post("/", (req, res) => {
  Todo.create(req.body)
    .then((result) =>
      res.status(200).json({
        status: "success",
        result,
      })
    )
    .catch((error) =>
      res.status(400).json({
        status: "fail",
        error,
      })
    );
});

router.put("/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((result) =>
      res.status(200).json({
        status: "success",
        result,
      })
    )
    .catch((error) => res.status(400).json({ status: "fail", error }));
});

router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json({ status: "success", result }))
    .catch((error) => res.status(400).json({ status: "fail", error }));
});

module.exports = router;
