const mongoose = require("mongoose");
const mongooseBcrypt = require("mongoose-bcrypt");

let UserSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
      unique: true,
   },
   email: {
      type: String,
      require: true,
      unique: true,
   },
   admin: {
      type: Boolean,
      default: false,
   },
});

//UserSchema.plugin(mongooseBcrypt);

const User = mongoose.model("User", UserSchema);
module.exports = User;
