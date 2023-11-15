const express = require('express');
const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require('../controllers/user.controller');
const router = express.Router();


router.get('/api/users',getAllUsers);
router.post('/api/users',createUser);
router.get('/api/users/:id',getOneUser);
router.delete('/api/users/:id',deleteUser);
router.patch('/api/users/:id',updateUser);


module.exports = router;