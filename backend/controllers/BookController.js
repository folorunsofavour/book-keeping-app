const Book = require('../models/Book');


exports.Book = async (req, res) => {
    const book = await Book.find({});

    if(book) {
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('There are no books');
    }
};

exports.BookCreate = async (req, res) => {
    // Get the user from req.user
    const userId = req.user._id;

    const book = {
        title: req.bosy.title,
        category: req.body.category,
        author: req.body.author,
        createdBy: userId,
    };

    const saveBook = new Book(book);
    await saveBook.save();

    // when creating book populate it with the relationship of the user creating the book after youve finished doinglogin

    if(saveBook){
        res.status(200);
        res.json(saveBook)
    }else{
        res.status(500);
        throw new Error('Book Creation Failed');
    }
};

exports.BookUpdate = async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: true, runValidators: true}) 
    
    if(updatedBook){
        res.status(200);
        res.json(updatedBook);
    }
    else{
        res.status(500);
        throw new Error('Update Failed');
    }
};

exports.BookDelete = async (req, res) => {
    
    try{
        const book = await Book.findByIdAndDelete(req.params.id)   
        res.status(200);
        res.send(200);
        // res.sendStatus(200);
    } catch (error) {
        res.json(error);
        throw new Error('Delete Failed');
    }
};