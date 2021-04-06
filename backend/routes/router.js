// const router = require('express').Router(); this OR
const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');

const { Home } = require('../controllers/HomeController');
const { User, UserRegister, UserLogin, UserUpdate, UserDelete, UserProfile } = require('../controllers/UserController');
const { Book, BookCreate, BookUpdate, BookDelete, Books } = require('../controllers/BookController');

router.get('/', Home);

// Users Routes
// router.get('/users', authMiddleware, asyncHandler(User));
router.post('/users/register', UserRegister);
router.post('/users/login', UserLogin);
router.get('/users/profile', authMiddleware, UserProfile);
router.put('/users/update', authMiddleware, UserUpdate);
// router.delete('/users/delete/:id', UserDelete);

// Books Routes
router.get('/books', Books);
router.post('/books/create',  authMiddleware, BookCreate);
router.get('/book/:id',  authMiddleware, Book);
router.put('/books/update/:id',  authMiddleware, BookUpdate);
router.delete('/books/delete/:id', authMiddleware, BookDelete);

module.exports = router;
