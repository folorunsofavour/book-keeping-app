const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.User = async (req, res) => {
    console.log(req.headers);
    res.json(req.user);
};

exports.UserRegister = async (req, res) => {
    try{
        // const {name, email, password} = req.body;
        // const user = await User.create({ name, email, password});

        const user = req.body;
        
        // const password = req.body.password;

        const userExists = await User.findOne({email: user.email });

        if (userExists){
            throw new Error('User Exist');
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const newpassword = await bcrypt.hash(user.password, salt);
            const saveuser = new User({...user, password: newpassword});
            await saveuser.save();

            console.log(saveuser);

            res.json({ saveuser});
        }
        
    }catch (error) {
        res.json(error.message);
    }
};

// isPassword = async function(enteredPassword, usersPassword){
//     return await bcrypt.compare(enteredPassword, usersPassword)
// };  This OR

isPasswordMatch = async (enteredPassword, usersPassword) => {
    return await bcrypt.compare(enteredPassword, usersPassword)
};

exports.UserLogin = async (req, res) => {
    const userLogin = req.body;
    const user = await User.findOne({email: userLogin.email});
    

    if(user && (await isPasswordMatch(userLogin.password, user.password))){
        //Set status code
        res.status(200);
        res.json({
            // _id: user._id,
            // name: user.name,
            // password: user.password,
            // email: user.email
            userdetails: user,
            token: generateToken(user._id),
        })
        console.log(req.headers);
    }
    else{
        res.status(401);
        throw new Error('Invalid Credentials');
    }
};

exports.UserUpdate = async (req, res) => {
    // const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true, useFindAndModify: true}) This OR

    const user = await User.findById(req.user._id);
    
    if(user){
        const updatedUser = await user.save(req.body);
        res.json(updatedUser);
    }
};

exports.UserDelete = async (req, res) => {
    res.json('Delete Route')
};