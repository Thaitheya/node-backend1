
# Room Booking API

This project provides a RESTful API for managing room bookings, availability, and customer booking data. The API is built using **Node.js** and **Express.js**.

---

## Features

- Create new rooms.
- Book rooms for customers.
- Check room availability.
- List bookings with booking times.
- Track the number of times customers have booked.

---

## Project Structure

```
project-root/
│
├── mock_api/                # Contains mock data for testing
│   ├── BookingTimes.js      # Mock data for booking times
│   └── RoomDetails.js       # Mock data for room details
│
├── rooms/                   # Controllers for route handling
│   ├── Room.controller.js   # Room creation and management
│   ├── Booking.controller.js# Booking logic for rooms
│   ├── Book.controller.js   # Check room availability
│   ├── customer.controller.js# Customer booking routes
│   └── BookingDetails.controller.js # Tracks detailed booking data
│
├── app.js                   # Main entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Documentation
```

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- npm (comes with Node.js)

### Steps

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd project-root
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. The server runs on `http://localhost:3000`.

---

## API Endpoints

### **Room Routes**
- **POST /rooms**  
  Create a new room.

- **GET /rooms**  
  List all rooms.

---

### **Booking Routes**
- **POST /bookings**  
  Book a room for a customer.

- **GET /bookings**  
  Retrieve all bookings.

---

### **Availability Routes**
- **GET /availability**  
  Check room availability by querying `roomName`, `startTime`, and `endTime`.

---

### **Customer Routes**
- **GET /customer**  
  Retrieve details of bookings grouped by customer.

---

### **Booking Times Routes**
- **GET /custom/times**  
  Show all booking times for each customer.  
  **Response Example:**
  ```json
  {
      "Sudan": {
          "count": 2,
          "bookings": [
              { "startTime": "10:00AM", "endTime": "08:00PM" },
              { "startTime": "09:00AM", "endTime": "05:00PM" }
          ]
      },
      "Alice": {
          "count": 1,
          "bookings": [
              { "startTime": "11:00AM", "endTime": "07:00PM" }
          ]
      }
  }
  ```

---

## Mock Data

### `RoomDetails.js`
Holds mock data for room bookings:
```javascript
[
  {
    roomName: "luxury",
    bookedStatus: "Booked",
    customerName: "John Doe",
    date: "2024-11-17",
    startTime: "10:00AM",
    endTime: "12:00PM",
  },
  // Add more mock rooms...
];
```

### `BookingTimes.js`
Holds mock data for booking times:
```javascript
[
  {
    customerName: "Sudan",
    roomName: "Luxury",
    date: "2024-11-17",
    startTime: "10:00AM",
    endTime: "08:00PM",
  },
  // Add more booking data...
];
```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Inspired by room booking systems like hotel management applications.
- Built with Node.js and Express.js.
