const express = require('express');
const rateLimiter = require("./Rate_Limit_Middleware.js");
const app = express();
const port = 7001;

let users = [
    { id: 1, name: "Priy Mavani", Profession: "Web Developer", age: 20 , role : "admin" },
    { id: 2, name: "Jay Mavani", Profession: "Technician", age: 20,role : "admin" },
    { id: 3, name: "Raj Patel", Profession: "UI Designer", age: 21 },
    { id: 4, name: "Dev Joshi", Profession: "Backend Developer", age: 22 },
    { id: 5, name: "Kishan Parmar", Profession: "Frontend Developer", age: 20 },
    { id: 6, name: "Yash Vyas", Profession: "DevOps Engineer", age: 23 },
    { id: 7, name: "Sahil Shah", Profession: "Software Engineer", age: 21 },
    { id: 8, name: "Ravi Thakkar", Profession: "QA Tester", age: 22 },
    { id: 9, name: "Meet Dave", Profession: "UI/UX Designer", age: 20 },
    { id: 10, name: "Dhruv Patel", Profession: "Database Admin", age: 23 },
    { id: 11, name: "Bhargav Makwana", Profession: "Tech Support", age: 21 },
    { id: 12, name: "Vatsal Mehta", Profession: "System Analyst", age: 22 },
    { id: 13, name: "Jeel Gohil", Profession: "App Developer", age: 20 },
    { id: 14, name: "Harshil Rana", Profession: "Python Developer", age: 22 },
    { id: 15, name: "Vivek Pandya", Profession: "Full Stack Developer", age: 24 },
    { id: 16, name: "Neel Trivedi", Profession: "Data Analyst", age: 21 },
    { id: 17, name: "Om Patel", Profession: "Ethical Hacker", age: 22 },
    { id: 18, name: "Manav Shah", Profession: "Security Analyst", age: 20 },
    { id: 19, name: "Akash Dodia", Profession: "AI Engineer", age: 23 },
    { id: 20, name: "Rahil Patel", Profession: "Cloud Architect", age: 24 }
  ];
  

  app.use(express.json());
  app.use(rateLimiter);
  
// 2. GET All Users (Static or From Memory)
app.get('/users/all',(req,res) =>{
    
    res.json(users);
});


// 3. POST New User
app.post('/users' , (req,res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "user added successfully" , user: newUser});
})

// 4. GET User by ID
app.get('/users/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({message: "User not found"});
    }

    res.status(200).json({message : ` Id ${id} user found` , user : user});

})

// 5. PUT to Update Entire User
app.put('/users/:id' , (req,res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if(index === -1){
        return res.status(404).json({message : "User not found"});
    }

    const updateUser = req.body;

    updateUser.id = id ;
    users[index] = updateUser;

    res.status(200).json({message : "user updated successfully" , user : updateUser});
    
})

// 6. PATCH to Partially Update a User
app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const update = req.body;

    Object.assign(user, update);
    // merge the change part of the user object 

    res.status(200).json({ message: "User updated successfully", user });
});

// 7. DELETE a User
app.delete('/users/:id' , (req,res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if(index === -1){
        return res.status(404).json({message : "User not found"});

    }

    users.splice(index, 1);

    res.status(200).json({message : "user deleted successfully"});

})

// 13. Pagination for GET /users
//  Sort or Filter Users by Query
// GET /users?page=2&limit=10
app.get('/users', (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    const role = req.query.role;
    const name = req.query.name;

    if (page < 1) page = 1;
    if (limit < 1) limit = 10;

    let filteredUsers = users;

    if (role) {
        filteredUsers = filteredUsers.filter(user => user.role === role);
    }
    if (name) {
        filteredUsers = filteredUsers.filter(user => user.name === name);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    res.json({
        page,
        limit,
        totalUsers: filteredUsers.length,
        totalPages: Math.ceil(filteredUsers.length / limit),
        users: paginatedUsers
    });
});



app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});
