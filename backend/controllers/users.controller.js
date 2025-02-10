import User from "../db/models/User.model.js";
import { createHash } from "../utils/bcrypt.js";

export const getUsers = async (req, res) => {
    try {
        const usersList = await User.find()
        return res.status(200).json({status:"succes", usersList})
    } catch (error) {
        console.error("Error getting users: ", error);
        return res.status(500).json({status:"getting users failed", message: error})
    }
}

export const createUser = async (req, res) => {
    try {
        const {name, surname, email, password} = req.body

        const userExists = await User.findOne({email})
         
        if(userExists){ 
            return res.status(400).json({status: "fail", message: "email already registered"}) 
        }


        if(!name || !surname || !email || !password){
            return res.status(400).json({status: "fail", message:"all fields are required"})
        }

        const newUser = new User({
            name,
            surname, 
            email, 
            password: createHash(password)
        })

        await newUser.save()
        res.status(200).json({status: "succes", message: "new user has been created"})

    } catch (error) {
        console.error("Error creating user: ", error);
        return res.status(500).json({status:"create user has failed", message: error}) 
    }
}

