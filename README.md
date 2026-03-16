# Runstreet Sneaker Store

Runstreet Sneaker Store is a single-page e-commerce web application for browsing and managing sneaker products. Users can explore the product catalog, view product details, register, log in, and add items to the cart. The application also includes an admin panel for managing the sneaker inventory.

This project uses a React frontend and a `json-server` mock backend powered by `db.json`.

## Purpose

The application is designed as a simple sneaker shop experience with both customer and admin functionality. It demonstrates:

- product listing and product details pages
- user authentication flow
- cart management
- protected admin access
- CRUD operations for products through a mock API

## Technologies

- `React`
- `Vite`
- `React Router DOM`
- `Tailwind CSS`
- `React Context API`
- `json-server`
- `ESLint`

## Main Features

- Browse a catalog of sneaker products
- View detailed information for each product
- Register a new user account
- Log in with existing credentials
- Add and remove items from the shopping cart
- Restrict admin routes with protected access
- Create, edit, and delete products from the admin panel
- Display registered users inside the admin dashboard

## Project Structure

```text
src/
  components/      reusable UI and route protection
  context/         global authentication and cart state
  pages/           application pages
  App.jsx          route configuration
  main.jsx         app entry point
db.json            mock database for users and products
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the mock backend

```bash
npm run server
```

The mock API runs on:

```text
http://localhost:5000
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint
- `npm run server` starts `json-server` on port `5000`

## Authentication

Authentication is handled on the frontend with React Context, while user data is stored in the mock backend.

### Admin Test Account

```json
{
  "username": "admin",
  "password": "admin123",
  "role": "admin"
}
```

## Notes

- The backend is a mock API intended for local development.
- Cart state is managed in the frontend application state.
- The project folder is named `GlamourShop-master`, but the implemented application is a sneaker store.
