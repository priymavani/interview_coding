const express = require('express');
const app = express();
const port = 7001;

let users =[ {
    id:1,
    name: "Priy mavani",
    Profession: "web developer",
    age: 20
},
{
    id:2,
    name: "Jay mavani",
    Profession: "Technician",
    age: 20
}
]

// 2. GET All Users (Static or From Memory)
app.use(express.json());

app.get('/users',(req,res) =>{
    
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

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});
