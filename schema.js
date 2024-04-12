const express =require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.json());//middleware…parsing the data from object to json format.

app.use(express.static(path.join(__dirname, 'public')))
//connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/user_management_db')
.then(()=> console.log('Connected to MongoDB'))
.catch(err=> console.error('error connecting to mongoDB: ',err));

//Define user schema

const userSchema = new mongoose.Schema({
name: String,
email: String,
password: String
});

const User = mongoose.model('User',userSchema);

//routeHandlers

//GET
app.get('/users',(req,res)=>{
User.find({})
.then(users => res.json(users))
.catch(err => res.status(500).json({message: err.message}));
});

//POST
app.post('/users',(req,res)=>{
const user = new User({
name: req.body.name,
email: req.body.email,
password: req.body.password
});

user.save()
.then(newUser => res.status(201).json(newUser))
.catch(err => res.status(400).json({message:err.message}));
});

//PUT
app.put('/users/:id',(req,res)=>{
const userId = req.params.id;
const updateData={
name: req.body.name,
email: req.body.email,
password: req.body.password
};

User.findByIdAndUpdate(userId, updateData, {new: true})
.then(updatedUser =>{
    if(!updatedUser){
        return res.status(404).json({message: 'User not found'});
    }
    res.json(updatedUser);
})
.catch(err=> res.status(400).json({message: err.message}));
});

app.listen(PORT);