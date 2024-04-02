# Entertainment App

The Entertainment App is a full-stack application designed to provide users with access to a vast collection of movies and TV shows, leveraging the TMDB API for fetching media details. It features user authentication, media exploration, and personal bookmarks, offering a comprehensive and personalized media browsing experience.

## Features

- **User Authentication**: Utilizes JWT for secure login and registration, ensuring user data protection.
- **Media Exploration**: Allows users to discover trending movies and TV shows, with detailed views available for each media item.
- **Bookmarks**: Enables users to bookmark their favorite media, creating a personalized list of favorites accessible at any time.
- **Detailed Media Information**: Provides in-depth details about movies and TV shows, including cast, genres, ratings, and more.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB instance (local or remote)
- TMDB API key for fetching media data

### Backend Setup

1. **Clone the Repository**: Start by cloning the Entertainment App repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/entertainment-app.git
   ```
   
2. **Navigate to the Backend Directory**: Move into the `backend` directory of the project.
   ```bash
   cd entertainment-app/backend
   ```

3. **Install Dependencies**: Install the necessary dependencies using npm.
   ```bash
   npm install
   ```

4. **Configure Environment Variables**: Create a `.env` file based on the provided `.env.example` file. Provide your MongoDB URI and TMDB API key in the `.env` file.
   ```bash
    MONGODB_URL= "your mongodb url"
    SECRET_TOKEN= "your secret token for user authentication"
    TMDB_TOKEN= "your tmdb access token for tmdb media data"
   ```

5. **Start the Server**: Run the backend server.
   ```bash
   npm start
   ```

6. **Verify Backend Setup**: Confirm that the backend server is running without any errors.

### Frontend Setup

1. **Navigate to the Frontend Directory**: Move into the `frontend` directory of the project.
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm.
   ```bash
   npm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in the frontend directory and specify the URL of the backend server. For example:
   ```bash
   REACT_APP_BACKEND_URL= "your live backend server"
   VITE_APP_TMDB_API_KEY= "your tmdb api key for image"
   ```

4. **Start the Application**: Run the frontend application.
   ```bash
   npm run dev
   ```

5. **Access the Application**: Open your web browser and navigate to the specified URL (default: `http://localhost:3000`) to access the Entertainment App.

By following these steps, you should have both the backend server and frontend application running locally, allowing you to explore the features of the Entertainment App.
## Project Structure

### Backend

- **Controllers**: Contains logic for handling API requests, such as `DetailMediaController.js` for fetching detailed media information.
- **Models**: Defines the schema for database collections, including Users and Bookmarks.
- **Routes**: API routes for handling requests to different endpoints.
- **Middleware**: Includes middleware for authentication and error handling.
- **Utils**: Helper functions for interacting with external APIs (`fetchDataUtils.js`) and customizing media response data (`customizeMediaResponse.js`).

### Frontend

- **Components**: Reusable UI components like `SingleCard` for displaying media information.
- **Pages**: React components representing pages (`Home.jsx`, `Login.jsx`, `SignUp.jsx`, `MovieDetail.jsx`, and `TvDetail.jsx`), utilizing hooks like `useParams` and services (`TmdbService.js`) for fetching media details.
- **Services**: Functions for making API requests, including user authentication (`UserService.js`) and media data fetching (`TmdbService.js`).
- **Store**: Redux setup for state management, including slices like `BookmarkSlice.js` for managing bookmarks.
- **Utils**: Utility functions such as `cookieActionUtils.js` for managing cookies and `customToast.js` for displaying toast notifications.

### Deployment
- **Frontend** : https://entertainment-app-frontend-110.onrender.com
- **Backend** : https://entertainment-app-backend-110.onrender.com

### API Documentation
You can visit API documentation from [here](https://documenter.getpostman.com/view/29682764/2sA2xmVB3S)

### Database Design
You can visit Database Design from [here](https://docs.google.com/document/d/1iWpAIfILl7cN4DK83MJfC0teh3CVMQW79ts3X503EkQ/edit?usp=sharing)

## Note
If tmdb api is not working then change your system dns according to [this](https://www.isitdownrightnow.com/themoviedb.org.html)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

