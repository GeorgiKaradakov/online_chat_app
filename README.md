# Online Chat App

Welcome to the Online Chat App! This real-time chat application lets users join chat rooms and communicate with others instantly. Built with a React frontend and a Flask backend, the app uses WebSockets for seamless, real-time messaging.

## 📜 Description

The Online Chat App allows users to create and join chat rooms using unique room codes. Users can send and receive messages instantly, view messages from others, and experience smooth, real-time communication across devices. 

### Key Features

- **Create Rooms**: Start a new chat room with a unique room code.
- **Join Rooms**: Enter a room code to join an existing chat room.
- **Real-Time Messaging**: Messages appear instantly using WebSockets.
- **Persistent Chat History**: Messages are saved for each room, allowing you to view previous messages on reload.

## 🚀 What Can You Do?

1. **Create a Room**: Start a new chat room by generating a unique room code.
2. **Join a Room**: Enter a room code to join an existing conversation.
3. **Chat in Real-Time**: Send messages in real time, and see responses instantly.
4. **Stay Synced Across Devices**: Join from any device, and the chat will sync up for all users.

## 🛠 How to Run the App

### Prerequisites

- **Python 3.x** and **pip**
- **npm**
- **Redis** (for managing sessions with Flask-SocketIO)

### Backend Setup (Flask)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/online-chat-app.git
   cd online-chat-app/backend

2. Create a virtual environment and install the required python packages:

  python3 -m venv venv       # on Windows: python -m venv venv
  source venv/bin/activate   # On Windows: venv\Scripts\activate

3. Install python dependencies:

  pip install -r requirements.txt

4. Check the port on which redis runs:

  redis-cli ping # Change the config.py file if redis runs on a different port for you

5. Run the flask server
  python3 main.py # On Windows: python main.py

### Frontend setup (React)

1. Navigate to the frontend directory:

  cd ../frontend

2. Install node dependecies

  npm install

3. Run the React App:

  npm run dev


### 📚 Additional Notes

  - Configuration: Both frontend and backend configurations can be adjusted in their respective directories.
  - Session Handling: Redis is used to store user session data.
  - Database: SQLite is used as the database to store chat history.
  - Testing: Open multiple tabs or browsers to simulate multiple users.
