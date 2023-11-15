const { v4: uuidv4 } = require('uuid');
const user = require('../models/user.model');


const getAllUsers = async (req, res)=>{
    const allUser = await user.find();
    res.status(200).json(allUser);
}

const getOneUser = async (req, res)=>{
    try {
        
        const oneUser = await user.findOne({id: req.params.id});
        res.status(200).json(oneUser);
    } catch (error) {
        res.status(500).send(error.message);
    }

    
}

const createUser = async(req, res)=>{
   
    try {
        const newUser = new user({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
        })

        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

} 

    

const updateUser = async (req, res)=>{
    try {
        const findUser = await user.findOne({id: req.params.id});
        findUser.name = req.body.name;
        findUser.age = req.body.age;
        await findUser.save();
        res.status(200).json(findUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res)=>{
    try {
        
        const oneUser = await user.deleteOne({id: req.params.id});
        res.status(200).json({
            message: "user is delete",
            data: oneUser,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}








module.exports = {getAllUsers, getOneUser, createUser, updateUser, deleteUser};