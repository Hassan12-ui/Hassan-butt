import User from "../models/Usermodel.js";
import bcrypt from 'bcrypt'

export const home = async(res,req)=>{
    try {
       await res.send("home page").status(200)
    } catch (error) {
        res.send({message:"home page crash"}).status(400)
    }
}

export const register = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create the new user
        const newUser = new User({
            name,
            email,
            password, // Password will be hashed in the pre-save hook
            phone,
            address
        });

        // Save the user
        await newUser.save();

        // Generate a token
        const token = await newUser.generateToken();

        // Send response with the token
        res.status(200).json({
            message: "User registered successfully",
            token,
            user: newUser
        });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    try {
        // Check if req.body is defined
        if (!req.body) {
            return res.status(400).json({ message: "Request body is missing" });
        }
        
        const { email, password } = req.body;
        
        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        
        // Find user by email
        const existedUser = await User.findOne({ email });
        
        // Check if user exists
        if (!existedUser) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        // Compare passwords securely
        const isPasswordValid = await existedUser.comparePassword(password);
        
        if (isPasswordValid) {
            // Passwords match, login successful
            return res.status(200).json({
                message: "Login successful",
                user: existedUser
            });
        } else {
            // Passwords do not match
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 }).exec();
        console.log('Fetched users:', users);

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};


export const DeleteUser=async(req,res)=>{
    try {
        const  UserId=req.params.id
        const deleteduser=await User.findByIdAndDelete(UserId);
        if(!deleteduser){
            return res.status(404).json({success:false,Message:"No User Found!"})
        }else{
            return  res.status(200).json({success:true,Message:"Successfully deleted user!",deleteduser});
        }

    } catch (error) {
    console.log(error)   
    return res.status(500).json({success:false,Message:"Internal server error",error}) 
    }
}