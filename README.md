# Mini LinkedIn Community Platform

A minimal social platform where users can register, create text-only posts, and explore user Posts —

## 🌐 Live Demo  
[https://project-submission-frontend.vercel.app](https://project-submission-frontend.vercel.app)

## 💻 Tech Stack

**Frontend:** Next.js, Tailwind CSS  
**Backend:** Node.js (Express.js)  
**Database:** MongoDB (with Mongoose)  
**Auth:** JWT-based authentication  
**Deployment:** Vercel (Frontend) & Render (Backend)

## 🔑 Features

- User registration and login (Email + Password)
- Public post feed with author and timestamp
- Profile page with user bio and posts
- Clean, responsive UI

## 🚀 Getting Started (Local Setup)

### Prerequisites:
- Node.js and npm installed
- MongoDB URI

### Steps:

```bash
# Clone frontend and backend repos
git clone https://github.com/ShreyashJadhav07/project_submission-Frontend
git clone https://github.com/ShreyashJadhav07/project_submission-Backend

# Install frontend dependencies and start
cd project_submission-Frontend
npm install
npm run dev

# Install backend dependencies and start
cd ../project_submission-Backend
npm install
# Add a .env file with MONGO_URI and JWT_SECRET
npm run dev


