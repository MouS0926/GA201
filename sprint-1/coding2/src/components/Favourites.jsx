// Favourites.js
import  { useState, useEffect } from 'react';
import './Favourites.css'; 

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {

    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavourites(storedFavorites);
  }, []);

  return (
    <div className="container">
      <h2>Favourites</h2>
      {favourites.length === 0 ? (
        <p className="noFavourites">No favourites yet.</p>
      ) : (
        <ul>
          {favourites.map((item) => (
            <li key={item.id} className={item.completed ? 'completed' : ''}>
              <span>{item.title}</span>
              <span>{item.completed ? 'Completed' : 'Pending'}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
