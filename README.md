# Store Inventory Management API

A RESTful backend API for managing retail store inventory and products, built with **Node.js**, **Express**, and **MongoDB**.

## Features

- ✅ Add new products to the store
- ✅ View all available products
- ✅ Update product details
- ✅ Delete products from inventory
- ✅ Search products by name or category

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ODM)
- **Deployment:** Render

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account (or a local MongoDB instance)

### Installation

```bash
git clone https://github.com/<your-username>/store-inventory-api.git
cd store-inventory-api
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/store-inventory?retryWrites=true&w=majority
```

### Run Locally

```bash
npm run dev
```

The server will start at `http://localhost:5000`.

## API Endpoints

| Method   | Endpoint                      | Description              |
| -------- | ----------------------------- | ------------------------ |
| `GET`    | `/`                           | API welcome & info       |
| `POST`   | `/api/products`               | Add a new product        |
| `GET`    | `/api/products`               | Get all products         |
| `GET`    | `/api/products/:id`           | Get a product by ID      |
| `PUT`    | `/api/products/:id`           | Update a product         |
| `DELETE` | `/api/products/:id`           | Delete a product         |
| `GET`    | `/api/products/search?q=term` | Search by name/category  |

### Example: Create a Product

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with USB receiver",
    "price": 29.99,
    "quantity": 150,
    "category": "Electronics"
  }'
```

### Example Response

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "_id": "65f...",
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with USB receiver",
    "price": 29.99,
    "quantity": 150,
    "category": "Electronics",
    "createdAt": "2026-03-12T...",
    "updatedAt": "2026-03-12T..."
  }
}
```

## Deployment

This project is deployed on **Render**.

### Deploy to Render

1. Push this repository to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **New → Web Service**
4. Connect your GitHub repository
5. Set the following:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
6. Add the environment variable `MONGODB_URI` with your MongoDB Atlas connection string
7. Click **Deploy**

## License

ISC
