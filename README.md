Travel Website
Objective
The goal of this project is to build a travel website where users can browse, book, and manage trips. Additionally, trip organizers can register and add their trips. Both frontend and backend components are implemented using modern web technologies.

Features
Core Functionalities
Trip Listing and Details:

Display a list of upcoming trips on the landing page.
Each trip includes detailed information such as:
Trip name
Description
Dates
Price
Available slots
Cancellation policy
Trip Booking:

Users can add trips to a cart.
Implement a checkout process to confirm the booking.
Ensure that only authenticated users can book trips.
Authentication:

Unauthenticated users can browse trips and view details.
Users must log in or sign up to book a trip.
Trip Organizer Registration:

Provide a registration flow for trip organizers.
Registered organizers can access a dashboard to:
Add new trips.
View their added trips.
Edit or delete trips.
Booking Management and Cancellation:

Authenticated users can view all their booked trips.
Implement cancellation functionality with the following policies:
Full refund if canceled 15 days prior to the trip date.
50% refund if canceled 7 days prior.
No refund if canceled less than 7 days prior.
Good-to-Have Features (Optional)
Concurrency Handling:

Ensure that if a trip has only one slot left, simultaneous booking attempts by different users result in only one successful booking.
Session Management:

Implement login sessions that expire after a specified duration (e.g., 7 days), requiring users to log in again.
Optimized Load Time:

Ensure that the landing page loads quickly by optimizing assets (images, CSS, JavaScript) and implementing lazy loading for content.
Payment Handling
Implement a dummy payment system to store payment details.
Code should be modular and extensible for integrating third-party payment gateways in the future.
Website Layout
Landing Page:

Include information about the travel company.
List upcoming trips with an option to view details or add to the cart.
User Dashboard:

For customers to view and manage their bookings.
Organizer Dashboard:

For organizers to manage their trips.
Technical Stack
Frontend
JavaScript
CSS
React
Backend
Node.js with Express (for handling the backend API)
MongoDB (for storing trip data, user info, bookings, and payment details)
JWT or session-based authentication (for user and organizer authentication)
Database Schema
The database will contain the following collections:

Users:

username
email
password
role (user or organizer)
Trips:

name
description
dates
price
availableSlots
cancellationPolicy
Bookings:

userId
tripId
bookingDate
status
paymentStatus
refundStatus (if applicable)
Setup Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/YashTushar/Travel-tours.git
cd Travel-tours
Install Backend Dependencies:

bash
Copy code
cd backend
npm install
Install Frontend Dependencies:

bash
Copy code
cd frontend
npm install
Run the Backend Server:

bash
Copy code
cd backend
npm run dev
The backend will run on http://localhost:4000.

Run the Frontend Server:

bash
Copy code
cd frontend
npm start
The frontend will run on http://localhost:3000.

Environment Variables:

Create a .env file in the backend directory for environment variables like database URL, JWT secret, etc.

API Endpoints
User Authentication
POST /auth/register - Register a new user.
POST /auth/login - Log in and get a JWT token.
Trip Endpoints
GET /trips - Get a list of all upcoming trips.
GET /trips/:id - Get detailed information about a specific trip.
POST /trips - Add a new trip (only for organizers).
PUT /trips/:id - Update an existing trip (only for organizers).
DELETE /trips/:id - Delete a trip (only for organizers).
Booking Endpoints
POST /bookings - Create a new booking.
GET /bookings - Get a list of all bookings for the authenticated user.
DELETE /bookings/:id - Cancel a booking.
Contribution
Feel free to fork the project and submit pull requests. If you encounter any bugs or have feature requests, please open an issue on the GitHub repository.
