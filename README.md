# Notice Board Project

## Project Overview
This is a **Notice Board** web application where users can create, view, and manage notices. It includes a **frontend built with Next.js + Tailwind CSS** and a **backend API using Node.js/Express (or Next.js API routes) + MongoDB**. The application is fully responsive and deployed online.

**Live Demo:**  
Frontend: [https://your-frontend-url](http://localhost:3000)  
Backend API: [https://localhost:5000/notices/create]((http://localhost:5000)
Backend API: [https://localhost:5000/notices/list]((http://localhost:5000)

---

## Tech Stack
- **Frontend:** Next.js 13, Tailwind CSS, Axios, React Hooks  
- **Backend:** Node.js, Express (or Next.js API routes), MongoDB (Atlas)  
- **Deployment:** Vercel / Render / Railway  
- **Other:** Axios for API requests, React State Management (useState)  

---

## Installation Steps

1. Clone the repository:


git clone https://github.com/yourusername/notice-board-project.git
cd notice-board-project
Install dependencies:



notice-board-project/
├─ backend/
│  ├─ package.json
│  ├─ server.js (or app.js)
│  ├─ .env.example
│  ├─ models/
│  │   └─ Notice.js
│  ├─ routes/
│  │   └─ noticeRoutes.js
│  └─ controllers/
│      └─ noticeController.js
│
├─ frontend/
│  ├─ package.json
│  ├─ next.config.js
│  ├─ .env.local.example
│  ├─ app/
│  │   └─ page.tsx
│  ├─ components/
│  │   └─ NoticeForm.tsx
│  └─ utils/
│      └─ api.ts
│
└─ README.md

# Frontend
cd frontend
npm install


cd backend
npm install
Create .env files:

Frontend (.env.local):


NEXT_PUBLIC_API_BASE=https://your-backend-url/api
Backend (.env):


MONGO_URI=your_mongodb_connection_string
PORT=5000
Run locally:


Copy code
# Backend
npm run dev

# Frontend
npm run dev
Open http://localhost:3000 in your browser.

API Endpoints
Method	Endpoint	Description
POST	/api/notices	Create a new notice
GET	/api/notices	Fetch all notices
GET	/api/notices/:id	Fetch notice by ID
PUT	/api/notices/:id	Update notice by ID
DELETE	/api/notices/:id	Delete notice by ID

Environment Variables
Frontend

NEXT_PUBLIC_API_BASE – URL of the deployed backend API

4. Set your environment variables in `.env` files (like MongoDB URI)

## Live URLs
- Frontend: [https://your-frontend.vercel.app](https://notice-assignment.vercel.app/)
- Backend: [https://your-backend.onrender.com](https://notice-5yx1.onrender.com)

## GitHub Repository
[https://github.com/your-username/Notice_assignment](https://github.com/Ganga-halligerimath/Notice_assignment)


Backend

MONGO_URI – MongoDB connection string

PORT – Server port (default: 5000)

