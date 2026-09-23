# AI Workplace Productivity Assistant

## Project Overview

**AI Workplace Productivity Assistant** is a modern, responsive web application designed to help professionals improve workplace productivity using AI.

The application combines AI-powered research, task planning, and workplace assistance into one simple SaaS-style dashboard. Users can research topics, organize and prioritize tasks, generate schedules, and interact with an AI workplace chatbot.

The application is designed as a **frontend-only project** with no backend or database, making it lightweight and easy to run and demonstrate.

## Features Implemented

### 📊 Dashboard

* Modern SaaS-style dashboard
* Overview of productivity activities
* Recent AI activity
* Clean and responsive interface

### 🔎 AI Research Assistant

* Enter a topic or article content
* Generate AI-powered summaries
* Identify key insights and important points
* Generate practical recommendations
* Edit generated AI responses

### 📅 AI Task Planner

* Add workplace tasks and deadlines
* Specify task priorities
* Generate daily or weekly schedules
* AI-assisted task prioritization
* Editable generated schedules

### 💬 AI Workplace Chatbot

* Interactive AI chat interface
* Ask workplace-related questions
* Receive context-specific AI-generated responses
* Simple and user-friendly conversation interface

### 🎨 User Interface

* Responsive design for desktop, tablet, and mobile
* Light pink, white, and grey colour palette
* Modern cards and rounded UI elements
* Sidebar navigation
* Structured input forms
* Loading states and clear action buttons

### ⚠️ Responsible AI

* Includes a Responsible AI disclaimer
* Encourages users to review and verify AI-generated information
* AI outputs are intended to assist users rather than replace professional judgment

## Technologies and Tools Used

* **React** – Frontend application development
* **TypeScript** – Type-safe application development
* **Tailwind CSS** – Responsive styling and UI design
* **Vite** – Development server and build tool
* **Lucide React** – Interface icons
* **Lovable** – AI-assisted application development
* **GitHub** – Source code management and project hosting
* **Browser Local Storage** – Local client-side data persistence

> No backend, database, or authentication system is required for this project.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-workplace-productivity-assistant.git
```

### 2. Navigate to the Project

```bash
cd ai-workplace-productivity-assistant
```

### 3. Install Dependencies

Make sure **Node.js** is installed on your computer, then run:

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at the local address provided by Vite, usually:

```text
http://localhost:5173
```

### 5. Build for Production

To create a production build:

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

## Project Structure

```text
ai-workplace-productivity-assistant/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   └── main.tsx
│
├── public/
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## Author

**Ziphozekhethelo Gamede**

## Responsible AI Notice

AI-generated content may contain inaccuracies or incomplete information. Users should review and verify AI outputs before using them for important workplace decisions, research, planning, or professional communication.

## Project Status

**Status:** Completed Frontend MVP

The project focuses on demonstrating how AI can be incorporated into workplace productivity tools through research assistance, task planning, and conversational AI.
