Passive Ride-Share Intent Detection
Shifting Safety from Reactive (Panic Buttons) to Proactive (Passive Monitoring)
![alt text](https://img.shields.io/badge/license-MIT-blue.svg)

![alt text](https://img.shields.io/badge/Node.js-v18+-green)

![alt text](https://img.shields.io/badge/React_Native-v0.70+-blue)

![alt text](https://img.shields.io/badge/MongoDB-Atlas-green)

![alt text](https://img.shields.io/badge/AWS-EC2-orange)
📖 Overview
Most ride-share safety apps rely on SOS/Panic Buttons. However, in real kidnapping scenarios, victims are often threatened, frozen in fear, or lose access to their phones.
S4H-1 is a passive safety system that monitors a ride in the background. It uses real-time GPS streaming and geospatial logic to detect if a driver has deviated from the expected route or stopped in a high-risk zone. If "kidnapping intent" is detected, the system triggers a Silent Dispatch to emergency authorities without requiring any user interaction.
⚙️ System Architecture
The system is designed for high throughput and low latency to ensure that emergency alerts are sent within seconds of a deviation.
Data Flow:
Client (React Native) 
→
→
 Streams live GPS coordinates via WebSockets (Socket.io).
Backend (Node.js) 
→
→
 Receives coordinates and fetches the trip's Polyline from the cache.
Cache (Redis) 
→
→
 Stores the latest location and route data for millisecond-level retrieval.
Logic Engine 
→
→
 Calculates the perpendicular distance between the current GPS point and the safe corridor.
Trigger 
→
→
 If deviation exceeds the threshold, Firebase FCM sends a silent alert to authorities and MongoDB Atlas logs the incident.
🛠️ Tech Stack
Layer	Technology	Purpose
Frontend	React Native	Background GPS tracking & User Interface.
Backend	Node.js (Express)	Business logic and API orchestration.
Real-time	Socket.io	Low-latency bi-directional GPS streaming.
Hot Storage	Redis	Caching live coordinates & route polylines.
Cold Storage	MongoDB Atlas	Persistent storage for User profiles and Incident logs.
Infrastructure	AWS EC2	Hosting the backend with PM2 for process management.
Alerts	Firebase FCM	Sending silent push notifications to authorities.
Maps	Google Maps API	Route calculation and Polyline generation.
🏗️ Engineering Design (Backend Focus)
To ensure scalability and maintainability, the backend follows Software Engineering best practices:
1. Design Pattern: Service-Repository Pattern
I have decoupled the application into three distinct layers:
Controllers: Handle incoming requests (REST/Sockets) and validate input.
Services: Contain the "Brain" of the app (e.g., DeviationService.js handles the math).
Repositories: Handle all database interactions (MongoDB/Redis), ensuring the service layer doesn't care where the data is stored.
2. OOP Principles Applied
Encapsulation: Each service (Notification, Location, Trip) is a separate module with private internal logic.
Abstraction: The NotificationService provides a generic sendAlert() method, hiding the complexity of Firebase API calls.
Single Responsibility Principle (SRP): The DeviationDetector class is solely responsible for geospatial math and nothing else.
3. Performance Optimizations
Polyline Caching: To avoid expensive Google Maps API calls, the route is fetched once at the start of the trip and stored in Redis.
Geospatial Indexing: MongoDB 2dsphere indexes are used for efficient high-risk zone queries.
🚀 Installation & Setup
Prerequisites
Node.js v18+
MongoDB Atlas Account
AWS EC2 Instance (Ubuntu)
Google Maps API Key
Firebase Account
Backend Setup
Clone the repo:
code
Bash
git clone https://github.com/yourusername/S4H-1-Safety.git
cd S4H-1-Safety/backend
Install dependencies:
code
Bash
npm install
Create a .env file:
code
Env
PORT=5000
MONGO_URI=your_mongodb_uri
REDIS_URL=redis://localhost:6379
GOOGLE_MAPS_KEY=your_key
FIREBASE_SERVER_KEY=your_fcm_key
Start the server with PM2:
code
Bash
pm2 start server.js --name "safety-backend"
Frontend Setup
Navigate to the app folder:
code
Bash
cd ../frontend
npm install
Run the app:
code
Bash
npx react-native run-android # or run-ios
📈 Future Enhancements

AI Behavior Analysis: Integrate Machine Learning to detect "aggressive driving" patterns.

Audio Trigger: Implement background voice-keyword detection (e.g., "Help Me").

Dead-man's Switch: Trigger alerts if the phone's signal is lost abruptly (Faraday bag detection).
👥 Contributors
Your Name - Lead Developer (GitHub: @yourusername)
📝 License
This project is licensed under the MIT License.