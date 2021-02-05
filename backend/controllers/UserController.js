const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.User = async (req, res) => {
    res.json('Users');
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
        }else{
            const salt = await bcrypt.genSalt(10);
            const newpassword = await bcrypt.hash(user.password, salt);
            const saveuser = new User({...user, password: newpassword});
            // await saveuser.save();

            console.log(saveuser);

            res.json({ saveuser});
        }
        
    }catch (error) {
        res.json(error.message);
    }
};

exports.UserLogin = async (req, res) => {
    const userLogin = req.body;
    const user = await User.findOne({email: userLogin.email});

    if(user){
        //Set status code
        res.status(200);
        res.json({
            // _id: user._id,
            // name: user.name,
            // password: user.password,
            // email: user.email
            userdetails: user
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid Credentials');
    }
};

exports.UserUpdate = async (req, res) => {
    res.json('Update Route')
};

exports.UserDelete = async (req, res) => {
    res.json('Delete Route')
};