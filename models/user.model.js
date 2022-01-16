const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 3,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// userSchema.virtual("bookingsMade", {
//   ref: "Booking", //The Model to use
//   localField: "_id", //Find in Model, where localField
//   foreignField: "customer", // is equal to foreignField
// });

// Set Object and Json property to true. Default is set to false
userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
