# Doc o' Clock: Online Healthcare Appointment Booking System

Doc o' Clock is a comprehensive healthcare appointment scheduling platform that connects patients with healthcare professionals. The system facilitates seamless booking of doctor appointments, management of medical schedules, and streamlines the healthcare experience for patients, doctors, and administrators.

## Project Overview

Doc o' Clock addresses the challenges in healthcare appointment scheduling by providing a centralized platform where patients can easily discover doctors based on specialties, check availability, and book appointments online. The system features three interconnected components: a patient-facing frontend, a doctor portal, and an admin dashboard, creating a complete ecosystem for healthcare appointment management.

## Technology Stack

### Frontend
- React.js with functional components and hooks
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- Axios for API communication
- React Toastify for notifications

### Backend
- Node.js with Express.js framework
- MongoDB database with Mongoose ODM
- JWT for authentication
- Bcrypt for password encryption
- Multer for file uploads
- Cloudinary for image storage and optimization
- Validator for input validation

### Admin/Doctor Panel
- React.js with separate context providers
- Shared components with the main frontend
- Role-based access control

## Features

### Patient Portal
- User registration and secure authentication
- Browse doctors by specialty (General Physician, Gynecologist, Dermatologist, etc.)
- View doctor profiles, qualifications, and availability
- Book appointments with preferred doctors
- Manage and cancel existing appointments
- Update personal profile information

### Doctor Portal
- Secure login and authentication
- Dashboard with earnings, appointment statistics, and patients count
- View and manage upcoming appointments
- Mark appointments as completed or canceled
- Update profile information, fees, and availability status

### Admin Dashboard
- Add and manage doctors with complete profiles
- View comprehensive system statistics
- Monitor all appointments across the platform
- Manage doctor availability
- System-wide appointment management

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn package manager
- MongoDB database
- Cloudinary account for image storage

### Environment Variables
Create `.env` files in both backend and frontend directories:

Backend `.env`:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@dococlock.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Frontend `.env`:
```
VITE_BACKEND_URL=http://localhost:4000
```

### Installation Steps

1. Clone the repository:
   ```
   git clone https://github.com/your-username/doc-o-clock.git
   cd doc-o-clock
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Install admin panel dependencies:
   ```
   cd ../admin
   npm install
   ```

5. Start the backend server:
   ```
   cd ../backend
   npm start
   ```

6. Start the frontend development server:
   ```
   cd ../frontend
   npm run dev
   ```

7. Start the admin panel:
   ```
   cd ../admin
   npm run dev
   ```

## Project Structure

```
doc-o-clock/
├── frontend/          # Patient-facing React application
│   ├── src/
│   │   ├── assets/    # Images and static assets
│   │   ├── components/# Reusable UI components
│   │   ├── context/   # Context providers for state management
│   │   ├── pages/     # Page components
│   │   └── App.jsx    # Main application component
│   └── package.json   # Frontend dependencies
│
├── backend/           # Node.js/Express API server
│   ├── config/        # Database and service configurations
│   ├── controllers/   # Request handlers
│   ├── middlewares/   # Custom middleware functions
│   ├── models/        # MongoDB schema definitions
│   ├── routes/        # API route definitions
│   ├── server.js      # Server entry point
│   └── package.json   # Backend dependencies
│
└── admin/             # Admin and doctor panel
    ├── src/
    │   ├── assets/    # Admin-specific assets
    │   ├── components/# Admin UI components
    │   ├── context/   # Admin state management
    │   ├── pages/     # Admin and doctor pages
    │   └── App.jsx    # Admin application component
    └── package.json   # Admin panel dependencies
```

## API Endpoints

### User Endpoints
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/get-profile` - Get user profile
- `POST /api/user/update-profile` - Update user profile
- `POST /api/user/book-appointment` - Book a doctor appointment
- `GET /api/user/appointments` - Get user's appointments
- `POST /api/user/cancel-appointment` - Cancel appointment

### Doctor Endpoints
- `GET /api/doctor/list` - Get all doctors
- `POST /api/doctor/login` - Doctor login
- `GET /api/doctor/appointments` - Get doctor's appointments
- `POST /api/doctor/complete-appointment` - Mark appointment as completed
- `POST /api/doctor/cancel-appointment` - Cancel appointment
- `GET /api/doctor/dashboard` - Get doctor dashboard data
- `GET /api/doctor/profile` - Get doctor profile
- `POST /api/doctor/update-profile` - Update doctor profile

### Admin Endpoints
- `POST /api/admin/add-doctor` - Add new doctor
- `POST /api/admin/login` - Admin login
- `POST /api/admin/all-doctors` - Get all doctors
- `POST /api/admin/change-availability` - Change doctor availability
- `GET /api/admin/appointments` - Get all appointments
- `POST /api/admin/cancel-appointment` - Cancel appointment
- `GET /api/admin/dashboard` - Get admin dashboard data

## Usage Guide

### For Patients
1. Register a new account or login with existing credentials
2. Browse doctors by specialty or search by name
3. Select a doctor to view their profile and availability
4. Choose an available time slot and book an appointment
5. View and manage appointments in the "My Appointments" section
6. Update personal information in the profile section

### For Doctors
1. Login using credentials provided by the administrator
2. View dashboard for appointment statistics and patient data
3. Manage upcoming appointments from the appointments page
4. Mark appointments as completed after patient visits
5. Update profile information, fees, and availability status

### For Administrators
1. Login using admin credentials
2. View system statistics on the dashboard
3. Add new doctors with complete profile information
4. Manage doctor availability and appointment status
5. View all appointments across the platform

## Future Enhancements

- Online payment integration for appointment booking
- Prescription management system
- Patient medical records integration
- Advanced analytics and reporting
- Mobile application development
