const { Query } = require("mongoose");
const User = require("../models/User");

module.exports = {
  Query: {
    async users() {
      return await User.find();
    },

    async filterUsers(_, { name, email }) {
      const filter = {};

      if (name) {
        filter.name = { $regex: name, $options: "i" };
      }

      if (email) {
        filter.email = email;
      }

      const users = await User.find(filter);
      return users;
    },
  },

  Mutation: {
    async addUser(_, { userInput: { name, email } }) {
      try {
        const createdUser = new User({
          name: name,
          email: email,
        });

        const res = await createdUser.save(); //MongoDB saving

        return {
          id: res.id,
          name: res.name,
          email: res.email,
        };
      } catch (err) {
        throw new Error(err.message);
      }
    },

    async deleteUser(_, { ID }) {
      const wasDeleted = (await User.deleteOne({ _id: ID })).deletedCount; //deleteOne fuc has 3 returned values
      return wasDeleted; //1 is something was deleted or 0 if nothing was deleted
    },
  },
};
