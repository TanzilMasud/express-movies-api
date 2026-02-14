# 🎬 Express Movies API

A RESTful Movies API built using Node.js and Express.

## 🚀 Features

- GET all movies
- GET movie by ID
- POST create movie
- PUT update movie
- DELETE remove movie
- Clean architecture (routes, controllers, middleware)
- Morgan logging
- Nodemon for development

---

## 🏗 Project Structure
express-app/
│
├── controllers/
│   └── movieController.js
├── middleware/
│   └── validateMovie.js
├── routes/
│   └── movies.js
├── server.js
├── package.json
## 📌 API Endpoints

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | /movies         | Get all movies       |
| GET    | /movies/:id     | Get movie by ID      |
| POST   | /movies         | Create a new movie   |
| PUT    | /movies/:id     | Update a movie       |
| DELETE | /movies/:id     | Delete a movie       |
