# Share and Care

A community-driven food sharing platform designed to reduce food waste and support those in need. Share and Care connects individuals and organizations, enabling them to share surplus food with the community in a seamless and secure way.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## Features
- User authentication and registration
- Add food items to share with the community
- Browse available foods shared by others
- Request food items
- Manage your added foods and requests
- Real-time updates and notifications
- Responsive and modern UI
- Community impact tracking
- Secure data handling
- Error handling and loading states

## Tech Stack
- **Frontend:** React, Tailwind CSS, Firebase Authentication
- **Backend:** Node.js (Express)
- **Database:** MongoDB
- **Deployment:**
  - Frontend: Firebase Hosting
  - Backend: Vercel

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd share-and-care-client
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure Firebase:**
   - Update `src/Firebase/firebase.init.js` with your Firebase project credentials.

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. **Backend Setup:**
   - Clone and set up the backend repository (see backend repo for details).
   - Ensure MongoDB is running and update environment variables as needed.

## Project Structure
```
share-and-care-client/
  ├── public/
  ├── src/
  │   ├── Components/
  │   ├── Contexts/
  │   ├── Firebase/
  │   ├── Hooks/
  │   ├── Layouts/
  │   ├── Pages/
  │   ├── Providers/
  │   ├── Routes/
  │   └── Utils/
  ├── package.json
  └── README.md
```

## Deployment
- **Frontend:** Hosted on Firebase
- **Backend:** Deployed on Vercel

## Contact
**Md Jahirul Islam Shifat**  
Email: info.jahirulsifat@gmail.com

---

Feel free to contribute or reach out for collaboration and support!
