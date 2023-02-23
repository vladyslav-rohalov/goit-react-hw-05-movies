import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Reviews() {
  const [reviews, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const KEY = '1a79c64c84b315bdc21ee91736e10707';
    const URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`;
    axios
      .get(URL)
      .then(response => {
        setReview(response.data.results);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [id]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              Author: {review.author} <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
}
