## Real-Time Chat App

> WhatsApp-style real-time chat — React + Styled Components on the client, Node/Express/MongoDB + Socket.io on the server, all in one monorepo.

![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?logo=socket.io&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-5-DB7093?logo=styled-components&logoColor=white)

### [Try it live](https://chat-app-front-eight.vercel.app)

A full-stack chat playground built to learn WebSocket-based messaging end-to-end. The client (`client/`) is a Create React App single-page app; the server (`server/` + `index.js`) is an Express API that handles auth and message persistence and runs a Socket.io gateway for instant delivery between online users.

## Features

- Email/username register & login with bcrypt-hashed passwords
- Avatar picker (random SVG avatars via [multiavatar.com](https://multiavatar.com))
- 1-on-1 real-time messaging over Socket.io with an online-users map
- Message history persisted in MongoDB and replayed on conversation open
- Emoji picker in the composer (`emoji-picker-react`)
- Toast notifications for auth and validation errors (`react-toastify`)
- React Router v6 routing across Login / Register / Set Avatar / Chat
- Production mode serves the built client straight from the Express app

## Tech Stack

**Client** — React 17 (CRA) · Styled Components · React Router v6 · Axios · `socket.io-client` · `emoji-picker-react` · `react-toastify`

**Server** — Node.js · Express · Mongoose / MongoDB · `socket.io` · `bcrypt` · `cors` · `dotenv`

**Tooling** — `nodemon` · `concurrently`

## Project Structure

```
.
├── index.js              # Express + Socket.io entry
├── server/
│   ├── controllers/      # userController, messageController
│   ├── models/           # User, Message (Mongoose)
│   └── routes/           # /api/auth, /api/messages
└── client/               # Create React App frontend
    └── src/
        ├── pages/        # Login, Register, Chat
        ├── components/   # ChatContainer, ChatInput, Contacts, SetAvatar, ...
        └── utils/        # APIRoutes
```

## Getting Started

### Prerequisites

- Node.js 16+
- A MongoDB connection string (local `mongod` or MongoDB Atlas)

### 1. Install

```bash
# server deps
npm install

# client deps
cd client && npm install && cd ..
```

### 2. Configure environment

Copy `.env.sample` to `.env` at the repo root for the server:

```env
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/chat-app
```

And create `client/.env` for the frontend:

```env
REACT_APP_BASE_URL=http://localhost:5000
REACT_APP_LOCALHOST_KEY=chat-app-current-user
```

### 3. Run

```bash
# both server and client together
npm run run-whole-app

# or individually
npm run dev      # server with nodemon
npm run client   # CRA dev server
```

The API runs on `http://localhost:5000`, the client on `http://localhost:3000`.

## API

| Method | Route                       | Purpose                          |
| ------ | --------------------------- | -------------------------------- |
| POST   | `/api/auth/register`        | Create a new user                |
| POST   | `/api/auth/login`           | Log in                           |
| GET    | `/api/auth/logout/:id`      | Log out                          |
| GET    | `/api/auth/allusers/:id`    | List other users                 |
| POST   | `/api/auth/setavatar/:id`   | Save selected avatar             |
| POST   | `/api/messages/addmsg`      | Persist a message                |
| POST   | `/api/messages/getmsg`      | Load a conversation              |

Socket events: `add-user`, `send-msg`, `msg-recieve`.

## Credits

Built by [Mohamed Gado](https://mohamedgado.com).
