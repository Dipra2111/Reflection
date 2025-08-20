const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userInfoRoutes = require("./routes/userInfoRoutes");
const moodRoutes = require("./routes/moodRoutes.js");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", authRoutes);
app.use("/api/userinfo", userInfoRoutes); // ✅ mounted correctly
app.use("/api/moods", moodRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
