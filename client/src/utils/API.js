import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getGauges: function() {
    return axios.get("http://waterservices.usgs.gov/nwis/iv/?stateCd=ny&format=json");
  },
  getEvents: function() {
    return axios.get("/api/events");
  },
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};
