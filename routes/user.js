const express = require("express");
const router = express.Router();
const verifyToken = require('../middlewares/authJWT');

//This import module for register and login
const { signup, signin } = require("../controllers/auth.controller");

//This route is used for register user
router.post("/register", signup, function (req, res) {

});

//This route is used to login register
router.post("/login", signin, function (req, res) {

});

//This route is used for authorization
//Check the user is authorized oi not based on Role
router.get("/hiddencontent", verifyToken, function (req, res) {
    if (!req.user) {
        res.status(403)
            .send({
                message: "Invalid JWT token"
            });
    }
    if (req.user.role == "admin") {
        res.status(200)
            .send({
                message: "Congratulations! but there is no hidden content"
            });
    } else {
        res.status(403)
            .send({
                message: "Unauthorised access"
            });
    }
});

module.exports = router;