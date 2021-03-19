// const router = require('express').Router(); this OR
const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');

const { Home } = require('../controllers/HomeController');
const { User, UserRegister, UserLogin, UserUpdate, UserDelete, UserProfile } = require('../controllers/UserController');
const { Book, BookCreate, BookUpdate, BookDelete } = require('../controllers/BookController');

router.get('/', Home);

// Users Routes
router.get('/users', authMiddleware, asyncHandler(User));
router.post('/users/register', asyncHandler(UserRegister));
router.post('/users/login', asyncHandler(UserLogin));
router.get('/users/profile', authMiddleware, asyncHandler(UserProfile));
router.put('/users/update', authMiddleware, asyncHandler(UserUpdate));
router.delete('/users/delete/:id', UserDelete);

// Books Routes
router.get('/books', asyncHandler(Book));
router.post('/books/create',  authMiddleware, asyncHandler(BookCreate));
router.put('/books/update/:id',  authMiddleware, asyncHandler(BookUpdate));
router.delete('/books/delete/:id', authMiddleware, asyncHandler(BookDelete));

module.exports = router;
