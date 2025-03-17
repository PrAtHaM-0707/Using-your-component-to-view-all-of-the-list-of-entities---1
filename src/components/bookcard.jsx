import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.title}>{name}</h2>
      <h4 style={styles.genre}>Genre: {genre}</h4>
      <h4 style={styles.author}>Author: {author}</h4>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    maxWidth: "250px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0",
  },
  genre: {
    fontSize: "14px",
    color: "#555",
  },
  author: {
    fontSize: "14px",
    color: "#777",
  },
};

export default BookCard;
