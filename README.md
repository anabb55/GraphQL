## GraphQL API with Apollo Server, MongoDB, and Mongoose
This project is a simple GraphQL API for managing users, built using Apollo Server, MongoDB, and Mongoose. The API allows you to create new users and retrieve existing users, with the ability to filter by name and email.

# Features
- **GraphQL API:** A flexible GraphQL API for managing user data, with queries and mutations.
- **User Management:**
    - Create users with a name and email.
    - Retrieve all users.
    - Filter users by name (with regex for partial matching) and email (exact match).
    - Delete user by ID
- **MongoDB:** Data persistence using MongoDB, a NoSQL database.
- **Mongoose:** MongoDB object modeling for Node.js, providing schema-based data validation.

# Setup
To run this project locally, follow these steps:

**Prerequisites**
- **Node.js** installed (v14 or higher)
- **MongoDB** Atlas account (or a locally installed MongoDB server)
  
**Installation**
1. Clone this repository:
```javascript
git clone https://github.com/anabb55/GraphQL.git
cd GraphQL
```

2. Instal dependencies:
  ```javascript
npm install
```

3. Set up your MongoDB connection:
Replace the MONGODB connection string with your own MongoDB Atlas or local MongoDB URI in the index.js file:
 ```javascript
const MONGODB =
  "your-mongodb-connection-string";
```

4. Run the server:
```javascript
npm start
```
