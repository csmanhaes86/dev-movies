import { useEffect, useState } from 'react';
import { Background, Container } from './styles';
import api from '../../services/api';

function Modal({ movieId }) {

  const [movie, setMovie] = useState()
  useEffect(() => {
    async function getMovie() {
      const { data: { results } } = await api.get(`/movie/${movieId}/videos`);

      console.log(results[2])
      setMovie(results[2])
    }

    getMovie()
  }, [])

  return (
    <Background>
      {movie && (
        <Container>
          <iframe src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
