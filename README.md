Email:dhanshribhawar@gmail.com
password:dhanshri@123


Overview
This project is a property management application built using React, Redux, and Material UI. It features user authentication, a property listing with search and filters, a shopping cart, and a checkout process. The application is designed to allow users to browse properties, manage a cart, and proceed to checkout.

Features
User Authentication: Users can log in and register.
Property Listings: Users can view, filter, and search properties.
Cart Management: Users can add properties to a cart, view cart details, and remove items.
Wishlist: Users can add properties to a wishlist.
Checkout Process: Users can enter booking details and proceed to checkout.
Responsive Design: The application is designed to be responsive on various screen sizes.


Tech Stack
Frontend: React, Redux, Material UI
State Management: Redux for global state management
Routing: React Router for navigation
Local Storage: For persisting cart and wishlist data


Project Structure
src/

components/
PropertyCard.js: Displays individual property details.
UserInfoModal.js: Modal component for user info and checkout.

Pages/
Cart.js: Manages the cart view and operations.
PropertyListing.js: Lists all properties with search and filter options.
Login.js: Login page for user authentication.
Register.js: Registration page for new users.


Context/
CartContext.js: Provides cart and wishlist state management.
AuthContext.js: Provides authentication state management.

Route/
PrivateRoute.js: Handles protected routes for authenticated users.

data/
propertiesdata.json: Contains dummy data for property listings.

App.js: Main application component with routing setup.
index.js: Entry point of the application.


Setup and Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install Dependencies:
npm install
npm start
Run the Application:

Usage
Login/Registration:

Navigate to /login or /register to log in or register a new user.
Browse Properties:

Go to /properties to view the list of properties. Use search and filter options to find properties.
Manage Cart:

Click the shopping cart icon to view and manage your cart. You can add or remove properties and proceed to checkout.
Wishlist:

Toggle the heart icon to add or remove properties from your wishlist.
Checkout:

Click "BOOK HOUSE" to enter booking details and proceed to checkout.
Code Highlights
Cart Management: Utilizes context and hooks for managing cart and wishlist state.
Search and Filter: Implemented search and filter functionality in the PropertyListing component.
<<<<<<< HEAD
Routing: Protected routes using PrivateRoute to ensure users are authenticated before accessing certain pages.
=======
Routing: Protected routes using PrivateRoute to ensure users are authenticated before accessing certain pages.
>>>>>>> origin/main
