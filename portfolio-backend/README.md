# Portfolio Website

A modern portfolio website built with React, TypeScript, and Material-UI for the frontend, and Node.js, Express, and MongoDB for the backend.

## Features

- Responsive design
- Dark/Light mode
- Contact form with email functionality
- Projects showcase
- Skills section
- Modern UI with animations

## Tech Stack

### Frontend

- React
- TypeScript
- Material-UI
- Framer Motion
- Vite

### Backend

- Node.js
- Express
- MongoDB
- TypeScript

## Project Structure

```
portfolio/
├── portfolio-frontend/     # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── context/      # Context providers
│   │   └── assets/       # Static assets
│   └── ...
└── portfolio-backend/     # Backend Node.js application
    ├── src/
    │   ├── models/       # MongoDB models
    │   ├── routes/       # API routes
    │   └── ...
    └── ...
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install frontend dependencies:

```bash
cd portfolio-frontend
npm install
```

3. Install backend dependencies:

```bash
cd ../portfolio-backend
npm install
```

4. Create environment files:

   - Frontend: Create `.env` in portfolio-frontend/
   - Backend: Create `.env` in portfolio-backend/

5. Start the development servers:
   - Frontend: `cd portfolio-frontend && npm run dev`
   - Backend: `cd portfolio-backend && npm run dev`

## Environment Variables

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000
```

### Backend (.env)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

## Deployment

The application can be deployed using:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
