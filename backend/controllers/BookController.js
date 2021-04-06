const Book = require('../models/Book');


exports.Books = async (req, res) => {
    try {
        const book = await Book.find({});

        if(book) {
            return res.status(200).json({message: 'These are all The available Books', data: book });
        }
        else{
            return res.status(200).json({message: 'There are no Books for now....Please come back later', data: book });
        }
    } catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}` });
    }
    
};

exports.BookCreate = async (req, res) => {
    try {
        // Get the user from req.user in authmiddleware
        const userId = req.user._id;

        const book = {
            title: req.body.title,
            category: req.body.category,
            author: req.body.author,
            createdBy: userId,
        };

        const saveBook = new Book(book);
        await saveBook.save();

        if(saveBook){
            return res.status(200).json({message: 'Book Created Successfully', data: saveBook });
        }else{
            return res.status(500).json({message: 'Book Creation Failed'});
        }
    } catch (error) {
        return res.status(500).json({message: `An Error Occured ${error}`});
    }
};

exports.Book = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if(book) {
            return res.status(200).json({message: 'Book Fetched Successfully', data: book });
        }
        else{
            return res.status(401).json({message: 'Book was not found'});
        }
    } catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}` });
    }
    
};

exports.BookUpdate = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: true, runValidators: true}) 
    
        if(updatedBook){
            return res.status(200).json({message: 'Book Updated Successfully', data: updatedBook });
        }
        else{
            return res.status(500).json({message: 'Update Failed'});
        }
    } catch (error) {
        return res.status(500).json({message: `An Error Occured ${error}`});
    }
    
};

exports.BookDelete = async (req, res) => {
    
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        if(book){
            return res.status(200).json({message: 'Book Deleted Successfully' });
        }
        else{
            return res.status(500).json({message: 'Error while Deleting Book'});
        }
    } catch (error) {
        return res.status(500).json({message: `An Error Occured ${error}`});
    }

};