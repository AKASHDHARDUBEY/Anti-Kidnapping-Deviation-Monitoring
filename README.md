# 🚨 Passive Ride-Share Intent Detection

### 🔐 Shifting Safety from Reactive → Proactive Monitoring

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/Node.js-v18+-green)
![React Native](https://img.shields.io/badge/React_Native-v0.70+-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![AWS](https://img.shields.io/badge/AWS-EC2-orange)

---

## 📖 Overview

Most ride-share safety apps rely on SOS/Panic Buttons. However, in real kidnapping scenarios, victims are often threatened, frozen in fear, or lose access to their phones.

This project introduces a **passive safety system** that continuously monitors rides in the background and automatically detects suspicious behavior such as route deviation or abnormal stops.

If a potential threat is detected, the system triggers a **Silent Dispatch** to emergency contacts without requiring user interaction.

---

## ⚙️ System Architecture

### 📊 Architecture Diagram

```text
React Native App
      ↓
Socket.io (WebSocket)
      ↓
Node.js Backend (AWS EC2)
      ↓
Redis (Cache)
      ↓
MongoDB Atlas
      ↓
Firebase FCM
```

### 🔄 Data Flow

* React Native app streams GPS via WebSockets
* Backend processes location in real-time
* Redis stores live location & route polyline
* Logic engine detects deviation
* Firebase sends silent alerts
* MongoDB logs incidents

---

## 🛠️ Tech Stack

| Layer     | Technology        | Purpose              |
| --------- | ----------------- | -------------------- |
| Frontend  | React Native      | UI + Background GPS  |
| Backend   | Node.js + Express | Logic & APIs         |
| Real-time | Socket.io         | Live streaming       |
| Cache     | Redis             | Fast location access |
| Database  | MongoDB Atlas     | Persistent storage   |
| Auth      | Firebase Auth     | User login           |
| Alerts    | Firebase FCM      | Notifications        |
| Maps      | Google Maps API   | Route calculation    |
| Hosting   | AWS EC2           | Deployment           |

---

## 🏗️ Engineering Design (Backend Focus)

### 1️⃣ Service-Repository Pattern

* Controllers → Handle requests
* Services → Business logic
* Repositories → Database operations

### 2️⃣ OOP Principles

* Encapsulation → Modular services
* Abstraction → Simplified interfaces
* SRP → Each class has one responsibility

### 3️⃣ Performance Optimizations

* Polyline caching (avoid API calls)
* Redis for real-time processing
* WebSockets for low latency

---

## 📁 Backend Structure

```
src/
  controllers/
  services/
  repositories/
  models/
  cache/
  utils/
  config/
  routes/
```

---

## 🚀 Installation & Setup

### Backend

```bash
git clone https://github.com/yourusername/project
cd backend
npm install
```

Create `.env`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
REDIS_URL=redis://localhost:6379
GOOGLE_MAPS_KEY=your_key
FIREBASE_SERVER_KEY=your_key
```

Run server:

```bash
pm2 start server.js
```

---

## 📈 Future Enhancements

* AI-based behavior detection
* Voice-trigger alerts
* Signal loss detection

---

## 👨‍💻 Author

Akash Dhar Dubey

---

## 🌍 Real-World Impact

This system enables proactive safety by detecting danger before it escalates, potentially saving lives in critical situations.
