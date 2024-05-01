const IssuedBook = require("../dtos/book-dto");
const {UserModel, BookModel} = require('../models');

exports.getAllBooks = async (req, res) => {
    const books = await BookModel.find();

    if(books.length === 0)
        return res.status(404).json({
            success: false,
            message: "No Book found",
        });

        res.status(200).json({success: true, data: books});
};

exports.getSingleBookByName = async (req, res) => {
    const {name} = req.params;
    const book = await BookModel.findOne({name: name,});
    if(!book){
        return res.status(404).json({ success:false, message:"Book not found"});
    }
    return res.status(200).json({
        success:true,
        data: book,
    });
};

exports.getAllIssuedBooks = async (req, res) => {
    const users = await UserModel.find({
        issuedBook : { $exists: true },
    }).populate("issuedBook");

    const issuedBooks = users.map((each) => new IssuedBook(each));

    if(issuedBooks.length === 0){
        return res.status(404).json({ success:false, message:"No books issued yet."});
    }
    return res.status(200).json({success:true, data:issuedBooks});
};

exports.addNewBook = async (req, res) => {
    const {data} = req.body;

    if(!data) {
        return res.status(400).json({success:false, message:"No data provided"});
    }

    await BookModel.create(data);

    const allBooks = await BookModel.find();

    return res.status(200).json({ success:true, data:allBooks,});
};

exports.updateBookById = async (req, res) => {
    const {id} = req.params;
    const {data} = req.body;

    const updateData = await BookModel.findOneAndUpdate(
        {
            _id: id,    //if the given id matches _id update the data
        },data , 
        {new: true}     //get the data after it's been updated basically like pre increment(++i)
    );

    return res.status(200).json({success:true, data:updateData});
}
