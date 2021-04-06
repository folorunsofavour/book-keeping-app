const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// exports.User = async (req, res) => {
//     console.log(req.headers);
//     res.json(req.user);
// };

exports.UserRegister = async (req, res) => {
    try{
        const user = req.body;
        const userExists = await User.findOne({email: user.email });

        if (userExists){
            return res.status(401).json({message: 'User Exist' });
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const newpassword = await bcrypt.hash(user.password, salt);
            const saveuser = new User({...user, password: newpassword});
            await saveuser.save();

            const data = {
                _id: saveuser._id,
                name: saveuser.name,
                password: saveuser.password,
                email: saveuser.email,
                token: generateToken(saveuser._id),
            };
            return res.status(200).json({message: 'User Registered Successfully', data: data });
        }
        
    }catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}` });
    }
};

isPasswordMatch = async (enteredPassword, usersPassword) => {
    return await bcrypt.compare(enteredPassword, usersPassword)
};

exports.UserLogin = async (req, res) => {

    try {

        const userLogin = req.body;
        const user = await User.findOne({email: userLogin.email});
        
        if(user && (await isPasswordMatch(userLogin.password, user.password))){

            const data = {
                _id: user._id,
                name: user.name,
                password: user.password,
                email: user.email,
                token: generateToken(user._id),
            };
            // return data
            return res.status(200).json({message: 'User Registered Successfully', data: data });
        }
        else{
            return res.status(401).json({message: 'Invalid Credential' });
        }

    } catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}` });        
    }
    
};

exports.UserProfile = async (req, res) => {

    try {
        const user = await User.findById(req.user._id).populate('books');

        if(!user){
            return res.status(401).json({message: 'You cannot check Profile' });
        }
        else{
            return res.status(200).json({ data: user });
        }
        
    } catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}` }); 
    }

};

exports.UserUpdate = async (req, res) => {
    // const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true, useFindAndModify: true}) This OR
    try {

        const user = await User.findById(req.user._id);
    
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            
            const salt = await bcrypt.genSalt(10);
            user.password = req.body.password !== null ? await bcrypt.hash(req.body.password, salt) : user.password;

            const updatedUser = await user.save();

            return res.status(200).json({ message:'User Profile Updated Successfully', data: updatedUser });
        }

    } catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}` }); 
    }
    
};

// exports.UserDelete = async (req, res) => {
//     res.json('Delete Route')
// };