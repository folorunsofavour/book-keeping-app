const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://favour_01:Chloe_garl1@cluster0.su2mo.mongodb.net/favour_01?retryWrites=true&w=majority', {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
    })
    .then(()=> console.log('DB Connected'))
    .catch(err => console.log(err));
};

module.exports = dbConnect;