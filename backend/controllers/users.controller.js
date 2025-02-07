import User from "../db/models/User.model.js";
import { createHash } from "../utils/bcrypt.js";

export const getUsers = async (req, res) => {
    try {
        const usersList = await User.find()
        res.status(200).json({status:"succes", usersList})
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).json({status:"getting users failed", message: error})
    }
}

export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body

        // const userExists = User.findOne() 

        // const newUser = {
        //     name, 
        //     email, 
        //     password: createHash(password)
        // }

       // await User.create(newUser)

    } catch (error) {
        console.error("Error creating user: ", error);
        res.status(500).json({status:"create user has failed", message: error}) 
    }
}