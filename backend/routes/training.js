const express = require("express");
const router = express.Router();
const Training = require("../models/Training");

router.get("/", async (req, res) => {
  const trainings = await Training.find()
    .limit(3)
    .exec();

  let query = Training.find();

  if (req.query.name != null && req.query.name != "") {
    query = query.regex("name", new RegExp(req.query.name, "i"));
  }

  const allTrainings = await query.exec();
  res.render("layouts/layout", {
    trainings: trainings,
    allTrainings: allTrainings,
    searchOption: req.query
  });
});

//get a single training
router.get("/:id", async (req, res) => {
  const training = await Training.findById(req.params.id);

  res.send(training);
});

//search all trainings
router.get("/", async (req, res) => {
  let query = await Training.find();

  if (req.query.name != null && req.query.name != "") {
    query = query.regex("name", new RegExp(req.query.name, "i"));
  }

  const allTrainings = await query.exec();
  res.render("layouts/layout", {
    allTrainings: allTrainings,
    searchOption: req.query
  });
});

//create new training
router.post("/", async (req, res) => {
  const training = new Training({
    name: req.body.name,
    duration: req.body.duration,
    stack: req.body.stack,
    description: req.body.description,
    price: req.body.price
  });

  await training.save();

  res.send(training);
});

//edit a training
router.put("/:id", (res, req) => {
  res.send();
});

module.exports = router;
