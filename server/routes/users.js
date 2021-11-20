var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const passportJWT = require("../middleware/passportJWT");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* http://localhost:3000/users/login */
router.post("/login", userController.login);

module.exports = router;
