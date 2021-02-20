const mongoose = require("mongoose");
const mongooseBcrypt = require("mongoose-bcrypt");

let UserSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   apellido: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      require: true,
      unique: true,
   },
   telefono: {
      type: Number,
      required: true,
   },
   admin: {
      type: Boolean,
      default: false,
   },
});

UserSchema.plugin(mongooseBcrypt);

UserSchema.pre("save", function (next) {
   User.countDocuments({}).then((count) => {
      if (count === 0) {
         this.admin = true;
         next();
      }
      next();
   });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
