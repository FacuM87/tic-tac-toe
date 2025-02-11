import User from "../db/models/User.model.js"
import { validatePassword } from "../utils/bcrypt.js"


export const signIn = async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){return res.status(400).json({status:"fail signing in", message:"All fields are required"})}

        const user = await User.findOne({email})

        if(!user || !validatePassword(password, user)){
            return res.status(400).json({status: "fail signing in", message: "Wrong credentials"})
        }

        return res.status(200).json({user}) // revisar data enviada al frontend


    } catch (error) {
        console.log("Server error while signing in: ", error);
        return res.status(500).json({ status: "failed signing in", message: "Internal server error signing in" })
    }

}


export const signOut = async (req, res) => {
    try {
        console.log("sign out");
        return res.status(200).json({ status: "succes signing out" })

    } catch (error) {
        console.log("Server error while signing out: ", error);
        return res.status(500).json({ status: "failed signing out", message: "Internal server error signing out" })
    }


}