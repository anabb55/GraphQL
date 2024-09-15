const { gql } = require("apollo-server"); //gql translates graphQL code into code which is understandable for javascript

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  input UserInput {
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    filterUsers(name: String, email: String): [User!]!
  }

  type Mutation {
    addUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
  }
`;
