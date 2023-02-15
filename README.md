Book Search App

The Book-Catalouge App is a web application that allows users to search for books using the Google Books API. It was built using React and Typescript on the front-end and Express.js on the back-end.

GOOGLE API_KEY is required to run the application, you can add it on SearchBooks.js. 

Features

The Book Search App allows users to:

- Search for books using keywords
- View a list of books matching their search query
- View detailed information about a specific book
- Navigate through multiple pages of search results using pagination

Getting Started

To get started with the Book-Catalouge App, you will need to have the following tools installed:

Node.js
NPM or Yarn package manager

Installation

To install the Book-Catalouge App, follow these steps:

Clone the repository from GitHub using the following command:

bash

git clone https://github.com/your-username/book-search-app.git
Navigate to the root directory of the project using the terminal.

Run the following command to install the required packages:


npm install
or


yarn install

Usage
To start the application, navigate to the root directory of the project and run the following command:


npm start

or
yarn start

The application will be available at http://localhost:3000. 


To search for a book, enter a keyword in the search bar and click the "Search" button. The app will query the Google Books API and display a list of books matching the search query. You can click on a buy button to view more detailed information about it.

To navigate through multiple pages of search results, use the pagination controls at the bottom of the list of books.

Production Build
To create a production build of the Book Search App, run the following command:


npm run build
or


yarn build

This will create a build directory containing the production build of the app.

Docker

The Book Search App can be run inside a Docker container. To create a Docker image of the app, run the following command in the root directory of the project:


docker build -t book-catalog 

This will create a Docker image with the name book-catalog.

To run the app inside a Docker container, run the following command:

docker run -p 3000:3000 book-catalog

This will start a Docker container and map the container's port 3000 to the host machine's port 3000. The app will be available at http://localhost:3000.

API Reference
The Book Search App uses the Google Books API to search for books. The API provides the following endpoints: https://developers.google.com/books/docs/v1/using

