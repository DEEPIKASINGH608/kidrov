# Kidrove Workshops - AI & Robotics Summer Landing Page

A complete full-stack web application built for the **GEMA Education Technology Web Development Internship Assignment** via Internshala. This project features a responsive, kid-friendly landing page styled to match the *Kidrove* brand identity, complete with client-side form validation, active loading states, and a dedicated backend registration validation API endpoint.

---

## 🛠️ Tech Stack

**Frontend:**
* **React.js** (Functional Components & Hooks)
* **JavaScript (ES6+)**
* **Tailwind CSS** (Utility-first framework for layouts and styling)
* **Vite** (Next-generation ultra-fast frontend tooling)

**Backend:**
* **Node.js** (Runtime environment)
* **Express.js** (Minimalist web framework for APIs)
* **CORS** (Cross-Origin Resource Sharing middleware)

---

## ✨ Features Implemented

1.  **Hero Section:** Features the dynamic workshop title (*AI & Robotics Summer Workshop*), an engaging kid-centric short description, an interactive "Enroll Now" call-to-action button, and decorative animated background ambient blobs.
2.  **Workshop Details Grid:** Dynamically maps out crucial details matching the assignment parameters:
    * *Age Group:* 8–14 Years
    * *Duration:* 4 Weeks
    * *Mode:* Online (Live Interactive Sessions)
    * *Fee:* ₹2,999/-
    * *Start Date:* 15 July 2026
3.  **Learning Outcomes Block:** Clean, numbered multi-pillar breakdown showcasing a minimum of 5 critical development goals for the students.
4.  **FAQ Accordion Section:** Interactive accordion list resolving 3 major parent queries without cluttering the main layout.
5.  **Secure Registration Form:** Fully accessible form collecting `Name`, `Email`, and `Phone Number` with custom, live front-end input validation error flags. Includes an async network submission visual loading spinner.
6.  **Express API Endpoint:** Robust `POST /api/enquiry` backend router ensuring server-side sanity validation and clean JSON pipeline logging.

---

## 🚀 Getting Started & Execution Guide

Follow these steps sequentially to set up and boot both server clusters locally.

### ⚙️ 1. Running the Backend Server
Open your terminal window and navigate into your backend subdirectory:
```bash
cd backend
npm init -y
npm install express cors
node server.js

2. Running the Frontend App
Open a second, separate terminal window and navigate into your frontend subdirectory:

Bash
cd frontend
npm install
npm run dev
Open http://localhost:5173/ inside your web browser to view the completely operational and styled responsive website application.

📡 API Specification Documentation
Submit Registration Enquiry
URL: /api/enquiry

Method: POST

Headers: Content-Type: application/json

Body Parameters:

JSON
{
  "name": "John Doe",
  "email": "parent@example.com",
  "phone": "9876543210"
}
Sample Responses:
Success (200 OK):

JSON
{
  "success": true,
  "message": "Enquiry verified and processed successfully.",
  "receivedData": { "name": "John Doe", "email": "parent@example.com", "phone": "9876543210" }
}
Validation Failure (400 Bad Request):

JSON
{
  "success": false,
  "message": "Validation Error: Phone number sequence must contain exactly 10 digital characters."
}