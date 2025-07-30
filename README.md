# Job Application Tracker Web App

🔗 Check live demo at: https://job-application-tracker-web-qp05yumxk.vercel.app/

JobTracker is a responsive and intuitive web application built to help users track and manage their job applications. It allows job seekers to record, monitor, and update the progress of their applications in a centralized dashboard with clean UI and smooth user experience.

The application supports full CRUD functionality (Create, Read, Update, Delete) and includes advanced features such as job filtering by status, local data storage, import/export to JSON, and a dynamic dashboard with animated routing transitions.

<h1>✨ Core Features:</h1>
<h2>🧠 Smart Dashboard</h2>
Displays all job applications in a clean card layout, categorized by status. A visual breakdown of job counts by status is presented using dynamic gradient cards.

<h2>📥 Add & Manage Jobs</h2>
Users can easily input new job information such as company name, job title, status, applied date, and notes via a polished form. The app auto-generates IDs and uses localStorage to persist data.

<h2>📄 Detailed Job View</h2>
Each application is clickable, revealing a detailed view with the ability to edit, update, or delete the entry. Editing mode uses intuitive forms and state management.

<h2>📂 Data Import & Export</h2>
Users can download all job applications as a .json file and re-import them—ensuring portability and backup support.

<h2>📊 Status Visualization</h2>
At-a-glance stats for how many jobs are in each status stage using colorful cards styled with Tailwind’s gradient utilities.

<h2>🌙 Clean UI & UX</h2>
Glassmorphism-inspired UI, responsive layouts, mobile support, and animation with Framer Motion ensure a modern and engaging experience.



<h1>🔧 Technical Highlights</h1>

React Router for seamless navigation

Context API for global state management of job listings

Framer Motion for animated route transitions

LocalStorage integration for persistent data

Modular, reusable components like JobCard, StatusBadge, Navbar, and form elements

Proper error handling and user confirmation before deletes

💻 Tech Stack: React.js, Tailwind CSS, React Router, Framer Motion, LocalStorage, Context API

📦 State Management: Context API + Hooks

🗃️ Storage: Browser LocalStorage
