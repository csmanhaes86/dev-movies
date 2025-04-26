import { useEffect, useState } from 'react';

import api from '../../services/api';
import { Background, ConatinerButtons, Container, Info, Poster } from './styles';
import Button from '../../components/Button';

function Home() {
  const [movie, setMovie] = useState()

  useEffect(() => {

    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular');

      setMovie(results[1])
      console.log(results);
    }
    console.log(movie);
    getMovies();
  }, [])


  return (
    <>
      {movie && (
        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ConatinerButtons>
                <Button red>Assita agora</Button>
                <Button>Assita o Trailer</Button>
              </ConatinerButtons>

            </Info>
            <Poster>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster-movie" />
            </Poster>
          </Container>

        </Background>
      )}
    </>

  );
}

export default Home;


