const express = require("express");
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

const router = express.Router();


/**
 * Route; /books
 * Method: GET
 * Description: getting all books
 * Access: Public
 * Parameters: none
 */
router.get("/", (req, res) => {
     res.status(200).json({
        success:true,
        data: books,
     })
})


/**
 * Route; /books/:id
 * Method: GET
 * Description: getting  book by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", (req, res) => {
    const {id} = req.params;
    // const book = books.find((each) => each.id === id);
    const book = books.find((each) =>  each.id === id);
    if(!book){
        return res.status(404).json({ success:false, message:"Book not found"});
    }
    return res.status(200).json({
        success:true,
        data: book,
    });
});

/**
 * Route; /books/issued
 * Method: GET
 * Description: getting all issued books
 * Access: Public
 * Parameters: none
 */
router.get("/issued/books", (req, res) => {
    const usersWithIssuedBooks = users.filter((each) => {
        if(each.issuedBook) return each;
    });

    const isseudBooks = [];

    usersWithIssuedBooks.forEach((each) => {
        const book = books.find((book) => book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.isseudDate = each.issuedDate;
        book.returnDate = each.returnDate;

        isseudBooks.push(book);
    });

    if(isseudBooks.length === 0){
        return res.status(404).json({ success:false, message:"No books issued yet."});
    }
    return res.status(200).json({success:true, data:isseudBooks});
});

module.exports = router;
