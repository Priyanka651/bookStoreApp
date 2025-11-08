import User from "../model/user.model.js";
import bcrypt from "bcryptjs";


export const signup=async(req,res)=>{
    try{
        const{fullname,email,password}=req.body;
        
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        //secuing pasd 
    const hashPassword= await bcrypt.hash(password,10);


        const createdUser=new User({
            fullname:fullname,
            email: email,
            password:hashPassword,

        })
        await createdUser.save()
    //     res.status(201).json({message:"User created successfuly"})
    // } 
    res.status(201).json({
  message:"User created successfully",
  user: {
    _id: createdUser._id,
    fullname: createdUser.fullname,
    email: createdUser.email,
  }
})
    } 
    catch(error){
        console.log("Error:" +error.message)
        res.status(500).json({message:"Internal server error"})

    }
};

//login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1: Find the user in the database
    const user = await User.findOne({ email });

    // Step 2: If user not found, return error
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Step 3: If user found, compare entered password with saved hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // Step 4: If password is wrong, return error
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Step 5: If everything is correct, send success message
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


//for login
// export const login=async(req,res)=>{
//     try{
//     const{email,password}=req.body;
    
//     const user=await User.findOne({email});
//     const isMatch=await bcryptjs.compare(password, user.password);

//     if(!user||!isMatch){
//         return res.status(400).json({message:"invalid username or password"});
//     }else{
//          res.status(200).json({
//             message:"login successfully",
//              user:
//             {
//                 _id:user._id,
//                 fullname:user.fullname,
//                 email:user.email,
//             },
//         });
//     }

//     }catch(error){
//     console.log("Error:"+error.message)
//     res.status (500).json({message:"internal server error"});
//     }
// };