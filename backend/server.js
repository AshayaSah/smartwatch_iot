const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors"); // Import the CORS package

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Your React app's URL
    methods: ["GET", "POST"],
    credentials: true, // Allow credentials if needed
  },
});

const PORT = 3000;

// Use CORS middleware
app.use(cors());

// Serve a simple HTML page (optional)
app.get("/", (req, res) => {
  res.send("<h1>Heart Rate Sensor Server</h1>");
});

// Listen for incoming connections
io.on("connection", (socket) => {
  console.log("A client connected.");

  // Listen for heart rate data from the Python client
  socket.on("heart_rate", (data) => {
    console.log(`Received heart rate: ${data.value}`);

    // Emit the heart rate data to all connected clients (including the React app)
    io.emit("heart_rate", { value: data.value });
    console.log(`Emitting heart rate data: ${data.value}`);
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected.");
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
