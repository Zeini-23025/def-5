const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, default: "🔵" },
  color: { type: String, default: "#3B82F6" },
  points: { type: Number, default: 0, index: true },
  members: { type: Number, default: 0 },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);

