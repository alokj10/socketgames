"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/", function (req, res) {
  res.send({ response: "I am live" }).status(200);
});

module.exports = router;
//# sourceMappingURL=routes.js.map