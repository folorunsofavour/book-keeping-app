// const router = require('express').Router(); this OR
const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Home } = require('../controllers/HomeController');
const { User, UserRegister, UserLogin, UserUpdate, UserDelete } = require('../controllers/UserController');

router.get('/', Home);

// Users Routes
router.get('/users', User);
router.post('/users/register', asyncHandler(UserRegister));
router.post('/users/login', asyncHandler(UserLogin));
router.put('/users/update', UserUpdate);
router.delete('/users/delete/:id', UserDelete);

module.exports = router;
