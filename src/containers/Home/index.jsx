import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Background,
  ConatinerButtons,
  Container,
  Info,
  Poster,
} from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import {
  getMovies,
  getPersonPopular,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
} from '../../services/getData';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [personPopular, setPersonPopular] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      setMovie(await getMovies());
      setTopMovies(await getTopMovies());
      setTopSeries(await getTopSeries());
      setPopularSeries(await getPopularSeries());
      setPersonPopular(await getPersonPopular());
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ConatinerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assita agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assita o Trailer
                </Button>
              </ConatinerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="poster-movie" />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title="Top Filmes" />}
      {topSeries && <Slider info={topSeries} title="Top Séries" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Séries Populares" />
      )}
      {personPopular && <Slider info={personPopular} title="Top Artistas" />}
    </>
  );
}

export default Home;
