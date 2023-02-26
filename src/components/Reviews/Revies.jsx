import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Author, P, Post, Review } from './Reviews.styled';

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
    <List>
      {reviews.length > 0 ? (
        reviews.map(review => {
          return (
            <Review key={review.id}>
              <Author>Author:{review.author}</Author>
              <Post>{review.content}</Post>
            </Review>
          );
        })
      ) : (
        <P>We don't have any reviews for this movie</P>
      )}
    </List>
  );
}
