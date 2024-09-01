# API Documentation

## Overview

This document provides an overview of the API endpoints for the **Syncory** project, covering all functionalities implemented up to and including Milestone 2: **Event Management System**. Each section describes the available endpoints, request parameters, expected responses, and error codes.

---

## Authentication and User Management (Milestone 1)

### 1. User Registration

#### **POST** `/api/v1/auth/register`

**Description:**
Registers a new user (attendee, organizer, or admin) in the system.

**Request:**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "organizer", // "attendee" or "admin"
  "brandName": "John's Events", // Required for organizers
  "description": "We organize the best events." // Required for organizers
}
```

**Response:**

- **201 Created**

  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "role": "organizer"
    }
  }
  ```

- **400 Bad Request**

  ```json
  {
    "message": "User already exists"
  }
  ```

- **403 Forbidden** (If non-admin attempts to register an admin)

  ```json
  {
    "message": "Forbidden: Insufficient privileges"
  }
  ```

- **500 Internal Server Error**

  ```json
  {
    "message": "Server error",
    "error": "Detailed error message"
  }
  ```

### 2. User Login

#### **POST** `/api/v1/auth/login`

**Description:**
Authenticates a user and returns a JWT token.

**Request:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

- **200 OK**

  ```json
  {
    "token": "jwt_token_here",
    "message": "Login successful"
  }
  ```

- **400 Bad Request**

  ```json
  {
    "message": "Invalid credentials"
  }
  ```

- **500 Internal Server Error**

  ```json
  {
    "message": "Server error",
    "error": "Detailed error message"
  }
  ```

### 3. Get User Profile

#### **GET** `/api/v1/users/profile`

**Description:**
Fetches the profile of the authenticated user.

**Request Headers:**

```http
Authorization: Bearer {jwt_token}
```

**Response:**

- **200 OK**

  ```json
  {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "organizer",
    "brandName": "John's Events",
    "description": "We organize the best events."
  }
  ```

- **404 Not Found**

  ```json
  {
    "message": "User not found"
  }
  ```

- **500 Internal Server Error**

  ```json
  {
    "message": "Server error",
    "error": "Detailed error message"
  }
  ```

### 4. Update User Profile

#### **PUT** `/api/v1/users/profile`

**Description:**
Updates the profile of the authenticated user.

**Request Headers:**

```http
Authorization: Bearer {jwt_token}
```

**Request:**

```json
{
  "username": "john_doe_updated",
  "email": "john_updated@example.com",
  "brandName": "John's Updated Events", // Required for organizers
  "description": "Updated description here." // Required for organizers
}
```

**Response:**

- **200 OK**

  ```json
  {
    "message": "Profile updated successfully"
  }
  ```

- **400 Bad Request**

  ```json
  {
    "message": "Email is already in use"
  }
  ```

- **404 Not Found**

  ```json
  {
    "message": "User not found"
  }
  ```

- **500 Internal Server Error**

  ```json
  {
    "message": "Server error",
    "error": "Detailed error message"
  }
  ```

---

## Event Management System (Milestone 2)

### 1. Get All Events

#### **GET** `/api/v1/events`

**Description:**
Fetches a list of all events.

**Response:**

- **200 OK**

  ```json
  [
    {
      "id": 1,
      "title": "Event Title",
      "description": "Event Description",
      "date": "2024-08-30T12:00:00Z",
      "location": "Event Location",
      "capacity": 100,
      "organizer": {
        "id": 1,
        "username": "john_doe"
      },
      "attendees": [
        {
          "id": 2,
          "username": "jane_doe"
        }
      ]
    }
  ]
  ```

- **500 Internal Server Error**

  ```json
  {
    "message": "An error occurred",
    "error": "Detailed error message"
  }
  ```

### 2. Get Event by ID

#### **GET** `/api/v1/events/{id}`

**Description:**
Fetches the details of a specific event by ID.

**Response:**

- **200 OK**

  ```json
  {
    "id": 1,
    "title": "Event Title",
    "description": "Event Description",
    "date": "2024-08-30T12:00:00Z",
    "location": "Event Location",
    "capacity": 100,
    "organizer": {
      "id": 1,
      "username": "john_doe"
    },
    "attendees": [
      {
        "id": 2,
        "username": "jane_doe"
      }
    ]
  }
  ```

- **404 Not Found**

  ```json
  {
    "message": "Event not found"
  }
  ```

- **500 Internal Server Error**

  ```json
  {
    "message": "Server error",
    "error": "Detailed error message"
  }
  ```

### 3. Create Event

#### **POST** `/api/v1/events`

**Description:**
Creates a new event. If the creator is an organizer, they are automatically set as the event's organizer.

**Request Headers:**

```http
Authorization: Bearer {jwt_token}
```

**Request:**

```json
{
  "title": "Event Title",
  "description": "Event Description",
  "date": "2024-08-30T12:00:00Z",
  "location": "Event Location",
  "capacity": 100,
  "categoryId": 1,
  "organizerId": 1 // Optional, will be auto-set if the creator is an organizer
}
```

**Response:**

- **201 Created**

  ```json
  {
    "message": "Event created successfully",
    "event": {
      "id": 1,
      "title": "Event Title",
      "description": "Event Description",
      "date": "2024-08-30T12:00:00Z",
      "location": "Event Location",
      "capacity": 100,
      "organizerId": 1
    }
  }
  ```

- **400 Bad Request**

  ```json
  {
    "message": "Invalid organizer ID"
  }
  ```

- **500 Internal Server Error**

  ```json
  {
    "message": "Server error",
    "error": "Detailed error message"
  }
  ```

---

## Authorization

### **Headers**

- **Authorization:** Bearer {jwt_token}

---

This documentation includes all endpoints and features implemented up to and including the current milestone. You can place this in your project’s documentation section or README file to help users understand how to interact with your API.
