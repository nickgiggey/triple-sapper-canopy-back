# The Gitz Carlton

## Description

This is the backend for [The Gitz Carlton](https://cozy-gnome-816bc0.netlify.app/), a Full Stack (MERN) internal hotel booking app for employees to check in, checkout, and move around guests in a hotel. It provides CRUD functionality to our front end application to allow employees to create/delete/update/and get guests/rooms in the hotel.

## Technologies Used

- Express
- Node.js
- MongoDB
- Mongoose

## Installation Instructions

1. Clone this repository to your lessons folder and change directory into it.
2. Run `npm i` to download required dependencies.
3. Create a .env file and add your `DATABASE_URL` to it with your MongoDB Atlas connection string.

## Getting Started

1. Run `node db/seed.js` to populate your database with seed data.
2. Run `nodemon index.js` to start your development server.
   Happy coding!!!!

## API Endpoints

- GET: api/rooms
- Get: api/guests
- GET: api/rooms/:id
- Get: api/guests/:id
- POST: api/guests
- PATCH: api/guests/:id
- PATCH: api/rooms/:id
- Delete: api/guests/:id


_To see our deployed backend API, click [here](https://secret-waters-54413.herokuapp.com/api/rooms)_