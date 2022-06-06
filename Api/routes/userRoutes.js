const express=require('express');
const router=express.Router();

const { getAllUsers, loginUser, createUser, getUserById, addFollower, deleteFollower } = require('../controllers/userController');

router.route('/').get(getAllUsers);

router.route('/:id').get(getUserById);

router.route('/register').post(createUser);

router.route('/login').post(loginUser);

router.route('/followers').post(addFollower);

router.route('/followers').delete(deleteFollower);

module.exports = router;
