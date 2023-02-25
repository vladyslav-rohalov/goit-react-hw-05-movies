import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, CastImg } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const KEY = '1a79c64c84b315bdc21ee91736e10707';
    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
    axios
      .get(URL)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [id]);

  return (
    <List>
      {cast.map(item => {
        return (
          <ListItem key={item.id}>
            {item.profile_path !== null ? (
              <CastImg
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={`Photo ${item.name}`}
              />
            ) : (
              <CastImg
                src={require('../../image/noImage.png')}
                alt={`Photo ${item.name}`}
              />
            )}

            {item.name}
          </ListItem>
        );
      })}
    </List>
  );
}
