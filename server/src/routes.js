import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am live" }).status(200);
});

module.exports = router;