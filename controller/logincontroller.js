const mongoose =require("mongoose")
const user = require("../model/usermodel");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken");
const app  = require("../app");
require("dotenv").config();



const logincontroller = {
    register : async (req,res)=>{
         try {
            console.log("register login");
            console.log(req.body);
            
           const { username , email,password} = req.body

           const verifyemail = await user.findOne({email:email}) 

           if(verifyemail){
            return res.status(400).json({message:"user already there"})
           }

      const hashpassword = await  bcrypt.hash(password , 10)
           const newuser = new user ({
            username ,  email,password : hashpassword
           })

           await newuser.save()

           res.status(200).json({mesage:"user created successfully"})
            
            
         } catch (err) {
            res.status(400).json({message:err.meaasge})
         }
    },
    admin : async(req,res)=>{
        try {
           
            
             const alldata =await user.find()
            
             
          res.status(200).json(alldata)
               
        } catch (error) {
            res.status(400).json({meaasge:error.message})
            
        }
        
    },
    
    login : async (req,res)=>{

        try {
            console.log("login");

            const {email ,password} = req.body
    
        const verifyuser = await user.findOne({email:email})

        if(!verifyuser){
          return  res.status(400).json({ message:"This is a new user"})
        }

        const uniquepassword = await bcrypt.compare(password, verifyuser.password)

        if(!uniquepassword){
          return   res.status(400).json({meaasge:"wrong password"})
        }

        const token =  jwt.sign({id :user._id} ,process.env.jwt_secert)

      
         

        res.cookie("token", token , {httpOnly :true})

        return res.status(200).json({ message: 'Login successful! Now try the various endpoints like users and me'}); 
         
         return res.status(200).json({message :" login successfull"})

        } catch (err) {
           res.status(400).json({message:err.mesage})
        }
    },
    logout : async (req,res)=>{
        try {
         console.log("logout");
         res.clearCookie('token');

         return res.status(200).json({message:"logout successfully"})
        
        } catch (err) {
           res.status(400).json({message:err.message})
        }

    },
    me : async(req,res)=>{
       try {
         console.log("me is login");
         const userid  =  req.userid;

         const User = await user.findOne(userid)
         
        //  const user =await user.findbyID(userid).select("-password -__v -createdAT -updateAt -.id")
         console.log(  "user is " + User);
         
         return res.status(200).json(User)

       }
        catch (err) {
          res.status(400).json({message : err.meaasge})
       }
    }
}


module.exports = logincontroller;