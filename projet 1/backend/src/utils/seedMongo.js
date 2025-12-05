require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");
const Team = require("../models/Team");

const seedMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const admin = await User.findOneAndUpdate(
      { email: "admin@example.com" },
      {
        username: "admin",
        email: "admin@example.com",
        password: "$2a$10$XQVZzM4YqwYhOJ4GVWB8/.rKZYL1qB8x6vJ4sZJqkqhB9M5Dh8jO2", 
        is_admin: true,
      },
      { upsert: true, new: true }
    );

    console.log("👑 Admin ready:", admin.username);

    const teams = [
      { name: "الفريق الأزرق", avatar: "🔵", color: "#3B82F6", points: 850, members: 12, created_by: admin._id },
      { name: "الفريق الأحمر", avatar: "🔴", color: "#EF4444", points: 720, members: 10, created_by: admin._id },
      { name: "الفريق الأخضر", avatar: "🟢", color: "#10B981", points: 680, members: 11, created_by: admin._id },
      { name: "الفريق الذهبي", avatar: "🟡", color: "#F59E0B", points: 550, members: 9,  created_by: admin._id }
    ];

    for (const t of teams) {
      await Team.findOneAndUpdate({ name: t.name }, t, { upsert: true });
    }

    console.log("🏆 Teams inserted successfully");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding MongoDB:", err);
    process.exit(1);
  }
};

seedMongo();
