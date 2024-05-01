const express = require("express");
const {UserModel, BookModel} = require('../models');
const { deleteUser, getSingleUserById, getAllUsers, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controllers/user-controller");

const router = express.Router();
/**
 * Route; /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Parameters: None
 */
router.get("/",getAllUsers );

/**
 * Route; /users/:id
 * Method: GET
 * Description: Get single user by Id
 * Access: Public
 * Parameters: id
 */
router.get("/:id",getSingleUserById)

/**
 * Route; /users
 * Method: POST
 * Description: create new user
 * Access: Public
 * Parameters: None
 */
router.post("/", createNewUser)

/**
 * Route; /users/:id
 * Method: PUT
 * Description: update a user by id
 * Access: Public
 * Parameters: id
 */
router.put("/:id", updateUserById);

/**
 * Route; /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Access: Public
 * Parameters: id
 */
router.delete("/:id",deleteUser);

/**
 * Route; /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details by id
 * Access: Public
 * Parameters: id
 */
router.get("/subscription-details/:id", getSubscriptionDetailsById);


module.exports = router;