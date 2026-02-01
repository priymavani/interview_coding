# 🚀 Interview Coding Preparation

A comprehensive collection of coding examples, interview questions, and hands-on implementations for **Node.js/Express.js** and **MongoDB** to help ace technical interviews.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Technologies Covered](#technologies-covered)
- [Quick Start](#quick-start)
- [Detailed Contents](#detailed-contents)
  - [01. Node.js & Express.js](#01-nodejs--expressjs)
  - [03. MongoDB](#03-mongodb)
- [Learning Path](#learning-path)
- [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This repository serves as a **complete interview preparation guide** covering:
- ✅ **Backend Development** with Node.js and Express.js
- ✅ **Database Operations** with MongoDB
- ✅ **Real-world implementations** of authentication, middleware, and CRUD operations
- ✅ **Interview-focused questions** and solutions

Perfect for developers preparing for **Full Stack**, **Backend**, or **MERN Stack** interviews.

---

## 📁 Repository Structure

```
interview_coding/
├── 01.node/                    # Node.js & Express.js implementations
│   ├── 01.Simple_express_server.js
│   ├── 02.JWT_loging_route.js
│   ├── Rate_Limit_Middleware.js
│   ├── package.json
│   └── README.md
│
└── 03.mongodb/                 # MongoDB operations and queries
    ├── 01.Core_Operations.md
    ├── 02.Data_Modeling_&_Relationships.md
    ├── 03.Aggregation_Framework.md.md
    ├── 04.Indexing_and_Performance.md
    ├── 05.Advanced_Queries_and_Features.md
    ├── 06.Backup_and_Restore.md
    └── 07.Administrative_and_Shell_Commands.md
```

---

## 💻 Technologies Covered

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **JWT (jsonwebtoken)** - Authentication & authorization
- **dotenv** - Environment variable management

### Database
- **MongoDB** - NoSQL database
- **Mongoose** (concepts covered)
- **Aggregation Framework**
- **Indexing & Performance Optimization**

### Middleware & Security
- Custom rate limiting
- Token-based authentication
- Role-based access control (RBAC)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/priymavani/interview_coding.git
cd interview_coding
```

2. **Install Node.js dependencies**
```bash
cd 01.node
npm install
```

3. **Set up environment variables**
Create a `.env` file in the `01.node` directory:
```env
JWT_SECRET=your_super_secret_key_here
PORT=7001
```

4. **Run the Express server**
```bash
# For simple Express server
node 01.Simple_express_server.js

# For JWT authentication server
node 02.JWT_loging_route.js
```

5. **For MongoDB practice**
```bash
# Start MongoDB service
mongod

# Open MongoDB shell
mongosh

# Follow the examples in 03.mongodb/ directory
```

---

## 📖 Detailed Contents

### 01. Node.js & Express.js

#### **🔹 01.Simple_express_server.js**
A complete Express.js server implementation featuring:
- ✅ RESTful API endpoints (GET, POST, PUT, PATCH, DELETE)
- ✅ User management CRUD operations
- ✅ Custom rate limiting middleware
- ✅ In-memory data storage

**Key Endpoints:**
```javascript
GET    /users/all      // Fetch all users
POST   /users          // Create a new user
GET    /users/:id      // Get user by ID
PUT    /users/:id      // Update entire user
PATCH  /users/:id      // Partially update user
DELETE /users/:id      // Delete user
```

#### **🔹 02.JWT_loging_route.js**
JWT-based authentication implementation:
- ✅ User login with JWT token generation
- ✅ Token verification middleware
- ✅ Protected routes
- ✅ Role-based access control (RBAC)

**Authentication Flow:**
```javascript
POST   /login          // Login & get JWT token
GET    /private        // Protected route (requires token)
GET    /admin          // Admin-only route (requires admin role)
```

**Usage Example:**
```bash
# Login to get token
curl -X POST http://localhost:7002/login \
  -H "Content-Type: application/json" \
  -d '{"name":"Priy","password":"258852"}'

# Access protected route
curl -X GET http://localhost:7002/private \
  -H "Authorization: YOUR_JWT_TOKEN"
```

#### **🔹 Rate_Limit_Middleware.js**
Custom rate limiting implementation:
- ✅ IP-based request tracking
- ✅ Time window management (1 hour)
- ✅ Configurable request limits (100 requests/hour)
- ✅ Memory-efficient using Map data structure

---

### 03. MongoDB

#### **📄 01.Core_Operations.md**
Fundamental MongoDB operations:
- Database and collection creation
- CRUD operations (Create, Read, Update, Delete)
- Query operators: `$and`, `$or`, `$not`, `$in`, `$nin`
- Comparison operators: `$gt`, `$gte`, `$lt`, `$lte`, `$eq`, `$ne`
- Update operators: `$set`, `$unset`, `$inc`, `$push`, `$pull`
- Array operations and document manipulation

#### **📄 02.Data_Modeling_&_Relationships.md**
Database design patterns:
- **Embedded Documents** (One-to-Many)
- **Referenced Documents** (One-to-Many)
- **Many-to-Many Relationships**
- Data modeling best practices
- When to embed vs. reference

#### **📄 03.Aggregation_Framework.md**
Advanced data processing:
- `$group` - Grouping and counting
- `$avg`, `$sum`, `$min`, `$max` - Aggregation operators
- `$match` - Filtering documents
- `$project` - Shaping output
- `$sort`, `$limit`, `$skip` - Result manipulation
- `$lookup` - Joining collections
- `$unwind` - Array deconstruction

#### **📄 04.Indexing_and_Performance.md**
Performance optimization:
- Single-field indexes
- Compound indexes
- Unique indexes
- Partial indexes
- TTL (Time-To-Live) indexes
- `.explain()` for query analysis
- Index management (create, view, drop)

#### **📄 05.Advanced_Queries_and_Features.md**
Special query capabilities:
- `$regex` - Pattern matching and text search
- Text indexes and full-text search
- Geospatial queries (`$near`, `$geoWithin`)
- Location-based searches
- 2dsphere indexes

#### **📄 06.Backup_and_Restore.md**
Database maintenance:
- `mongodump` - Backup operations
- `mongorestore` - Restore operations
- Single database backup
- Full server backup
- Collection-level backup/restore

#### **📄 07.Administrative_and_Shell_Commands.md**
MongoDB administration:
- Database switching and navigation
- Server status and monitoring
- Collection statistics
- Capped collections
- Schema validation
- Version checking

---

## 🎓 Learning Path

### For Beginners:
1. Start with **01.node/01.Simple_express_server.js** to understand Express.js basics
2. Move to **03.mongodb/01.Core_Operations.md** for MongoDB fundamentals
3. Practice **03.mongodb/02.Data_Modeling_&_Relationships.md** for schema design

### For Intermediate:
1. Study **01.node/02.JWT_loging_route.js** for authentication
2. Explore **03.mongodb/03.Aggregation_Framework.md** for complex queries
3. Learn **03.mongodb/04.Indexing_and_Performance.md** for optimization

### For Advanced:
1. Implement custom **01.node/Rate_Limit_Middleware.js** patterns
2. Master **03.mongodb/05.Advanced_Queries_and_Features.md** for specialized queries
3. Study **03.mongodb/06.Backup_and_Restore.md** for production scenarios

---

## 📋 Prerequisites

- Basic understanding of JavaScript
- Familiarity with REST API concepts
- Basic command line knowledge
- MongoDB installed locally or access to MongoDB Atlas

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add more examples or improve existing ones:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

**Priy Mavani**
- GitHub: [@priymavani](https://github.com/priymavani)

---

## ⭐ Show Your Support

If this repository helped you in your interview preparation, please give it a ⭐!

---

## 📞 Contact

For questions or suggestions, feel free to open an issue or reach out!

---

**Happy Learning! 🎉**
