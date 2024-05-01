const express = require("express");
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

// const  BookModel = require('../models/book-model');
// const  UserModel = require('../models/user-model');

const {UserModel, BookModel } = require('../models');
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById, getSingleBookByName } = require("../controllers/book-controller");

const router = express.Router();


/**
 * Route; /books
 * Method: GET
 * Description: getting all books
 * Access: Public
 * Parameters: none
 */
router.get("/", getAllBooks);


/**
 * Route; /books/:id
 * Method: GET
 * Description: getting  book by id
 * Access: Public
 * Parameters: id
 */
router.get("/:name", getSingleBookByName);

/**
 * Route; /books/issued
 * Method: GET
 * Description: getting all issued books
 * Access: Public
 * Parameters: none
 */
router.get("/issued/by-user", getAllIssuedBooks);

/**
 * Route; /books
 * Method: POST
 * Description: Create new Book 
 * Access: Public
 * Parameters: none
 * Data: author, name, genre, price, publisher, id
 */
router.post("/",addNewBook);

/**
 * Route; /books/:id
 * Method: PUT
 * Description: Update a Book by Id
 * Access: Public
 * Parameters: id
 * Data: author, name, genre, price, publisher, id
 */
router.put("/:id", updateBookById);

module.exports = router;
