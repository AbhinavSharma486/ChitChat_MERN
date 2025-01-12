import { config } from "dotenv";
import connectDB from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "neelam@gmail.com",
    fullName: "Neelam Sharma",
    password: "123456",
    profilePic: "",
  },
  {
    email: "neha@gmail.com",
    fullName: "Neha Sharma",
    password: "123456",
    profilePic: "",
  },
  {
    email: "nidhi@gmail.com",
    fullName: "Nidhi Sharma",
    password: "123456",
    profilePic: "",
  },
  {
    email: "manu@gmail.com",
    fullName: "Manu Sharma",
    password: "123456",
    profilePic: "",
  },

  // Male Users
  {
    email: "arnav@gmail.com",
    fullName: "Arnav Verma",
    password: "123456",
    profilePic: "",
  },
  {
    email: "dhruv@gmail.com",
    fullName: "Dhruv Sharma",
    password: "123456",
    profilePic: "",
  },
  {
    email: "shashi@gmail.com",
    fullName: "Shashi Kant Bhardwaj",
    password: "123456",
    profilePic: "",
  },
  {
    email: "ajju@gmail.com",
    fullName: "Ajju Bhardwaj",
    password: "123456",
    profilePic: "",
  },
  {
    email: "nishant@gmail.com",
    fullName: "Nishant kaushik",
    password: "123456",
    profilePic: "",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
