📚 Book Management System
🌐 Live Demo: https://book-frontend-q0uk.onrender.com/
🔗 API: https://book-management-system-wrur.onrender.com/

A full-stack Book Management System that allows users to view, add, update, and delete books. The app integrates with a live 
REST API (powered by JSON Server on Render) to perform all CRUD operations, with search and genre filtering built in.

🗂 Project Overview
The Book Management System is a React-based web application that lets users manage a collection of books. Each book entry 
includes a title, author, genre, and publication year. Users can browse the full list, search by title or author, filter by 
genre, add new books via a form, edit existing entries, and delete books — all backed by a live hosted API.

✨ Features

📖 View a list of all books with title, author, genre, and publication year
➕ Add new books through a validated form
✏️ Edit existing book entries inline
🗑️ Delete books with confirmation
🔍 Search books by title or author
🏷️ Filter books by genre
⏳ Loading states and error handling for all API calls
📱 UI built with Tailwind CSS


🛠 Tech Stack
Frontend => ReactJS, TailwindCSS, React Router, React Hook Form, contextAPI, nanoid
Backend => JSON Server, Render

🚀 Setup & Installation
Prerequisites
Node.js (v18 or higher)
npm


1. Clone the Repository
bashgit clone https://github.com/your-username/book-management-system.git
cd book-management-system

2. Backend Setup (JSON Server on Render)
The backend is already live and hosted on Render — no local setup needed for the API.
🔗 Live API URL: https://book-management-system-wrur.onrender.com/

⚠️ Note: Render free-tier services spin down after inactivity. The first request may take 30–60 seconds to respond.

If you want to run the backend locally:
bashcd backend
npm install
npm start
The local server will run at http://localhost:10000.

3. Frontend Setup
bash cd frontend
npm install
Create a .env file in the frontend root and add:
env : VITE_API_URL=https://book-management-system-wrur.onrender.com

For local backend, use VITE_API_URL=http://localhost:10000 instead.

Then start the development server:
bash npm run dev
The app will be available at http://localhost:5173.

4. Build for Production
bash npm run build
Preview the production build:
bash npm run preview

📁 Project Structure
book-management-system/
├── backend/
│   ├── db.json          # JSON Server database
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── pages/       # Route-level page components
    │   ├── context/     # React Context API (global state)
    │   ├── routes/      # App route definitions
    │   └── main.jsx
    ├── index.html
    └── package.json
