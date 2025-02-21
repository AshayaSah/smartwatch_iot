# Raspberry Pi Sensor Data Streaming Project 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A real-time IoT system that collects sensor data from Raspberry Pi and streams it to a web interface.

## 📝 Overview
This project implements a complete IoT pipeline that:
1. Collects sensor data from Raspberry Pi using Python
2. Transmits data in real-time using Socket.IO
3. Processes data through a Node.js backend
4. Visualizes data in a responsive React/Next.js frontend

## ✨ Features
- **Real-time Data Streaming**: Instant updates using Socket.IO bi-directional communication
- **Sensor Integration**: Flexible Python interface for various sensors (DHT11, motion, etc.)
- **Responsive Dashboard**: Interactive web interface with live graphs and metrics
- **Modern Stack**: Built with React.js, Tailwind CSS, and ShadCN UI components

## 🛠️ Technologies
| Category       | Technologies                          |
|----------------|---------------------------------------|
| **IoT**        | Raspberry Pi, Python, GPIO            |
| **Backend**    | Node.js, Express, Socket.IO           |
| **Frontend**   | React                                 |
| **Styling**    | Tailwind CSS, ShadCN UI Component Lib |
| **Tooling**    | npm, pip, Vercel                      |

## 📂 Folder Structure
```text
project-root/
├── backend/           # Socket.IO server and API
│   ├── server.js      # WebSocket server configuration
│   ├── routes/        # REST API endpoints
│   └── package.json   # Node.js dependencies
├── frontend/          # React application
│   ├── pages/         # React.js routing system
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   └── package.json   # Frontend dependencies
├── sensor_read/      # Sensor integration
│   ├── sensor.py      # Main data collection script
│   └── requirements.txt # Python dependencies
└── README.md
