require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const AdminUser = require("./src/models/AdminUser");

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "udayscriptsx@gmail.com";
  const password = "###@UDAY"; // Change this
  const name = "Super Admin";

  const passwordHash = await bcrypt.hash(password, 10);

  const admin = await AdminUser.create({
    email,
    passwordHash,
    name,
    roles: ["superadmin"]
  });

  console.log("Admin created successfully:");
  console.log(admin);

  await mongoose.disconnect();
}

createAdmin();
