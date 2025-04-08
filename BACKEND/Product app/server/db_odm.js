const mongoose = require("mongoose");

const mongo_URL = "mongodb://localhost:27017/testdb"; 
mongoose.connect(mongo_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch(err => {
  console.log("DB Connection Error:", err.message);
});

// Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

const User = mongoose.model("User", userSchema);

// Create a user
const createUser = async () => {
  try {
    const newUser = new User({
      name: "Aditya Tiwari",
      email: "at999@gmail.com",
      age: 32
    });

    const user = await newUser.save();
    console.log("User Created Successfully:", user);
  } catch (err) {
    console.log("User Creation Error:", err.message);
  }
};


const getUser = async () => {
  try {
    const users = await User.find();
    console.log("List of Users:", users);
  } catch (err) {
    console.log("User Fetching Error:", err.message);
  }
};


const updateUser = async () => {
  try {
    const updated = await User.findOneAndUpdate(
      { name: "Aditya" }, 
      { $set: { name: "Aditya Tiwari" } },
      { new: true }
    );

    if (updated) {
      console.log("User updated successfully:", updated);
    } else {
      console.log("User not found to update.");
    }
  } catch (err) {
    console.log("User Updation Error:", err.message);
  }
};


// updateUser();
const deleteUser=async()=>{
    try{
        await User.deleteOne({name:"Aditya Tiwari"});
        console.log("User Deleted Successfully")
    }
    catch(err){
        console.log("User Deletion error")
    }
  
}
const app=async()=>{
    await createUser();
    await updateUser();

    await getUser();
    await deleteUser();
    await getUser
}
app();
