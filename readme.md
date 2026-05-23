# DevPulse

Internal Tech Issue & Feature Tracker

A collaborative platform for software teams to report bugs, suggest features, and coordinate resolutions.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 26.x (LTS) | Runtime |
| TypeScript | Latest | Type Safety |
| Express.js | latest| Web Framework |
| PostgreSQL | Latest | Database |
| bcryptjs | latest | Password Hashing |
| jsonwebtoken | latest | JWT Token Management |
| pg | latest | PostgreSQL Driver |

---

## Setup

### Prerequisites
- Node.js 26.x or higher
- npm 
- PostgreSQL database

### Installation Steps

1. Clone this repository into your local machine
2. Navigate to project directory
3. Run `npm install` to install dependencies
4. Setup your `.env` file with required environment variables( can follow `.env.example` )
5. Run `npm run dev` to start the development server

---

## API Documentation

### Authentication Endpoints

#### POST `/api/auth/signup`
Register a new user account
- **Access**: Public
- **Body**: `{ name, email, password, role }`
- **Response**: User object with id, name, email, role, created_at, updated_at

#### POST `/api/auth/login`
Authenticate user and receive JWT token
- **Access**: Public
- **Body**: `{ email, password }`
- **Response**: JWT token and user object

### Issues Endpoints

#### POST `/api/issues`
Create a new issue
- **Access**: Authenticated (contributor, maintainer)
- **Headers**: `Authorization: <JWT_TOKEN>`
- **Body**: `{ title, description, type }`
- **Response**: Created issue object with id, status (defaults to 'open')

#### GET `/api/issues`
Retrieve all issues with filtering and sorting
- **Access**: Public
- **Query Parameters**:
  - `sort`: newest | oldest (default: newest)
  - `type`: bug | feature_request
  - `status`: open | in_progress | resolved
- **Response**: Array of issue objects with reporter details

#### GET `/api/issues/:id`
Retrieve a specific issue
- **Access**: Public
- **Response**: Single issue object with reporter details

#### PATCH `/api/issues/:id`
Update an issue
- **Access**: Maintainer (any issue) OR Contributor (own issue only, if status is open)
- **Headers**: `Authorization: <JWT_TOKEN>`
- **Body**: `{ title, description, type, status }`
- **Response**: Updated issue object

#### DELETE `/api/issues/:id`
Delete an issue
- **Access**: Maintainer only
- **Headers**: `Authorization: <JWT_TOKEN>`
- **Response**: Success message

---

## Database Schema

### Users Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY, AUTO INCREMENT |
| name | VARCHAR(100) | NOT NULL |
| email | VARCHAR(100) | UNIQUE, NOT NULL |
| password | VARCHAR(256) | NOT NULL |
| role | VARCHAR(100) | DEFAULT 'contributor' |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

### Issues Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY, AUTO INCREMENT |
| title | VARCHAR(150) | NOT NULL |
| description | TEXT | NOT NULL |
| type | VARCHAR(50) | NOT NULL (bug, feature_request) |
| status | VARCHAR(100) | DEFAULT 'open' (open, in_progress, resolved) |
| reporter_id | INT | NOT NULL, REFERENCES users(id) |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |