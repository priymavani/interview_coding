const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 7002;
require('dotenv').config();

app.use(express.json());

const user = {
    id:1,
    name : "Priy",
    password : "258852",
    role : "admin"
};

// Middleware to Protect Private Routes
function auth_token(req , res , next){
    const authHeader = req.headers['authorization'];

    const  token = authHeader;

    if(!token){
        return res.status(401).json({message : "Access denied - No token provided"});
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
};

//Middleware to Check Role
function checkRole(role) {
    return(req,res,next) => {
        if(req.user.role !== role){
            return res.status(403).json({message : "Access denied"});
        }
        next();
    }
}

// JWT Authentication - Login Route
app.post('/login', (req,res) => {
    const {name , password} = req.body;

    if(name !== user.name || password !== user.password){
        return res.status(401).json({message : "Invalid details"});
    }

    const payload = {
        id : user.id,
        name : user.name,
        role : user.role

    };

    const token = jwt.sign(payload, process.env.JWT_SECRET , {expiresIn: '5h'});

    res.status(200).json({message : "Login successful" , token});
})

// private protected route
app.get('/private' , auth_token , (req,res) => {
    res.json({message : `hello ${req.user.name} , this private route`});
})

// Role base protected route
app.get('/admin', auth_token, checkRole("admin"), (req, res) => {
    res.send("Welcome to Role base protected route");
});


app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
})