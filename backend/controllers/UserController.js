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

            // console.log(saveuser);

            // res.json({ saveuser});s
            res.json({
                userCreated: saveuser,
                // _id: saveuser._id,
                // name: saveuser.name,
                // password: saveuser.password,
                // email: saveuser.password,
                token: generateToken(saveuser._id),
              });
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

exports.UserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('books');

        if(!user){
            throw new Error('You do not have any Profile, please register!!!');
        }
        res.status(200);
        res.json(user);
    } catch (error) {
        res.status(500);
        throw new Error('Server error');
    }
};

exports.UserUpdate = async (req, res) => {
    // const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true, useFindAndModify: true}) This OR
    try {
        const user = await User.findById(req.user._id);
    
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;

            if(req.body.password) {
                user.password = req.body.password || user.password;
            }

            const updatedUser = await user.save();

            res.status(200);
            res.json(updatedUser);
        }
    } catch (error) {
        res.status(500);
        throw new Error('Error Occured');
    }
    
};

exports.UserDelete = async (req, res) => {
    res.json('Delete Route')
};