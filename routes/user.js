const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();


router
    .get("/", userController.getAllUsers)
    .post("/addUsers", userController.addUsers)
    .put("/editUser", userController.editUser)
    .post("/login", userController.login)
    .post("/register", userController.register)
    .delete("/deleteUser", userController.deleteUser)
    .post("/setUsers", userController.setUsers)

module.exports = router;