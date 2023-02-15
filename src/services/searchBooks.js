import axios from 'axios';

const API_KEY = 'YOUR API KEY';

const searchBooks = async (query, startIndex = 0, maxResults = 40) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default searchBooks;

