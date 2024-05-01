const express = require("express");
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

// const  BookModel = require('../models/book-model');
// const  UserModel = require('../models/user-model');

const {UserModel, BookModel } = require('../models');
const { getAllBooks, getSingleBookById, getAllIssuedBooks } = require("../controllers/book-controller");

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
router.get("/:id", getSingleBookById);

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
router.post("/",(req, res) => {
    const {data} = req.body;

    if(!data) {
        return res.status(400).json({success:false, message:"No data provided"});
    }

    const book = books.find((each) => each.id === data.id);

    if(book){
        return res.status(404).json({ success:false, message:"Book already exists with this id"});
    }

    const allBooks = {...books, data};

    return res.status(200).json({ success:true, data:allBooks,});
});

/**
 * Route; /books/:id
 * Method: PUT
 * Description: Update a Book by Id
 * Access: Public
 * Parameters: id
 * Data: author, name, genre, price, publisher, id
 */
router.put("/:id", (req, res) => {
    const {id} = req.params;
    const {data} = req.body;

    const book = books.find((each) => each.id === id);


    if(!book) {
        return res.status(200).json({success:false, message:"Book not found with this id"});
    }

    const updateData = books.map((each) => {
        if(each.id === id){
            return {...each, ...data};
        }
    });
    return res.status(200).json({success:true, data:updateData});
});

module.exports = router;
